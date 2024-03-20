
<template>
  <section class="userView">
    <h2>User information</h2>
    <template v-for="key in valuesToDisplay">
      <label v-if="user[key]">
        {{ key }}
        <input
          type="text"
          disabled
          :value="user[key]"
        />
      </label>
    </template>
  </section>
</template>
<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const user = reactive({});
const valuesToDisplay = [
  "title",
  "firstName",
  "lastName",
  "email",
  "picture",
  "gender"
];
const fetchUser = (userId) => {
  const url = `https://dummyapi.io/data/v1/user/${userId}`;
  fetch(url, {
    "headers": {
      "app-id": "657a3106698992f50c0a5885"
    }
  })
    .then( response => response.json())
    .then( result => {
      Object.assign(user, result.data);
    })
}

const route = useRoute();
fetchUser(route.params.userId);
</script>
<style scoped>
label {
  display: block;
  margin-bottom: 1rem;
}
</style>