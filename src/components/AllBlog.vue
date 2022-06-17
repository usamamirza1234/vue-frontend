<template>
  <div class="wrapper">
    <h1>Blogs</h1>
    <div class="legend">
      <span>Double click todo some operations</span>
      <span><span class="incomplete-box"></span> = Incomplete</span>
      <span><span class="complete-box"></span> = Complete</span>
    </div>
    <div class="blogs">

    </div>
  </div>
</template>

<script>
export default {
  name: "AllBlog"
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