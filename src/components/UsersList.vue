<template>
  <div>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        <SingleUser :user="user"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { userService } from "@/services/users";
import SingleUser from "@/components/SingleUser";
import FullUserData from '@/components/FullUserData'
export default {
  data() {
    return {
      users: []
    };
  },

  components: {
    SingleUser,
    FullUserData
  },

  created() {
    userService
      .getUsers()
      .then(response => {
        this.users = response.data;
      })
      .catch(e => {
        alert(e);
      });
  }
};
</script>
