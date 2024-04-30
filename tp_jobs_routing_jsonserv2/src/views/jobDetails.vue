<template  >

  <div class="job-search" >  
    
      <div class="search-bar">
      <button @click="this.detail = !this.detail;">See the details</button>
      </div>
    <br><br>
    <div class="jobs" id="jobs" v-if="this.detail">
          <div class="job-details">
            <p class="job-title">Salary: {{ this.jobs[this.index1].salary }}</p>
            <p class="num-employees">Number of Employees: {{ this.jobs[this.index1].num_employees }}</p>
            <h3 class="requirements-heading">Requirements:</h3>
            <ul class="requirements-list">
              <li v-for="(requirement, reqIndex) in Array(this.jobs[this.index1].requirements)" :key="reqIndex">
                {{ requirement }}
              </li>
            </ul>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  props: ['jobs','index1'],
  data() {
    return {
      detail: false,
      name: '',
    };
  },

  methods: {},
  computed: {},
};
</script>

<style scoped>
/* Base styles */
body {
  font-family: sans-serif;
}

/* Search bar styles */
.search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  color: white;
  justify-content: center;
}

.search-bar input {
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-bar button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50; /* Green */
  color: white;
  cursor: pointer;
}

/* Job details styles */
.job-details {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
  
}

.job-title,
.num-employees {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.requirements-heading {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.requirements-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
