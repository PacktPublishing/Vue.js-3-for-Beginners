<template>
    <aside :class="{ 'sidebar__closed': closed}">
        <template v-if="closed">
            <IconRightArrow class="sidebar__icon" @click="toggleSidebar" />
        </template>
        <template v-else>
            <h2>Sidebar</h2>
            <IconLeftArrow class="sidebar__icon" @click="toggleSidebar" />
            <TheButton>Create post</TheButton>
            <div>
                Current time: {{currentTime}}
            </div>
            <TheButton @click="onUpdateTimeClick">Update Time</TheButton>
            <router-link to="privacy">Privacy</router-link>
            <router-link to="about">About</router-link>
            <a @click="navigateToPrivacy">Programmatic to privacy</a>
        </template>
    </aside>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import TheButton  from '../atoms/TheButton.vue'
import IconLeftArrow from '../icons/IconLeftArrow.vue'
import IconRightArrow from '../icons/IconRightArrow.vue'
const currentTime = ref(new Date().toLocaleTimeString());
const closed = ref(false);
const router = useRouter();

const toggleSidebar = () => {
    closed.value = !closed.value;
    window.localStorage.setItem("sidebar", closed.value);
}
const onUpdateTimeClick = () => {
    currentTime.value = new Date().toLocaleTimeString();
};
const navigateToPrivacy = (event) => {
    event.preventDefault();
    console.log("Run a side effect");
    router.push("privacy");
}

onBeforeMount( async () => {
    const sidebarState = window.localStorage.getItem("sidebar");
    closed.value = sidebarState === "true";
});
</script>
<style scoped>
aside {
    display: flex;
    flex-direction: column;
    position: relative;
    &.sidebar__closed{
        width: 40px;
    }
    .sidebar__icon{
        position: absolute;
        right: 12px;
        top: 22px;
        cursor: pointer;
    }
}
</style>