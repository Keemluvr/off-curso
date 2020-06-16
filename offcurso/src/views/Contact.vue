<template>
  <div>
     <!-- loading -->
    <div v-if="loading">
      <page-loading/>
    </div>
    <!-- content -->
    <transition>  
      <div v-if="api">
        <h1>Contact</h1>
        <p>{{ api }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "contato",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  }
};
</script>

<style>

</style>