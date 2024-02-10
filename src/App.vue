<template>
  <div style="text-align: left; width: 400px">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data() {
    return {
      mot: '',
      responseMessage: ''
    };
  },
  methods: {
    async newpartiehandler(sparams) {
      try {
        const response = await axios.get("https://vue-project-backend-eta.vercel.app/api/new-game", {
          params: sparams
        });

        this.mot = response.data.word;
        this.responseMessage = ""; 
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}
</style>