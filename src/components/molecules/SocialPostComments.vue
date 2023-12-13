<template>
  <div class="SocialPostComments">
      <p>Comments:</p>
      <div v-for="(comment, index) in comments" class="comment">
        <p>{{ comment }}</p>
        <IconDeleteVue />
      </div>
  </div>
</template>
  
<script setup >
import IconDeleteVue from '../icons/IconDelete.vue';
const props = defineProps({
  comments: Array
})
</script>
  
<style lang="scss">
.SocialPostComments{
  padding-left:24px;
  p {
    font-weight: bold;
  }
  .comment {
    display:flex;
    justify-content: space-between;
    background-color: var(--color-input-mute);
    border-radius: 10px;
    margin-bottom: 8px;
    padding:8px 16px;
    color:var(--color-background-soft);
    width: 75%;
  }
  svg {
    fill:var(--color-background-mute);
  }
}
</style>