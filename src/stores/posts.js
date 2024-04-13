import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => (
    { posts: [], page: 0, inProgress: false }
  ),
  actions: {
    fetchPosts(newPage = false) {
      if(newPage) {
        this.page++;
      }
      const baseUrl = "https://dummyapi.io/data/v1";
      fetch(`${baseUrl}/post?limit=5&page=${this.page}`, {
        "headers": {
          "app-id": "657a3106698992f50c0a5885"
        }
      })
        .then( response => response.json())
        .then( result => {
          this.posts.push(...result.data);
        })
    },
    removePost(postIndex) {
      this.posts.splice(postIndex, 1);
    },
    addPost(postText) {
      const post = generatePostStructure(postText);
      this.posts.unshift(post);
      this.toggleInProgress();
    },
    toggleInProgress() {
      this.inProgress = !this.inProgress;
    }
  },
})

const generatePostStructure = (postText) => {
  return {
    id: "60d0fe4f5311236168a100cs",
    owner: {
      firstName: "Simone",
    },
    image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=40",
    text: postText,
    likes: 0
  }
}