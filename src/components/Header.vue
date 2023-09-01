<script setup>
import { onBeforeMount } from "vue";
import { useBlogStore } from "@/stores/blog";
const store = useBlogStore();
onBeforeMount(() => {
  store.updateCategories;
});
</script>

<template>
  <header class="bg-blue-500 py-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-white text-2xl font-semibold">MY BLOG</h1>
      <nav>
        <ul class="flex space-x-4">
          <li
            class="text-white hover:underline hover:cursor-pointer"
            v-for="(item, index) in store.categories"
            :key="index"
          >
            {{ item.name }}
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>


