<template>
  <div class="form_emploi">
    Nom de l'emploi : <input type="text" ref="name"> <br><br>
    Salaire de l'emploi : <input type="text" ref="salary"> <br><br>
    Nombre d'employés : <input type="text" ref="num_employees"><br><br>
    Requirements : <textarea ref="requirements"></textarea> <br> <br>
    <button @click="ajouter_emploi()">
      Ajouter un emploi
    </button><br><br>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    ajouter_emploi() {
      const new_job = {
        name: this.$refs.name.value,
        salary: this.$refs.salary.value,
        num_employees: this.$refs.num_employees.value,
        requirements: this.$refs.requirements.value
      };

      fetch('http://localhost:3000/jobs', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(new_job) // Send new_job as the request body
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Assuming the job was successfully added, you may want to update the UI or perform other actions here
        console.log('New job added successfully');
      })
      .catch(error => {
        console.error('Error adding job:', error);
      });
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
  width: 200px;
  font-size: smaller;
}

input[type="text"],
input[type="number"],
textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical; /* Allow resizing for textarea */
}

button[type="submit"] {
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #3498db; 
  color: #fff;
  font-weight: bold;
}

button[type="submit"]:hover {
  background-color: #2980b9; 
}
</style>
