<template>
  <SocialPost
    v-for="(post, index) in posts"
    :username="post.username"
    :userId="post.userId"
    :avatarSrc="post.avatar"
    :post="post.post"
    :comments="post.comments"
    :likes="post.likes"
    :retweets="post.retweets"
    :key="post.userId"
    @delete="onDelete(index)"
  ></SocialPost>
</template>
  
<script setup>
  import { reactive } from 'vue';
  import SocialPost from '../molecules/SocialPost.vue'

  const onDelete = ( postIndex ) => {
    posts.splice(postIndex, 1);
  }
  
  const posts = reactive([
    { username: "Username one",
      userId: "usernameId1",
      avatar: "https://i.pravatar.cc/40",
      post: "This is my post",
      comments: [
        "great post",
        "amazing post"
      ],
      likes: 2,
      retweets: 1,
      tags: [
        "tag 1"
      ]
    },
    { username: "Username two",
      userId: "usernameId2",
      avatar: "https://i.pravatar.cc/40",
      post: "This is my second post",
      comments: [],
      likes: 3,
      retweets: 1,
      tags: [
        "tag 1",
        "tag 2"
      ]
    }
  ]);
  
  </script>
  