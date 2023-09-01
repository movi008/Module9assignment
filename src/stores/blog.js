import { defineStore } from "pinia";
import axios from "axios";

export const useBlogStore = defineStore('blog', {
    state: () => ({
        loading: true,
        categories: [
        ],
        blogs: []
    }),

    getters: {
        async updateCategories() {
            try {
                const data = await axios.get(
                    "https://basic-blog.teamrabbil.com/api/post-categories"
                );
                this.categories = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        async updateBlogs() {
            try {
                const data = await axios.get(
                    "https://basic-blog.teamrabbil.com/api/post-list/2"
                );
                this.blogs = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        }

    },

    actions: {
        increment() {
            this.count++
        },
    },
})