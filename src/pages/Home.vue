<script setup>
import { onBeforeMount } from "vue";
import Header from "../components/Header.vue";
import BlogPost from "../components/BlogPost.vue";
import Footer from "../components/Footer.vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();

import { useBlogStore } from "@/stores/blog";
const store = useBlogStore();
onBeforeMount(() => {
  store.updateBlogs;
});
</script>

<template>
  <div>
    <Header />
    <div class="container mx-auto p-4">
      <main>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(item, index) in store.blogs" :key="index">
            <div
              class="
                max-w-md
                mx-auto
                bg-white
                rounded-lg
                overflow-hidden
                shadow-lg
              "
            >
              <img
                :src="item.img"
                alt="Blog Image"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h2 class="text-xl font-semibold text-gray-800">
                  {{ item.title }}
                </h2>
                <p class="text-gray-600 mt-2">
                  Published on {{ item.created_at }}
                </p>
                <p class="text-gray-700 mt-2">
                  {{ item.short }}
                </p>
                <div class="mt-4">
                  <a
                    href="#"
                    @click="router.push(`/blog/${item.id}`)"
                    class="text-blue-500 hover:underline"
                    >Read More</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer />
  </div>
</template>

