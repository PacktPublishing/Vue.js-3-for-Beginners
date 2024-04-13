<template>
  <SocialPost
    v-for="(post, index) in posts"
    :username="post.owner.firstName"
    :id="post.id"
    :avatarSrc="post.image"
    :post="post.text"
    :likes="post.likes"
    :key="post.id"
    @delete="removePost(index)"
  ></SocialPost>
</template>
  
<script setup>
  import { watch } from 'vue';
  import SocialPost from '../molecules/SocialPost.vue'
  import { usePostsStore } from '../../stores/posts';
  import { storeToRefs } from 'pinia'

  const postsStore = usePostsStore();
  const { posts } = storeToRefs(postsStore);
  const { fetchPosts, removePost } = postsStore;
  
  watch(
    posts.value,
    (newValue) => {
      if( newValue.length <= 3 ) {

      console.log("what is happening");
        fetchPosts(true);
      }
    }
  )
  fetchPosts();
  </script>
  