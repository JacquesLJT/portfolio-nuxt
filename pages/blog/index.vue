<template>
  <div class="blog-home">
    <h1>Comments</h1>
    <div v-if="pending">
      <p>Loading comments...</p>
    </div>
    <div v-else-if="error">
      <p>Error fetching comments: {{ error }}</p>
    </div>
    <div v-else>
      <div v-if="comments.length === 0">
        <p>No comments found.</p>
      </div>
      <div v-else>
        <ul class="comment-list">
          <li v-for="comment in comments" :key="comment._id" class="comment-card">
            <p class="comment-text">{{ comment.text }}</p>
            <p class="comment-author">By: {{ comment.name }}</p>
            <p class="comment-date">{{ formatDate(comment.date) }}</p>
          </li>
        </ul>
        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <button @click="nextPage" :disabled="!hasMore">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFetch } from '#app'

interface Comment {
  _id: string;
  text: string;
  name: string;
  date: string;
  // Add other fields as necessary
}

const currentPage = ref(1)
const limit = ref(3)

// Use useFetch with reactive params for pagination
const params = computed(() => ({ page: currentPage.value, limit: limit.value }));
const { data: fetchedComments, pending, error } = useFetch<Comment[]>('/api/getPosts', { params });

// Computed property for comments
const comments = computed(() => fetchedComments.value || [])
const totalPages = computed(() => {
  if (comments.value.length === 0) return 1
  return Math.ceil(comments.value.length / limit.value)
})

// Heuristic to determine if there's a next page: if we received exactly 'limit' items, there might be more
const hasMore = computed(() => comments.value.length === limit.value)

function nextPage() {
  if (hasMore.value) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

// Simple date formatting function
function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString()
}
</script>

<style scoped>
.blog-home {
  max-width: 800px;
  margin: 80px auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.comment-list {
  list-style: none;
  padding: 0;
}

.comment-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
}

.comment-text {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.comment-author {
  font-size: 0.9rem;
  color: #555;
}

.comment-date {
  font-size: 0.8rem;
  color: #888;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.pagination button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
  border-radius: 3px;
  transition: background 0.3s ease;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination button:hover:not(:disabled) {
  background: #eee;
}
</style>
