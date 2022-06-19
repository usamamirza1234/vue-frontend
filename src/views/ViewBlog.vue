<template>
  <div>
    <h1>s</h1>
    <h1>{{myValue}}</h1>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ViewBlog",
  computed: {
    ...mapGetters(['allBlogs']),
    myValue() { return this.$store.state.blogs }
  },
  created() {
    console.log("created");
  }
}
</script>

<style>

</style>