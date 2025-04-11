<template>
  <footer>
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__content--left">
          <div class="footer__content--logo">
            <img src="~/assets/logo-no-background.png" alt="Logo" />
          </div>
          <h4>
            Get in touch!
          </h4>
          <ul>
            <li>
              <a href="mailto:me@landonthibodeau.com">
                <font-awesome-icon :icon="['fas', 'envelope']" />
                me@landonthibodeau.com
              </a>
            </li>
            <li>
              <a href="https://goo.gl/maps/Ek1KHCrFnYsGDjsJA" target="_blank">
                <font-awesome-icon :icon="['fas', 'map-location-dot']" />
                Dorchester, MA
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__content--center">
          <h4>
            Navigation
          </h4>
          <ul>
            <li>
              <a href="/#home">
                Home
              </a>
            </li>
            <li>
              <a href="/#about">
                About
              </a>
            </li>
            <li>
              <a href="/#skills">
                Skills
              </a>
            </li>
            <li>
              <a href="/#projects">
                Projects
              </a>
            </li>
            <li>
              <a href="/#experience">
                Experience
              </a>
            </li>
            <li>
              <a href="/#certifications">
                Certifications
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__content--right">
          <h4>
            Resources
          </h4>
          <ul>
            <li>
              <a href="resume.pdf" target="_blank">
                <font-awesome-icon :icon="['fas', 'file-pdf']" />
                Resume
              </a>
            </li>
          </ul>
          <h4>
            Connect with me
          </h4>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/landonthibodeau/" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/JacquesLJT" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://x.com/landonthibodeau" target="_blank">
                <font-awesome-icon :icon="['fab', 'x-twitter']" />
                X
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2025 Landon Thibodeau</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style>
  h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }

  footer {
    background-color: #101935;
    color: #FFEAEC;
  }

  a {
    color: #FFEAEC;
    text-decoration: none;
  }

  a:hover {
    color: #FFEAEC;
    text-decoration: underline;
  }

  li {
    font-family: 'Roboto', sans-serif;
  }

  .footer__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    width: 80%;
    margin: 0 auto;
    padding-top: 20px;
    outline: 1px solid red;
  }

  .footer__content--logo img {
    height: 40px;
    width: auto;
    display: block;
  }

  .footer__content--left ul {
    list-style-type: none;
    text-decoration: none;
    padding: 0;
  }

  .footer__content--left li {
    margin-bottom: 6px;
    font-size: 0.9rem;
  }

  .footer__content--center ul {
    list-style-type: none;
    text-decoration: none;
    padding: 0;
  }

  .footer__content--center li {
    margin-bottom: 6px;
    font-size: 0.9rem;
  }

  .footer__content--right ul {
    list-style-type: none;
    text-decoration: none;
    padding: 0;
  }

  .footer__content--right li {
    margin-bottom: 6px;
    font-size: 0.9rem;
  }

  .footer__bottom {
    background-color: #FFEAEC;
    color: #101935;
    text-align: center;
    padding: 10px 0;
  }

  .footer__bottom p {
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
  }
</style>
