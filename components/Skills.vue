<template>
  <div class="skills" id="skills">
    <div class="skills__container">
      <div class="skills__title">
        <h1>Skills</h1>
      </div>
      <div class="skills__content">
        <div v-for="(skills, category) in data" :key="category" class="skills__category">
          <h2 class="category__title">{{ category }}</h2>
          <ul class="category__list">
            <li v-for="skill in skills" :key="skill" class="category__item">
              <span class="skill-text">{{ skill }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import data from '~/data/skills.json';
</script>

<style>
  .skills {
      box-sizing: border-box;
      height: calc(100vh - 80px);
      padding: 100px 0;
      background-color: #d9e3f2;
      font-family: 'Quicksand', sans-serif;
      background-image: url('~/assets/skills_background.webp');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
  }

  .skills__container {
      width: 80%;
      margin: 0 auto;
  }

  .skills__title {
      margin-bottom: 50px;
      text-align: center;
      outline: 1px solid red;
  }

  .skills__title h1 {
      font-size: 3rem;
      font-weight: 700;
  }

  .skills__content {
      display: flex;
      justify-content: space-between;
      width: 100%;
  }

  .skills__category {
      width: 20%;
      outline: 1px solid #101935;
      padding: 20px;
      margin: 10px;
      border-radius: 12px;
      background-color: rgba(16, 25, 53, 0.6);
      color: #d9e3f2;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }

  .skills__category:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }

  .category__title {
      font-size: 2rem;
      padding: 10px;
      text-align: center;
  }

  .category__item {
      font-size: 1.2rem;
  }
</style>
