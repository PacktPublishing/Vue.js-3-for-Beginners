<template>
    <aside>
        <h2>Sidebar</h2>
        <button>Create Post</button>
        <div>
            Current time: {{currentTime}}
        </div>
        <button>Update Time</button>
    </aside>
</template>
<script setup>
import { ref } from 'vue';
const currentTime = ref(new Date().toLocaleTimeString());
</script>
<style scoped>
aside {
    display: flex;
    flex-direction: column;
}
</style>