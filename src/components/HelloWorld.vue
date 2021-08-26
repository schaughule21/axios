<template>
  <div class="hello">
    <p>{{appEnv}}</p><hr>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
    <h1>Joke</h1>
    <p>{{ random_joke.value }}</p><hr>
    <cardDeck />
  </div>
</template>

<script>
import axios from "axios";
import cardDeck from "./CardDeck.vue"

export default {
  name: 'HelloWorld',
  components : {
    cardDeck
  },
  props: {
    msg: String
  },
  data() {
    return {
      categories: [],
      name: "",
      random_joke: {},
      appEnv: process.env,
    };
  },
  created() {
    axios.defaults.baseURL = "/api";

    this.name = "Axios";
    let self_vue = this;
    // Make a request for a user with a given ID
    axios
      .get("/categories")
      .then(function (response) {
        // handle success
        self_vue.categories = response.data;
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    axios
      .get("/random")
      .then(function (response) {
        // handle success
        self_vue.random_joke = response.data;
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
