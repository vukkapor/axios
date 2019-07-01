<template>
  <div class="hello">
    Datum:
    {{currentDate}}
    <br>
    <input type="text" v-model="search">
    <ul v-for="(post, index) in filteredPost" :key="index">
      <li>
        <h1>{{post.title}}</h1>
        <p>{{post.body}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from 'axios';
import { userService } from "@/services/users";
import { mixin1, mixin2, mixin3, mixin4, date } from "@/mixins/mixin";

export default {
  mixins: [mixin1, mixin2, mixin3, mixin4, date],
  data() {
    return {
      errors: [],
      posts: [],
      users: [],
      search: "",
      currentDate: ''
    };
  },

  name: "HelloWorld",
  props: {
    msg: String
  },

  created() {
    this.user = 'MIXINA';
    this.currentDate = this.dateFormat()
    console.log(this.currentDate);
    // this.getUserName();
    // axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   .then(response => {
    //     //console.log(response);
    //     this.posts = response.data
    //     console.log(this.posts);
    //   })
    //   .catch(e=> {
    //     this.errors.push(e)
    //   })
    //   console.log(this.posts);

    userService
      .getUsers()
      .then(response => {
        this.users = response.data;
        console.log(response, "RESPONSE USERS");
        console.log(this.users, "USERS");
      })
      .catch(e => {
        alert(e);
      });

    userService
      .getPosts()
      .then(response => {
        this.posts = response.data;
        console.log(response, "RESPONSE POSTS");
        console.log(this.posts, "POSTS");
      })
      .catch(e => {
        alert(e);
      });
  },

  computed: {
    filteredPost() {
      return this.posts.filter(post => post.title.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
};
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
