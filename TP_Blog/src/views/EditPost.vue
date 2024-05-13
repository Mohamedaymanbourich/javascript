<template>
    <div class="form_emploi" v-if="job">
      <h1>Modifier le Post</h1><br>

      Nom du post : <input type="text" v-model="job.Titre"> <br><br>

      Description du post : <textarea v-model="job.Body"></textarea> <br><br>

      Tags (comma-separated): <input type="text" v-model="job.tags"> <br><br>
      <button @click="updateJob">
        Modifier
      </button><br><br>
      <div v-if="error">{{ error }}</div>
    </div>
    <div v-else>Loading...</div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { projectFirestore } from '../Firebase/Config.js';
  
  const route = useRoute();
  const job = ref(null);
  const error = ref('');
  
  const jobId = route.params.id;
  

async function fetchJob() {
    try {
      const doc = await projectFirestore.collection('Blog').doc(jobId).get();
      if (doc.exists) {
        job.value = { id: doc.id, ...doc.data() };
      } else {
        error.value = 'Job not found';
      }
    } catch (err) {
      error.value = 'Error fetching job: ' + err.message;
    }
  }
  const new_date=new Date()


async function updateJob() {
    try {
      job.value.editeddate.push(new_date)
      
      await projectFirestore.collection('Blog').doc(job.value.id).update({
        Titre: job.value.Titre,
        Body: job.value.Body,
        tags: job.value.tags,
        editeddate : job.value.editeddate
      });
      alert("Post updated successfully!");
      window.location.reload()
    } catch (err) {
      error.value = 'Error updating job: ' + err.message;
    }
  }
  
  onMounted(fetchJob);
  </script>
  
  <style scoped>
  .form_emploi {
    max-width: 400px;
    margin: 0 auto;
    margin-top:20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  input[type="text"], textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color:#003366;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #66B3FF;
  }
  </style>
  