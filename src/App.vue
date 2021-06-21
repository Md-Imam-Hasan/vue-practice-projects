<template>
  <AppHeader @openLogin="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view />
  </div>
  <LoginModal @openLoginModal="isLoginOpen = false" v-if="isLoginOpen" />
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

<style></style>