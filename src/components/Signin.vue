<template>
  <div class="signin">
    <h1>Enter your credentials</h1>
    <div>
      <form @submit="onSubmitLogin" >
        <input
            type="text"
            v-model="email"
            placeholder="Enter your email"
        >
        <input
            type="password"
            v-model="password"
            placeholder="Enter your password"
        >

        <input type="submit" value="submit" >
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    onSubmitLogin(event){
      event.preventDefault();
      const data = {
        email: this.email,
        password: this.password,
      }
      this.loginUser(data)
      this.email ="";
      this.password ="";
    }
  }
}
</script>

<style scoped >
</style>