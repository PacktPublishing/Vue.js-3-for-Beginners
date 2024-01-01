<template>
  <SocialPost
    v-for="(post, index) in posts"
    :username="post.owner.firstName"
    :id="post.id"
    :avatarSrc="post.image"
    :post="post.text"
    :likes="post.likes"
    :key="post.id"
    @delete="onDelete(index)"
  ></SocialPost>
</template>
  
<script setup>
  import { reactive, ref, watch } from 'vue';
  import SocialPost from '../molecules/SocialPost.vue'

  const onDelete = ( postIndex ) => {
    posts.splice(postIndex, 1);
  }
  
  const posts = reactive([]);
  const page = ref(0);
  watch(
    posts,
    (newValue) => {
      if( newValue.length <= 3 ) {
        page.value++;
        fetchPosts(page.value);
      }
    }
  )
  const fetchPosts = (page = 0) => {
    const baseUrl = "https://dummyapi.io/data/v1";
    fetch(`${baseUrl}/post?limit=5&page=${page}`, {
      "headers": {
        "app-id": "657a3106698992f50c0a5885"
      }
    })
      .then( response => response.json())
      .then( result => {
        posts.push(...result.data);
      })
  }
  fetchPosts();
  
  </script>
  