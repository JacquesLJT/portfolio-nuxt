<template>
  <article>
    <h1>{{ post.title }}</h1>
    <div v-html="post.content"></div>
  </article>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const post = ref({ title: '', content: '' })

// Example function to fetch post data based on the slug
async function fetchPost(slug: string) {
  // Replace this with your actual data fetching logic
  // For example, fetching from an API or using Nuxt Content
  return {
    title: `Post titled ${slug}`,
    content: `<p>This is the content for the post with slug: ${slug}</p>`
  }
}

onMounted(async () => {
  const slug = route.params.slug as string
  post.value = await fetchPost(slug)
})
</script>

<style scoped>
  article {
    margin-top: 100px;
  }
</style>
