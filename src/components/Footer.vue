<template>
    <section class="footer">
        <Logo></Logo>
        <h3>@{{ currentYear }} Ethan Scheys</h3>
    </section>
</template>

<script setup lang="ts">
import Logo from "../components/Logo.vue"

let currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.footer h3 {
    margin-top: 30px;
}
</style>