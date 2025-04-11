<template>
  <div class="hero" id="home">
    <div class="welcome__container">
      <h1>Hey, I'm Landon!</h1>
    </div>
    <div class="icon__container">
      <font-awesome-icon :icon="['fas', 'chevron-down']" size="8x" class="arrow down"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style>
  .hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('~/assets/hero_background.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .welcome__container {
    font-family: 'Quicksand', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .icon__container {
    position: absolute;
    bottom: 20px;
  }

  .arrow {
    animation: bounce 2s infinite;
  }

  .down {
    animation-direction: alternate;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }
</style>
