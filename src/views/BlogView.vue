<template>
  <div class="mx-auto lg:w-2/3  ">
    <div>
      <h1 class="pt-10 pb-2 text-center capitalize text-4xl">Blogs</h1>
      <hr class="w-1/5 mx-auto "/>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-2 justify-items-center mt-10">
      <div v-for="(post, index) in allBlogs.data" :key="index" @dblclick="onDoubleClick(post)">
        <BlogCard :post="post"/>
      </div>
    </div>
  </div>
</template>


<script>
import BlogCard from "@/components/Blog/BlogCard"
import {mapActions, mapGetters} from "vuex";


export default {
  name: "BlogView",
  components: {
    BlogCard,
  },
  methods: {
    ...mapActions(['fetchBlog', 'deleteBlog', 'updateBlog']),
  },
  computed: {
    ...mapGetters(['allBlogs', "signedInUser"])
  }, created() {
    console.log("Created");
    this.fetchBlog();
  }
}
</script>

<style>
.header {
  height: 70px;
  min-width: auto;
  background: green;
}
</style>