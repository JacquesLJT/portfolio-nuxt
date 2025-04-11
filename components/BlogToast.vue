<template>
  <div v-if="show" class="toast-container">
    <p class="toast-message">
      {{ message }}
      <span class="toast-close" @click="closeToast">X</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const message = ref<string>('');
const show = ref<boolean>(false);
const duration = ref<number>(3000);

const closeToast = () => {
  show.value = false;
};

const showToast = (msg: string, durationMs: number = 3000) => {
  message.value = msg;
  duration.value = durationMs;
  show.value = true;

  setTimeout(() => {
    closeToast();
  }, duration.value);
};

defineExpose({ showToast });
</script>

<style>
.toast-container {
  position: fixed;
  top: 120px;
  right: 20px;
  background-color: #282c34;
  color: #fff;
  padding: 15px 25px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.toast-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 4px 8px;
  font-size: 1rem;
  font-family: Arial, sans-serif;
}

.toast-close {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #fff;
}

.toast-close:hover {
  color: #ff5555;
}

.toast-close:active {
  transform: scale(0.9);
}

.toast-close:focus {
  outline: none;
}

.toast-close:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}
</style>
