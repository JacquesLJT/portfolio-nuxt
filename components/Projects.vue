<template>
  <div class="projects" id="projects">
    <div class="projects__container">
      <div class="projects__title">
        <h1>Projects</h1>
      </div>
      <div class="projects__content">
        <div v-for="(project, index) in projects" :key="index" class="projects__project">
          <h2 class="project__title">{{ project.title }}</h2>
          <div class="project__content">
            <div class="project__image-container">
              <img :src="project.image" alt="Project Image" class="project__image" @click="openModal(project.image)"/>
            </div>
            <div class="project__description-container">
              <transition-group name="list" tag="div">
                <p
                  v-for="(paragraph, pIndex) in (showAllMap[index] ? project.description : project.description.slice(0, 3))"
                  :key="pIndex"
                  class="project__description"
                  :style="{ transitionDelay: ((showAllMap[index] ? pIndex : (project.description.length - 1 - pIndex)) * 0.2) + 's' }"
                >
                  {{ paragraph }}
                </p>
              </transition-group>
              <button
                v-if="project.description.length > 3"
                @click="toggleShow(index)"
                class="project__show-more"
              >
                {{ showAllMap[index] ? 'Show Less' : 'Show More' }}
              </button>
            </div>
          </div>
          <a :href="project.link" class="project__link">
            View Project
            <font-awesome-icon :icon="['fas', 'external-link-alt']" />
          </a>
        </div>
      </div>
    </div>
    <transition name="modal">
      <div class="modal-overlay" v-if="modalImage" @click="modalImage = null">
        <div class="modal-content" @click.stop>
          <img :src="modalImage" alt="Enlarged Project Image" />
          <button class="modal-close" @click="modalImage = null">
            <font-awesome-icon :icon="['fas', 'xmark']" size="2xl" style="color: red;" class="modal-close-icon"/>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
  import projects from '~/data/projects.json';
  import { ref } from 'vue';
  
  const showAllMap = ref<boolean[]>(projects.map(() => false));
  const modalImage = ref<string | null>(null);
  
  function openModal(image: string) {
    modalImage.value = image;
  }
  
  function toggleShow(index: number) {
    showAllMap.value[index] = !showAllMap.value[index];
  }
</script>

<style>
  .projects {
    box-sizing: border-box;
    min-height: calc(100vh - 80px);
    padding: 100px 0;
    background-color: #d9e3f2;
    font-family: 'Quicksand', sans-serif;
  }

  .projects__container {
    width: 80%;
    margin: 0 auto;
  }

  .projects__title {
    margin-bottom: 50px;
    text-align: center;
    outline: 1px solid red;
  }

  .projects__title h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  .projects__content {
    outline: 1px solid red;
  }

  .projects__project {
    outline: 1px solid red;
  }

  .project__title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .project__content {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

  .project__image-container {
    flex: 1;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .project__image {
    width: 100%;
    display: block;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .project__image:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .project__description-container {
    flex: 1;
    outline: 1px solid red;
  }

  .project__description {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .project__show-more {
    background-color: #C6D5EB;
    color: #101935;
    border: 2px solid #101935;
    box-shadow: 6px 6px 0 #101935;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  }

  .project__show-more:hover {
    box-shadow: 3px 3px 0 #101935;
    transform: translateX(3px) translateY(3px);
  }

  .project__show-more:active {
    box-shadow: none;
    transform: translateX(6px) translateY(6px);
  }

  .list-enter-active,
  .list-leave-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  .list-enter-from {
    transform: translateY(-20px);
    opacity: 0;
  }
  .list-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }

  .project__link {
    background-color: #C6D5EB;
    color: #101935;
    border: 2px solid #101935;
    box-shadow: 6px 6px 0 #101935;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
    display: inline-block;
    text-decoration: none;
  }

  .project__link:hover {
    box-shadow: 3px 3px 0 #101935;
    transform: translateX(3px) translateY(3px);
  }

  .project__link:active {
    box-shadow: none;
    transform: translateX(6px) translateY(6px);
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    outline: 1px solid red;
  }

  .modal-content {
    position: absolute;
    outline: 1px solid red;
  }

  .modal-content img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
  }

  .modal-close {
    position: absolute;
    top: -40px;
    right: -40px;
    background: transparent;
    border: none;
    padding: 10px;
    cursor: pointer;
  }

  .modal-close-icon {
    transition: transform 0.3s ease-in-out;
  }
  .modal-close-icon:hover {
    transform: rotate(90deg);
  }
</style>
