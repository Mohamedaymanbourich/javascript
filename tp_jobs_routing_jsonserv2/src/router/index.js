// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import JobDetails from '../views/jobDetails.vue';
import AddJob from '../views/addjob.vue';
import EditJob from '../views/Editjob.vue';

const routes = [
    { path: '/', components: {home:Home} , props:true,children:[
        {
          path: 'editjob',
          components: {editjob:EditJob},
          props:true
        },
        {
            path: 'jobDetails',
            components :{jobdetails:JobDetails}, 
            props: true 
        }
      ]},
    { path: '/jobDetails', components: {jobdetails:JobDetails}, props: true },
    { path: '/add', components: {add:AddJob}, props: true },
    { path: '/jobs/uuu', components: {editjob:EditJob}, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
