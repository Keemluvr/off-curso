<template>
  <div>
    <div v-if="loading">
      <page-loading/>
    </div>
    <div v-if="api">
      <h1>Courses</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Courses",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  }
};
</script>

<style>

</style>