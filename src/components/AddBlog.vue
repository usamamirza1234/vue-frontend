<template>
  <div>
    <h3>Add Blog</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text"
               v-model="heading"
               placeholder="Add Blog ... " >
        <input type="submit" value="submit" >
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AddBlog",
  data() {
    return {
      heading: ""
    }
  },

  methods: {
    ...mapActions(['addBlog']),
    onSubmit(event){
      event.preventDefault();
      this.addBlog(this.heading)
      this.heading = "";
    }
  }

}
</script>


<style scoped>
form{
  display: flex;
}
input[type="text"]{
  flex: 10;
  padding: 10px;
  border: 1px solid #cccccc;
  outline: 0;
}
input[type="text"]:hover, input[type="text"]:focus{
  border: 1px solid greenyellow;
}
input[type="submit"] {
  flex: 2px;
  background: #41b88e;
  color: #ffffff;
  border: 1px solid #41b88e;
  cursor: pointer;
}
input[type="submit"]:hover, input[type="submit"]:focus{
  background: #318b68;

}

</style>