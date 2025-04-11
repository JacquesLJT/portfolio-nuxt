<template>
    <div class="about" id="about">
        <div class="about__container">
            <div class="about__title">
                <h1>About Me</h1>
            </div>
            <div class="about__content">
                <div class="about__content--left">
                    <p>
                        From an early age, I was captivated by the world of computers—sparked by watching my dad’s passion for electronics and robotics. 
                        I eagerly dove into self-teaching, mastering HTML, CSS, and JavaScript through online tutorials, and even building simple websites and text-based games. 
                        Those early experiments, coupled with hands-on projects like tinkering with robotics and Arduino, set the stage for a lifelong passion for both coding and the underlying infrastructure that makes technology work.
                    </p>
                    <p>
                        Today, I’ve channeled that passion into a career where I blend creative software development with a deep appreciation for reliable, scalable systems. 
                        As a Software QA Analyst and Software Developer at WheresTheBus LLC, I build robust APIs in Python using Flask and Celery, 
                        deploy containerized applications with Docker, and manage services on AWS EC2 and AWS ElastiCache. 
                        I also work closely with customers—gathering requirements and crafting intuitive UI mockups in Figma—to deliver solutions that truly meet real-world needs.
                    </p>
                    <p>
                        Graduating cum laude from the University of Maine with a BS in Computer Science and a minor in Computer Engineering provided the formal foundation to complement my self-taught beginnings. 
                        Now, I’m eager to continue evolving my skill set and contribute to innovative projects that push the boundaries of modern web applications.
                    </p>
                </div>
                <div class="about__content--right">
                    <img src="~/assets/headshot.webp" alt="Headshot of Landon Thibodeau" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>
    .about {
        box-sizing: border-box;
        min-height: calc(100vh - 80px);
        padding: 100px 0;
        background-color: #d9e3f2;
        font-family: 'Quicksand', sans-serif;
    }

    .about__container {
        width: 80%;
        margin: 0 auto;
    }

    .about__title {
        margin-bottom: 50px;
        text-align: center;
        outline: 1px solid red;
    }

    .about__title h1 {
        font-size: 3rem;
        font-weight: 700;
    }

    .about__content {
        display: flex;
        justify-content: space-between;
    }

    .about__content--left {
        width: 50%;
        margin-right: 20px;
        font-size: 1.2rem;
    }

    .about__content--right {
        width: 50%;
        margin-left: 20px;
    }

    .about__content--right img {
        width: 80%;
        border: 5px solid #101935;
        border-radius: 50%;
    }
</style>
