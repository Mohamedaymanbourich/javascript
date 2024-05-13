import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreatePost from '../views/CreatePostView.vue'
import PostDetail from '../views/PostDetailView.vue'
import EditPost from '../views/EditPost.vue'
import tag from '../views/tag.vue' 
import DeletePost from '../views/DeletePost.vue'
const routes = [

  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/CreatePost',
    name:'createpost',
    component : CreatePost
  },
  {
    path: '/tags/:tag',
    name: 'tag',
    component : tag 

  },
  {
    path: '/PostDetail/:id',
    name:'PostDetail',
    component : PostDetail,
    props:true
  },
  {
    path: '/EditPost/:id',
    name:'EditPost',
    component : EditPost
  },
  {
    path : '/Delete/:id',
    name : 'DeletePost',
    component : DeletePost
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
