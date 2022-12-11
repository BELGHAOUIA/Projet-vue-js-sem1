<template>
  <nav>
    <router-link to="/"></router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      isMain: false,
    };
  },
};
</script>

<style>
* {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

body {
  background: #86a5f0;
}
</style>
