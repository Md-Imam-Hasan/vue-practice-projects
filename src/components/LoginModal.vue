<template>
  <section
    @click="close"
    class="z-20 w-screen h-screen bg-gray-500 fixed top-0 opacity-50"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
        <div class="p-2 border">
          <h1 class="text-2xl text-center">Login</h1>
          <GoogleLogin @openLoginModalFromGoogle="close" />
          <p class="mt-3 text-center">OR</p>
          <form @submit.prevent="submit" class="p-2 my-2">
            <div class="my-4">
              <label class="">Email or Username</label>
              <input
                v-model="email"
                class="rounded shadow-md p-2 w-full"
                type="text"
                placeholder="Enter Email or Username"
                ref="emailRef"
              />
            </div>
            <div class="my-4">
              <label class="">Password</label>
              <input
                v-model="password"
                class="rounded shadow-md p-2 w-full"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <div class="my-4">
              <button
                type="submit"
                class="
                  w-full
                  rounded
                  shadow-md
                  bg-gradient-to-r
                  from-red-800
                  to-pink-800
                  text-white
                  p-2
                "
              >
                <span v-if="!isLoading">Login</span>
                <span v-else>⌛</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
import GoogleLogin from "./login/GoogleLogin.vue";
export default {
  components: { GoogleLogin },
  data() {
    return {
      email: "imamhasan000768@gmail.com",
      password: "123456",
      isLoading: false,
    };
  },
  mounted() {
    this.$refs.emailRef.focus();
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user);
          this.isLoading = true;
          this.close();
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
          this.isLoading = true;
        });
    },
    close() {
      this.$emit("openLoginModal");
    },
  },
};
</script>

<style>
</style>