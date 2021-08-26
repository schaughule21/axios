<template>
  <div>
    <button @click="change">Change</button>
    <img :src="catUrl" height="200" width="200" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CardDeck",
  methods: {
    change() {
      axios.defaults.baseURL = "/cat";

      let self_vue = this;
      // Make a request for a user with a given ID
      axios
        .get("")
        .then(function (response) {
          // handle success
          self_vue.catUrl = response.data;
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
  data() {
    return {
      catUrl: {},
      name: "",
      //random_joke: {},
      //appEnv: process.env,
    };
  },
  created() {
    axios.defaults.baseURL = "/cat";

    let self_vue = this;
    // Make a request for a user with a given ID
    axios
      .get("")
      .then(function (response) {
        // handle success
        self_vue.catUrl = response.data;
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>