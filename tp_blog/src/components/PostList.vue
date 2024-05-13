<template>

  <div v-for="(post,index) in posts" :key="index" class="single-post-container">
  Post {{ index +1}} : <div><SinglePost :post="post"/></div><br><br>
  </div>
</template>

<script setup>
import SinglePost from './SinglePost.vue';
import { projectFirestore } from '../Firebase/Config.js';
import { ref, onMounted } from 'vue';

let posts = ref([]);

async function fetchdata() {
  try {
    let res = await projectFirestore.collection('Blog').get();
    posts.value = res.docs.map(doc => {

      return { ...doc.data(), id: doc.id };
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}


onMounted(fetchdata);
</script>

<style>

.single-post-container {
  max-width: 800px; /* Maximum width of the container */
  margin: auto; /* Centers the container in the page */
  padding: 20px; /* Padding around the content */
  background-color: #FFFBFA; /* Light gray background color */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Subtle shadow for depth */
}
</style>
