<template>
    <form>
        <h2>Create a Post</h2>
        <textarea rows="4" cols="20"></textarea>
        <TheButton value="post" />
    </form>
</template>
<script setup>
import TheButton from '../atoms/TheButton.vue';
</script>
<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-border);
}
</style>