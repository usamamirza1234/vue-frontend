<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" to="#">Register</router-link>
<!--        <router-link class="router-link" :to="{ name: 'Register' }">Register</router-link>-->
      </p>
      <h2>Login to FireBlogs</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <email class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <password class="icon" />
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }"
      >Forgot your password?</router-link
      >
      <button @click.prevent="signIn">Sign In</button>
      <div class="angle"></div>
    </form>
    <div class="background">

    </div>
  </div>
</template>


<script>
export default {

}
</script>


<style>

</style>