<template>
  <div>
    <h1>{{ post.Titre }}</h1>
    <div> 
    <h3 style="display: inline;">Body : </h3> {{ post.Body.substring(0, 50) }} ...
  
    </div><br>
    
    <div>
      <h3 style="display: inline;">Tags : </h3>
      
      <span v-for="tag in (typeof post.tags === 'string' ? post.tags.split(',') : post.tags)" :key="tag" class="tag">{{ tag }}</span>
    </div><br><br>
    <div class="links">
      
    <router-link :to="`/PostDetail/${post.id}`" class="lien">View Details</router-link> 
    <router-link :to="`/EditPost/${post.id}`" class="lien">Edit Post</router-link>
    <button @click="deletePost(post.id)">Delete Post</button> 
    
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { projectFirestore } from '../Firebase/Config'; 

const props = defineProps({
  post: {
    type: Object,
    default: () => ({
      Titre: '',
      Body: '',
      tags: '',
      id: ''
    })
  }
});

async function deletePost(id) {
  try {
    await projectFirestore.collection('Blog').doc(id).delete();
    alert('Post deleted successfully.');
    window.location.reload();

  } catch (err) {
    console.error('Error deleting post:', err.message);
    alert('Failed to delete post: ' + err.message);
  }
}
</script>

<style scoped>
.tag {
  background-color: #eef;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  display: inline-block;
  color: #556;
}

button {
  background-color: #007BFF; /* Bootstrap primary blue */
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

button:hover {
  background-color: #0056b3; /* A darker blue */
  transform: translateY(-2px); /* Slight lift */
}

button:active {
  transform: translateY(1px); /* Push down when clicked */
}

.lien {
  color: #007BFF; /* Matching the button blue */
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: color 0.3s, background-color 0.3s;
}

.lien:hover {
  background-color: #eef; /* Light blue background on hover */
  color: #0056b3; /* Dark blue text on hover */
}

/* Additional styles for visual separation and alignment */


.links > * {
  margin-right: 10px; /* Consistent spacing for all children */
}
.lien{
  background-color: #007BFF;
  color:#eef
}
</style>

