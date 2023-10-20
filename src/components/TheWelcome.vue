<template>
  <SocialPost
    :username="posts[0].username"
    :userId="posts[0].userId"
    :avatarSrc="posts[0].avatar"
    :post="posts[0].post"
  ></SocialPost>
  <SocialPost
    :username="posts[1].username"
    :userId="posts[1].userId"
    :avatarSrc="posts[1].avatar"
    :post="posts[1].post"
  ></SocialPost>
</template>

<script setup>
import { reactive } from 'vue';
import SocialPost from './molecules/SocialPost.vue'

const posts = reactive([
  { username: "Username one",
    userId: "usernameId1", 
    avatar: "https://i.pravatar.cc/40",
    post: "This is my post"
  },
  { username: "Username two",
    userId: "usernameId2", 
    avatar: "https://i.pravatar.cc/40",
    post: "This is my second post"
  }
]);

</script>
