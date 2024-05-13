<template>
  <div class="container">

    <div class="cloud">
      <NavBar />
    </div>
    
    <div class="nav">
      <TagCloud :tags="tags" />
    </div>
  </div>



</template>

<script setup>
import NavBar from '../src/components/NavBar.vue';
import TagCloud from '../src/components/TagCloud.vue'; 
import { projectFirestore } from './Firebase/Config.js';
import { ref, onMounted } from 'vue';

let tags = ref([]); 

async function fetchdata() {
  try {
    const res = await projectFirestore.collection('Blog').get();
    let allTags = []; 

    // Process each document
    res.docs.forEach(doc => {
      const data = doc.data();
      if (data.tags) {

        allTags.push(...data.tags.split(','));
      }
    });

    tags.value = allTags;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

onMounted(fetchdata);
</script>

<style>
body{
  background-color: #FFFBFA;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; /* Font styles */
  -webkit-font-smoothing: antialiased; /* Smooth fonts on WebKit browsers */
  -moz-osx-font-smoothing: grayscale; /* Smooth fonts on Firefox for macOS */
  text-align: center; /* Center text alignment */
  color: #2c3e50; /* Dark blue text color */
  
}

nav {
  padding: 30px; /* Padding around the navigation bar */
}

nav a {
  font-weight: bold; /* Bold font for navigation links */
  color: #2c3e50; /* Dark blue color for navigation links */
}

nav a.router-link-exact-active {
  color: #0080FF; /* Green color for the active navigation link */
}

.container{
  display: flex;
}
.cloud{
  width: 85%;
}

.nav{
  width: 15%;
}

</style>
