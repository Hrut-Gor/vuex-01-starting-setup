<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
  <p>{{  isTestAuth }}</p>
</template>

<script>
//import { mapActions } from 'vuex'
export default {
  methods: {
    login() {
      return this.$store.dispatch('login');
    },
    logout() {
      return this.$store.dispatch('logout');
    },
  },

  //...mapActions(['login','logout']),
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },

    isTestAuth(){
        return this.$store.getters.testAuth;
    }
  },
};
</script>
