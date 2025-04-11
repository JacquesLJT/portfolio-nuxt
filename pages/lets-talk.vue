<template>
  <div class="lets-talk">
    <div class="lets-talk__container">
      <div class="lets-talk__title">
        <h1>
          Let's Talk
        </h1>
      </div>
      <div class="lets-talk__content">
        <div class="lets-talk__content--left">
          <img src="~/assets/headshot.webp" alt="Headshot of Landon Thibodeau" />
        </div>
        <div class="lets-talk__content--right">
          <p>
            I'm always looking for new opportunities to learn and grow. If you have a project you'd like to discuss, a question, or just want to say hi, feel free to reach out to me using the form below. I'll do my best to get back to you as soon as possible.
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div class="hidden">
              <label for="bot-field">Don't fill this out if you're human:</label>
              <input type="text" id="bot-field" name="bot-field" />
            </div>
            <div>
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label for="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" :disabled="submitting">
              <span v-if="!submitting">
                <font-awesome-icon :icon="['fas', 'paper-plane']" />
                Send
              </span>
              <span v-else>
                Sending
                <span class="dots">
                  <span class="bounce-dot">.</span>
                  <span class="bounce-dot">.</span>
                  <span class="bounce-dot">.</span>
                </span>
              </span>
            </button>
            <p v-if="errorMessage" class="error-message" role="alert" aria-live="assertive">{{ errorMessage }}</p>
            <p v-if="successMessage" class="success-message" role="alert" aria-live="assertive">{{ successMessage }}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';

const submitting = ref<boolean>(false);
const errorMessage = ref<string | null>(null);
const successMessage = ref<string | null>(null);

async function handleSubmit(event: Event) {
  event.preventDefault();
  submitting.value = true;
  errorMessage.value = null;
  successMessage.value = null;

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action || window.location.href, {
      method: form.method,
      body: formData,
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (!response.ok) {
      throw new Error(`There was an error submitting the form: ${response.statusText}`);
    } else {
      successMessage.value = 'Your message has been sent successfully!';
      form.reset();
      setTimeout(() => {
        successMessage.value = null;
      }, 1000);
    }
  } catch (error: any) {
    errorMessage.value = error.message || 'There was an error submitting the form.';
    setTimeout(() => {
      errorMessage.value = null;
    }, 1000);
  } finally {
    submitting.value = false;
  }
}
</script>

<style>
.lets-talk {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 100px 0;
  background-color: #d9e3f2;
  font-family: 'Quicksand', sans-serif;
}

.lets-talk__container {
  width: 80%;
  margin: 0 auto;
}

.lets-talk__title {
  margin-bottom: 50px;
  text-align: center;
}

.lets-talk__title h1 {
  font-size: 3rem;
  font-weight: 700;
}

.lets-talk__content {
  display: flex;
  justify-content: space-between;
}

.lets-talk__content--left {
  width: 40%;
  margin-right: 20px;
  text-align: center;
}

.lets-talk__content--left img {
  border: 5px solid #101935;
  border-radius: 50%;
}

.lets-talk__content--right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin-left: 20px;
}

.lets-talk__content--right form {
  display: grid;
  gap: 20px;
}

.lets-talk__content--right label {
  font-size: 1.2rem;
}

.lets-talk__content--right input,
.lets-talk__content--right textarea {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid #101935;
}

.lets-talk__content--right input:focus,
.lets-talk__content--right textarea:focus {
  outline: none;
  border-bottom-color: #FFEAEC;
}

.lets-talk__content--right button {
  width: 100%;
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #FFEAEC;
  color: #101935;
  border: 2px solid #101935;
  border-radius: 5px;
  box-shadow: 6px 6px 0 #101935;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.lets-talk__content--right button:hover {
  box-shadow: 3px 3px 0 #101935;
  transform: translateX(3px) translateY(3px);
}

.lets-talk__content--right button:active {
  box-shadow: 0 0 0 #101935;
  transform: translateX(6px) translateY(6px);
}

.bounce-dot {
  display: inline-block;
  will-change: transform;
  backface-visibility: hidden;
  animation: bounce-dots 1.5s ease-in-out infinite;
}

.bounce-dot:nth-child(1) {
  animation-delay: 0s;
}

.bounce-dot:nth-child(2) {
  animation-delay: 0.2s;
}

.bounce-dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce-dots {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-10px);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
}

.error-message {
  color: #ff0000;
  font-size: 1.1rem;
  margin-top: 10px;
}

.success-message {
  color: #008000;
  font-size: 1.1rem;
  margin-top: 10px;
}

.hidden {
  display: none;
}

@media (max-width: 768px) {
  .lets-talk__content {
    flex-direction: column;
  }
  .lets-talk__content--left,
  .lets-talk__content--right {
    width: 100%;
    margin: 0;
  }
}
</style>
