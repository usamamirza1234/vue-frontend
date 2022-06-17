<template>
  <div id="app">
    <div class="container">
      <h1>Blogs App</h1>
      <h6>Powered by: Vue 3 | Vuex 4 | Axios | Ruby on Rails 6 | Postgres</h6>
    <AllBlog/>
    </div>
  </div>
</template>

<script>
import AllBlog from "@/components/AllBlog.vue"
export default {
  name: "App",
  components: {
    AllBlog
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", Helvetica, Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container{
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
