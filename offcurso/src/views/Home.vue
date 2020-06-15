<template>
  <div class="home">
    <div v-if="loading">
      <bounse-loader :color="color" :size="size"></bounse-loader>          
    </div>
    <div v-if="api">
      <h1>Home</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import BounseLoader from 'vue-spinner/src/BounceLoader.vue'

export default {
  name: "Home",
  data() {
    return {
      color: "#4b8",
      size: "70px"
    }
  },
  components: {
    BounseLoader
  },
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  }
};
</script>

<style>
.v-bounce {
  margin: 5vh auto;
}
</style>