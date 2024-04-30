<template>
  <div class="form_emploi">
    Nom de l'emploi : <input type="text" v-model="jobs[index1].name"> <br><br>
    Salaire de l'emploi : <input type="text" v-model="jobs[index1].salary"> <br><br>
    Nombre d'employés : <input type="text" v-model="jobs[index1].num_employees"><br><br>
    Requirements : <textarea v-model="jobs[index1].requirements"></textarea> <br> <br>
    <button @click="modifier_emploi()">
      Modifier
    </button><br><br>
  </div>
</template>

<script>
export default {
  props: ['jobs', 'index1'],
  data() {
    return {}
  },
  methods: {
    async modifier_emploi() {
      try {
        const updatedJob = this.jobs[this.index1];
        const response = await fetch(`http://localhost:3000/jobs/${updatedJob.id}`, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(updatedJob)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        alert("Element modifié");
      } catch (error) {
        console.error('Error updating job:', error);
      }
    }
  }
}
</script>

<style scoped>
.form_emploi {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
