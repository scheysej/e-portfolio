<template>
    <nav class="navbar">
        <router-link to="/about-me">
            <h3 class="white">About me</h3>
        </router-link>
        <router-link to="/portfolio">
            <h3 class="white">Portfolio</h3>
        </router-link>
        <router-link to="/">
            <Logo></Logo>
        </router-link>
        <!-- Pdf can be put in public folder -->
        <a target="_blank" href="/2023_EthanScheys_CV - Copy.pdf">
            <h3 class="white">Resume</h3>
        </a>
        <router-link to="/contact-me">
            <h3 class="white">Contact</h3>
        </router-link>
    </nav>
</template>

<script lang='ts' setup>
import Logo from './Logo.vue';
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    height: 170px;

    /* justify-content: center;
    gap: 8% */
    justify-content: space-around;

    margin-right: 17px
        /*- if u want more spaced out*/
        /* uncomment 23 and 24 tho */
}

.white {
    color: rgb(255, 255, 255);
}

.white:hover {
    text-decoration: underline;
    text-decoration-color: rgb(255, 255, 255)
}

.gray {
    color: #2D2A2A
}

.gray:hover {
    text-decoration: underline;
    text-decoration-color: #2D2A2A
}

h3 {
    cursor: pointer;
}

router-link,
a {
    text-decoration: none;
}
</style>