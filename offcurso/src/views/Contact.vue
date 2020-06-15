<template>
  <div>
    <div v-if="loading">
      <bounse-loader :color="color" :size="size"></bounse-loader>      </div>
    <div v-if="api">
      <h1>Contact</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import BounseLoader from 'vue-spinner/src/BounceLoader.vue'

export default {
  name: "contato",
  mixins: [fetchData],
  data() {
    return {
      color: "#4b8",
      size: "70px"
    }
  },
  components: {
    BounseLoader
  },
  created() {
    this.fetchData("/contato");
  }
};
</script>

<style>
.v-bounce {
  margin: 5vh auto;
}
</style>