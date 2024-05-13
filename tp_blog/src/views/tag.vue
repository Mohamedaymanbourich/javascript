<template>
  <div>
    <h1>Posts tagged with "{{ tag }}"</h1>

    <ul>
      <li v-for="post in filteredPosts" :key="post.id">
        <h2>{{ post.Titre }}</h2>
        <p class="post-body">
          {{ post.Body }}
        </p><br>
        Tags: <small class="tag" v-for="tag in getTags(post)" :key="tag">{{ tag }}</small>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { projectFirestore } from '@/Firebase/Config';

const posts = ref([]);
const route = useRoute();
const tag = ref(route.params.tag);

watch(() => route.params.tag, (newTag) => {
  tag.value = newTag;
}, { immediate: true });

async function fetchdata() {
  try {
    let res = await projectFirestore.collection('Blog').get();
    posts.value = res.docs.map(doc => {
      return { ...doc.data(), id: doc.id };
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

const filteredPosts = computed(() => {
  return posts.value.filter(post =>
    post.tags.trim() && post.tags.split(',').map(t => t.trim()).includes(tag.value)
  );
});

const getTags = (post) => {

  return post.tags.split(',').map(t => t.trim());
}

onMounted(fetchdata);
</script>

<style>
.post-body {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2em;
  line-height: 1.6;
  color: #444;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tag {
  background-color: #eef;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  display: inline-block;
  color: #556;
}
</style>
