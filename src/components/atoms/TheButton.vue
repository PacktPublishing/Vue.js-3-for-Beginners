<template>
    <button
        :class="[size, theme]"
    >
     {{  value  }}
    </button>
</template>
<script>
defineProps({
})
</script>
<style scoped>
.normal {
    padding: 8px 16px;
    font-size: 16px;
}
.large {
    padding: 16px 32px;
    font-size: 24px;
}
.light {
    background-color: #1DA1F2;
    color: white;
}
.dark {
    background-color: black;
    color: #1DA1F2;
}
</style>