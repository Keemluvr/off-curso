<template>
  <div id="app">
    <Header></Header>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"

export default {
  components: {
    Header
  }
}
</script>

<style>
  :root {
    --primary-color: #234;
    --secondary-color: #4b8;
    --thirty-color: white;
  }

  body {
    margin: 0;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color: var(--primary-color);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    color: var(--primary-color);
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
</style>
