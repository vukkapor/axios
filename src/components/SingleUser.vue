<template>
  <div>
    <router-link :to="routeToUser">{{user.name}}</router-link>
  </div>
</template>

<script>
export default {
  props: ["user"],

  computed: {
      routeToUser() {
          return `users/${this.user.id}`
      }
  }
};
</script>
