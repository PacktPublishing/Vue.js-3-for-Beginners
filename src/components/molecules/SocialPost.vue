<template>
  <div
    class="SocialPost"
    :class="{ SocialPost__selected: selected}"
    @click="selected = !selected"
  >
    <div class="header">
      <img class="avatar" :src="avatarSrc" />
      <div class="name">{{ username }}</div>
      <div class="userId">{{ userId }}</div>
    </div>
    <div class="post">{{ post }}</div>
  </div>
</template>

<script setup >
import { onMounted, ref } from 'vue';

const selected = ref(false);

const props = defineProps({
  username: String,
  userId: Number,
  avatarSrc: String,
  post: String
});

onMounted( () => {
  console.log(props.username);
});
</script>

<style lang="scss">
.SocialPost{
  &__selected{
    border: white solid 1px;
  }
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;;
  }
  .avatar {
    border-radius: 50%;
    margin-right: 12px;
  }
  .name {
    font-weight: bold;
    margin-right: 8px;
    color: white;
  }
}
</style>