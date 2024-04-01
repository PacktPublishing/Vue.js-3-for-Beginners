<template>
    <header>
        <TheLogo />
        <h1>Companion app</h1>
        <span>
            <a href="#">
                Welcome {{ username }}
            </a>
            <IconSettings class="icon" />
        </span>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import TheLogo from '../atoms/TheLogo.vue';
import IconSettings from '../icons/IconSettings.vue';
const username = ref("Zelig880");
</script>

<style lang="scss">
header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-column-start: 1;
    grid-column-end: 3;
    padding-bottom:24px;
    border-bottom: solid 1px var(--color-border);

    .span {
        display: flex;
    }
    a{
        font-size: 16px;
        line-height: 24px;
        margin-right:8px;
        font-weight: bolder;
    }
    .icon {
        width: 16px;
        height: 16px;
        fill: var(--color-input-mute);
        margin-right: 5px;
        cursor: pointer;
    }
}

</style>