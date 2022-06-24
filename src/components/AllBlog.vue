<template>
  <div class="wrapper">
    <h1>Blogs</h1>
<!--    {{signedInUser}}-->
    <div class="blogs">
      <div v-for="blog in allBlogs.data" :key="blog.id" class="blog" @dblclick="onDoubleClick(blog)">
        {{blog.heading}}
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  name: "AllBlog",
  methods: {
    ...mapActions(['fetchBlog','deleteBlog','updateBlog']),
    onDoubleClick(currentBlog){
      const updateTodo = {
        id: currentBlog.id,
        heading: currentBlog.heading
      }
      this.updateBlog(updateTodo)
    }
  },
  computed: {
    ...mapGetters(['allBlogs',"signedInUser"])
  },
  created() {
    console.log("Created");
    this.fetchBlog();
  }
}
</script>


<style scoped>
.blogs{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 1rem;
}
.blog{
  border: 1px solid #ccc;
  background: #41b88e;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i{
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend{
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box{
  display: inline-block;
  width: 10px;
  height: 10px;
  background: greenyellow;
}
.incomplete-box{
  display: inline-block;
  width: 10px;
  height: 10px;
  background: red;
}
  @media (max-width: 500px) {
    .blogs{
      grid-gap: 1fr;
    }
  }



</style>