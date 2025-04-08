<template>
  <main>
    <h1>Welcome to Decide4Me 👋</h1>
    <p>
      Please <router-link to="/login">Login</router-link> or
      <router-link to="/signup">Sign Up</router-link> to get started.
    </p>
  </main>
</template>

<script setup lang="ts">
// No logic needed for now
</script>

<style scoped>
main {
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
}
</style>
