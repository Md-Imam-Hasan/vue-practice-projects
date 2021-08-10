<template>
  <AppHeader :isLoggedIn="isLoggedIn" @openLogin="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view />
  </div>
  <teleport to="body">
    <LoginModal @openLoginModal="isLoginOpen = false" v-if="isLoginOpen" />
  </teleport>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal.vue";
import firebase from "./utilities/firebase";
export default {
  components: {
    AppHeader,
    LoginModal,
  },
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  },
};
</script>

<style>
body {
  background: #2a323a;
}
p,
li,
h1,
h2,
h3,
h4,
h5,
h6,
small {
  color: whitesmoke;
}
</style>