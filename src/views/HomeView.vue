<template>
  <div id="app">
    <div class="container">
      <NavBar/>
      <MyHero/>
<!--      <AddBlog/>-->
<!--      <AllBlog/>-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/shared/NavBar'
import MyHero from '@/components/HomeViews/MyHero'
// import AddBlog from '@/components/AddBlog.vue'
// import AllBlog from '@/components/AllBlog.vue'
// import SignIn from '@/components/SignIn.vue'

export default {
  name: 'HomeView',
  components: {
    // SignIn,
    // AddBlog,
    // AllBlog,
    NavBar,
    MyHero,
  }
}
</script>
