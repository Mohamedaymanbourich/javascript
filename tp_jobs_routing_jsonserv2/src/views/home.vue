<template>
    <h2>Liste des emplois</h2><br><br>
    <div class="jobs">
        <ul>
          <li v-for="(job, index) in jobs" :key="job.id" style="list-style: none;">
            <h3>{{ job.name }}</h3>
            <router-link to="/editjob" class="button" @click="index0=index">Edit Job</router-link>
            <router-link to="/jobDetails" class="button" @click="index0=index">Job Details</router-link>
            <button @click="deleteJob(job.id, index)" class="button delete">Delete Job</button>
            <br><br>

            <router-view :jobs="jobs" :index1="index" name="editjob" v-if="index0 === index" />
            <router-view :jobs="jobs" :index1="index" name="jobdetails" v-if="index0 === index"/>
          </li>  
        </ul>
    </div>
</template>

<script>
export default {
    props: ['jobs'],
    data() {
        return {
            index0: 0
        }
    },
    methods: {
        setIndex(index) {
            this.index0 = index;
        },
        deleteJob(jobId, index) {
            if (confirm('Are you sure you want to delete this job?')) {
                const endPointURI = `http://localhost:3000/jobs/${jobId}`; // API endpoint to delete a job

                fetch(endPointURI, { method: 'DELETE' })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to delete the job');
                    }
                    this.jobs.splice(index, 1); // Remove the job from the list if successful
                    alert('Job deleted successfully.');
                })
                .catch(err => {
                    console.error('Error deleting job:', err);
                    alert('There was a problem deleting the job.');
                });
            }
        }
    }
}
</script>

<style scoped>


.button {
    margin: 10px;
}

.delete {

   background-color: #db0f0f;
   color: white;
   padding: 10px 20px;
   border: none;
   border-radius: 4px;
   cursor: pointer;
   text-decoration: none;
}
</style>
