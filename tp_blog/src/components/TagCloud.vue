<template>
  <nav>
    <h2>Tags : </h2>
    <div v-for="tag in unique_tags" :key="tag" class="tag1">
      <router-link :to="`/tags/${tag}`">{{ tag }}</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { defineProps } from 'vue';


const props = defineProps({
  tags: {
    type: Array,
    default: () => []
  }
});


const unique_tags = computed(() => {
  const new_tags = new Set(props.tags.map(tag => tag.trim()));
  return Array.from(new_tags);
});
</script>

<style scoped>

.tag1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 150px; 
  margin: 10px;
  border-radius: 20px; 
  
}

nav {
  text-align: center;
  width: 100%; 
  padding: 0; 
  margin: 0; 
}
h2{
  margin-left:-15px;
}
</style>
