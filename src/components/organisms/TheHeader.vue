<template>
    <header>
        <img src="https://picsum.photos/50/50" />
        <h1>Companion app</h1>
        <a href="#">
            Welcome 
            <span>Zelig880</span>
        </a>
    </header>
</template>
<script setup>
</script>
<style lang="scss">
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-column-start: 1;
    grid-column-end: 3;
    margin-bottom:24px;

    a span {
        font-weight: bold;
    }
}

</style>