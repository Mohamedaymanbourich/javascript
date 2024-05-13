<template>
  <div v-if="post" class="post-container">
    <h1>{{ post.Titre }}</h1>
    <h2>Body :</h2>
    <p class="post-body">{{ post.Body }}</p>
    <h2>Tags :</h2>
    <div>
      <span v-for="tag in (typeof post.tags === 'string' ? post.tags.split(',') : post.tags)" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
  <div v-else>
    Loading post details...
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { projectFirestore } from '@/Firebase/Config'; 

const route = useRoute();
const post = ref(null);

async function fetchdata() {
  const postId = route.params.id; 
  try {
    let doc = await projectFirestore.collection('Blog').doc(postId).get();
    if (doc.exists) {
      post.value = { ...doc.data(), id: doc.id }; 
    } else {
      console.error("No such document!");
    }
  } catch (error) {
    console.error("Error fetching post:", error);
  }
}

onMounted(fetchdata);
</script>

<style>
.post-container {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  margin-top:20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
}

h1 {
  font-size: 2.5em;
  color: #333;
}

h2 {
  font-size: 1.5em;
  color: #666;
}

.post-body {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2em;
  line-height: 1.6;
  color: #444;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tag {
  background-color: #eef;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  display: inline-block;
  color: #556;
}
</style>
