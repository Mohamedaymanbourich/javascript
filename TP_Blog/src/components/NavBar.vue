<template>
    <div>
    <router-link to="/" class="lien">Home</router-link> | 
    <router-link to="/CreatePost" class="lien">Create a Post</router-link>
    <router-view></router-view></div>
</template>

<script setup>




</script>

<style>


button {
  background-color: #003366; /* Bootstrap primary blue */
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




.links > * {
  margin-right: 10px; 
}
.lien{
  background-color: #003366;
  color:#eef
}
</style>
