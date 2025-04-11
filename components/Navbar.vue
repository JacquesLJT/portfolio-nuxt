<template>
    <div class="navbar" :class="['navbar', {'scrolling': scrolling, 'navbar-lets-talk': isLetsTalk }]">
        <div class="container">
            <div class="navbar__inner">
                <nuxt-link to="/" class="navbar__logo">
                    <img src="~/assets/logo-no-background.png" alt="Logo" />
                </nuxt-link>
                <div class="navbar__links">
                    <template v-if="!isLetsTalk">
                        <nuxt-link to="#home" class="navbar__link">Home</nuxt-link>
                        <nuxt-link to="#about" class="navbar__link">About</nuxt-link>
                        <nuxt-link to="#skills" class="navbar__link">Skills</nuxt-link>
                        <nuxt-link to="#projects" class="navbar__link">Projects</nuxt-link>
                        <nuxt-link to="#experience" class="navbar__link">Experience</nuxt-link>
                        <nuxt-link to="#certifications" class="navbar__link">Certifications</nuxt-link>
                    </template>
                </div>
                <div class="navbar__cta">
                    <template v-if="!isLetsTalk">
                        <nuxt-link to="/lets-talk" class="navbar__cta-link">Let's Talk!</nuxt-link>
                    </template>
                    <template v-else>
                        <nuxt-link to="/" class="navbar__cta-link">Back Home</nuxt-link>
                    </template>
                    <button @click="triggerBlogToast" class="navbar_cta-blog">Blog</button>
                </div>
            </div>
        </div>
    </div>
    <BlogToast ref="blogToast" />
</template>

<script lang="ts" setup>
    import { ref, onMounted, computed } from 'vue';
    import type { ComponentPublicInstance } from 'vue';
    import { useRoute } from 'vue-router';
    import BlogToast from './BlogToast.vue';

    type BlogToastInstance = ComponentPublicInstance<{
        showToast: (message: string, duration?: number, persistent?: boolean) => void;
    }>;
    const blogToast = ref<BlogToastInstance | null>(null);

    const route = useRoute();
    const isLetsTalk = computed(() => route.path === '/lets-talk');
    const scrolling = ref(false);

    onMounted(() => {
        window.addEventListener('scroll', () => {
            scrolling.value = window.scrollY > 0;
        });
    });

    const triggerBlogToast = () => {
        if (blogToast.value) {
            blogToast.value.showToast('Blog coming soon!', 5000, true);
        }
    }
</script>

<style>
    .navbar {
        position: fixed;
        left: 20px;
        right: 20px;
        top: 20px;
        height: 80px;
        background-color: #101935;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        border-radius: 15px;
        transition: all 0.5s ease-in-out;
    }

    .navbar.scrolling {
        left: 0;
        right: 0;
        top: 0;
        border-radius: 0;
    }

    .navbar.navbar-lets-talk {
        left: 0;
        right: 0;
        top: 0;
        border-radius: 0;
    }

    .container {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
    }

    .navbar__inner {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        outline: 1px solid red;
    }

    .navbar__logo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        margin-left: 10px;
        outline: 1px solid red;
        line-height: 0;
    }

    .navbar__logo img {
        height: 40px;
        width: auto;
        outline: 1px solid red;
        display: block;
        margin: auto;
    }

    .navbar__links {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .navbar__link {
        color: #FFEAEC;
        font-size: 1.2rem;
        text-decoration: none;
        font-family: 'quicksand', sans-serif;
    }

    .navbar__link:hover {
        border-bottom: 2px solid #D9E3F2;
        text-decoration: none;
    }

    .navbar__cta {
        display: flex;
        gap: 20px;
        justify-content: flex-end;
        margin-right: 10px;
    }

    .navbar__cta-link {
        font-size: 1.2rem;
        text-decoration: none;
        font-family: 'quicksand', sans-serif;
        padding: 10px 20px;
        border: 3px solid #FFEAEC;
        border-radius: 5px;
        color: #FFEAEC;
    }

    .navbar__cta-link:hover {
        background-color: #D9E3F2;
        color: #101935;
        box-shadow: 0 0 10px #D9E3F2;
        text-decoration: none;
    }

    .navbar_cta-blog {
        font-size: 1.2rem;
        text-decoration: none;
        font-family: 'quicksand', sans-serif;
        padding: 10px 20px;
        border: 3px solid #FFEAEC;
        border-radius: 5px;
        color: #101935;
        background-color: #FFEAEC;
    }

    .navbar_cta-blog:hover {
        background-color: #D9E3F2;
        color: #101935;
        box-shadow: 0 0 10px #D9E3F2;
        text-decoration: none;
    }

</style>
