<template>
    <TheHeader/>
    <h1><slot name="heading"></slot></h1>
    <main><slot name="default"></slot></main>
    <footer><slot name="footer">Copyright reserved to Vue.js for beginners</slot></footer>
</template>
<script setup>
import TheHeader from '../organisms/TheHeader.vue'
</script>
<style scoped>
h1, main, footer {
    grid-column-start: 1;
    grid-column-end: 3;
}
h1{
    align-items: center;
}
main {
    padding: 16px 32px;
}
footer {
    border-top: solid 1px lightgray;
}
</style>