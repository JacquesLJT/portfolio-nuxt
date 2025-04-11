<template>
  <div class="experience" id="experience">
    <div class="experience__container">
      <div class="experience__title">
        <h1>Experience</h1>
      </div>
      <div class="experience__content">
        <div v-for="(job, index) in jobs" :key="index" class="experience__job">
          <div class="job__header">
            <div class="job__logo-container">
              <img :src="job.logo" alt="Company Logo" class="job__logo" />
            </div>
            <div class="job__title-container">
              <h2 class="job__title">{{ job.title }}</h2>
              <h3 class="job__company">{{ job.company }}</h3>
              <h4 class="job__dates">{{ job.dates }}</h4>
            </div>
          </div>
          <div class="job__content">
            <p class="job__description">{{ job.description }}</p>
            <ul class="job__responsibilities">
              <li v-for="responsibility in job.responsibilities" :key="responsibility" class="job__responsibility">
                {{ responsibility }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import jobs from '~/data/experience.json';
</script>

<style>
  .experience {
    box-sizing: border-box;
    min-height: calc(100vh - 80px);
    padding: 100px 0;
    font-family: 'Quicksand', sans-serif;
    background-image: url('~/assets/experience_background.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
 
  .experience__container {
    width: 80%;
    margin: 0 auto;
  }
    
  .experience__title {
    margin-bottom: 50px;
    text-align: center;
  }
 
  .experience__title h1 {
    font-size: 3rem;
    font-weight: 700;
  }
 
  .experience__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
  }
 
  .experience__job {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
 
  .experience__job:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.15);
  }
 
  .job__header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    background-color: #f5f5f5;
    padding: 15px;
  }
 
  .job__logo-container {
    height: 80px;
    width: 80px;
    flex-shrink: 0;
  }
  
  .job__logo {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
 
  .job__title-container {
    margin-left: 15px;
  }
 
  .job__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }
 
  .job__company {
    font-size: 1.2rem;
    font-weight: 800;
    margin: 0;
  }
 
  .job__dates {
    font-size: 1rem;
    color: #777;
    margin: 0;
  }

  .job__content {
    padding: 15px;
  }
 
  .job__responsibilities {
    padding: 15px;
    margin: 0;
    list-style-type: disc;
    outline: 1px solid red;
  }
 
  .job__responsibility {
    margin-bottom: 10px;
    font-size: 1rem;
    color: #555;
  }
</style>
