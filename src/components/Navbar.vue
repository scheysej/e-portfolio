<template>
    <nav class="navbar">
        <router-link to="/about-me">
            <h3 class="red">About me</h3>
        </router-link>
        <router-link to="/portfolio">
            <h3 class="red">Portfolio</h3>
        </router-link>
        <router-link to="/">
            <Logo></Logo>
        </router-link>
        <!-- Pdf can be put in public folder -->
        <a target="_blank" href="/sample.pdf">
            <h3 class="green">Resume</h3>
        </a>
        <router-link to="/contact-me">
            <h3 class="green">Contact</h3>
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

    justify-content: center;
    gap: 8%
        /* justify-content: space-around; - if u want more spaced out*/
        /* uncomment 23 and 24 tho */
}

.red {
    color: red;
}

.red:hover {
    text-decoration: underline;
    text-decoration-color: red
}

.green {
    color: #22ff00
}

.green:hover {
    text-decoration: underline;
    text-decoration-color: #22ff00
}

h3 {
    cursor: pointer;
}

router-link,
a {
    text-decoration: none;
}
</style>