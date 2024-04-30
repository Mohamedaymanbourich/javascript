<template>
   <div align="center" >
<router-link to="/" style="margin-right:20px" >Home</router-link>  
 
<router-link to="/add" style="margin-left:20px">Ajouter un emploi</router-link>


<div class="home">
    

<router-view :jobs="jobs" name="home"/>

<router-view :jobs="jobs" name="add"/>    
    
    
    
</div>
</div> 
</template>

<script>
export default {
  data() {
    return {
      jobs: [] // Initialize jobs as an empty array
    };
  },
  created() {
    // Fetch data when the component is created
    this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      try {
        // Make a GET request using the fetch API to fetch all jobs
        const response = await fetch('http://localhost:3000/jobs'); // Adjust the URL to your JSON server's root endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        const data = await response.json();
        // Update the jobs data with the parsed response data
        this.jobs = data;
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    }
  }
};
</script>

 <style>
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
 
 /* Apply Roboto font to the body of your Vue.js app */
 body {
     font-family: 'Roboto', sans-serif;
 }
 .home{
 
 padding-top: 50px;
 }
 
 body{
 background-color: rgb(137, 135, 135); 
 }
 a{
 
   background-color: #4caf50;
   color: white;
   padding: 10px 20px;
   border: none;
   border-radius: 4px;
   cursor: pointer;
   text-decoration: none;
 
 }
 </style>
 