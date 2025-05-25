<template>
  <div class="certifications" id="certifications">
    <div class="certifications__container">
      <div class="certifications__title">
        <h1>Certifications</h1>
      </div>
      <div class="certifications__content">
        <div v-for="(certification, index) in certifications" :key="index" class="certifications__certification">
          <div class="certification__header">
            <div class="certification__logo-container">
              <img :src="certification.certificateImg" alt="Certification Logo" class="certification__logo" />
            </div>
            <div class="certification__title-container">
              <h2 class="certification__title">{{ certification.certificateName }}</h2>
              <h4 class="certification__authority">{{ certification.certificateAuthority }}</h4>
            </div>
          </div>
          <div class="certification__content">
            <h2 class="certification__date">Issued: {{ certification.issuedDate }}</h2>
            <p class="certification__id">Certificate ID: {{ certification.certificateId }}</p>
            <a :href="certification.certificateUrl" class="certification__link">
              View Certification
              <font-awesome-icon :icon="['fas', 'external-link-alt']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import certifications from '~/data/certifications.json';
</script>

<style>
  .certifications {
    box-sizing: border-box;
    min-height: 50vh;
    padding: 100px 0;
    font-family: 'Quicksand', sans-serif;
    background-color: #d9e3f2;
  }

  .certifications__container {
    width: 80%;
    margin: 0 auto;
    /* outline: 1px solid red; */
  }

  .certifications__title {
    margin-bottom: 50px;
    text-align: center;
  }

  .certifications__title h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  .certifications__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    width: 30%;
    margin: 0 auto;
    /* outline: 1px solid red; */
  }

  .certifications__certification {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .certifications__certification:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  .certification__header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    background-color: #f5f5f5;
    padding: 15px;
  }

  .certification__logo-container {
    height: 80px;
    width: 80px;
    flex-shrink: 0;
  }

  .certification__logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .certification__title-container {
    margin-left: 15px;
  }

  .certification__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }

  .certification__authority {
    font-size: 1rem;
    color: #777;
    margin: 0;
  }

  .certification__content {
    padding: 15px;
    gap: 10px;
  }

  .certification__date {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
  }

  .certification__id {
    font-size: 1rem;
    color: #777;
    margin: 0;
  }

  .certification__link {
    background-color: #f5f8fa;
    color: #101935;
    border: 1px solid #ccc;
    padding: 6px 12px;
    margin-top: 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    display: inline-block;
    text-decoration: none;
  }

  .certification__link:hover {
    background-color: #ebeff2;
  }

  .certification__link:active {
    background-color: #e0e4e8;
  }

</style>
