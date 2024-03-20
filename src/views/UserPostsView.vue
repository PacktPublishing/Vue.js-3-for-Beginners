<template>
  <SocialPost
    v-for="(post, index) in posts"
    :username="post.owner.firstName"
    :id="post.id"
    :avatarSrc="post.image"
    :post="post.text"
    :likes="post.likes"
    :key="post.id"
  ></SocialPost>
</template>
  
<script setup>
  import { reactive, ref, watch } from 'vue';
  import SocialPost from '../components/molecules/SocialPost.vue'
  import { useRoute } from 'vue-router';
  
  const posts = reactive([]);
  const fetchPosts = (userId) => {
    const baseUrl = "https://dummyapi.io/data/v1";
    fetch(`${baseUrl}/user/${userId}/post?limit=10`, {
      "headers": {
        "app-id": "657a3106698992f50c0a5885"
      }
    })
      .then( response => response.json())
      .then( result => {
        posts.push(...result.data);
      })
  }

  const route = useRoute();
  fetchPosts(route.params.userId);
  
</script>
  