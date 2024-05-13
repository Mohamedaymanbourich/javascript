<template>
    <div class="form_emploi" >
      Titre: <input type="text" ref="nameInput"> <br><br>
      Body: <textarea ref="bodyInput"></textarea> <br><br>
      Tags (Séparé par une virgule (,)): <textarea ref="tagsInput"></textarea> <br><br>
      <button @click="ajouterPost">
        Ajouter un post
      </button><br><br>
    </div>
</template>

<script>
import { projectFirestore } from '../Firebase/Config.js'

export default {
  methods: {
    async ajouterPost() {
      const new_post = {
        Titre: this.$refs.nameInput.value,
        Body: this.$refs.bodyInput.value,
        tags: this.$refs.tagsInput.value,
        editeddate : [],
        createDate : new Date()
      };

      try {
        await projectFirestore.collection('Blog').add(new_post);
        alert('New post added successfully!');
        window.location.reload()
        this.$refs.nameInput.value = '';
        this.$refs.bodyInput.value = '';
        this.$refs.tagsInput.value = '';
      } catch (err) {
        console.error('Error adding post:', err.message);
        alert('Error adding post: ' + err.message);
      }
    }
  }
}
</script>

<style scoped>
.form_emploi {
  display: flex; 
  flex-direction: column;
  justify-content: space-evenly; 
  margin: 0 auto; 
  padding: 1rem; 
  border: 1px solid #ddd; 
  border-radius: 4px; 
  width: 300px; 
  font-size: smaller;
  color:#0059B3;
  margin-top:30px
}

input[type="text"],
textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical; 
  width: 100%; 
}

button {
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #04080b; 
  color: #fff;
  font-weight: bold;
}

button:hover {
  background-color: #003366; 
}
</style>
