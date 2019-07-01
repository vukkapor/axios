<template>
  <div>
    Ime i prezime: {{user.name}}
    <br>
  </div>
</template>


<script>
import { userService } from "@/services/users";

export default {
  computed: {
    user() {
      return userService.getUser(this.$route.params.id);
    }
  }
};
</script>