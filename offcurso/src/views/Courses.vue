<template>
  <div>
     <!-- loading -->
    <div v-if="loading">
      <page-loading/>
    </div>
    <!-- content -->
    <transition>  
      <div v-if="api" class="content">
        <div>
          <h1>Courses</h1>
          <p>{{ api.descricao }}</p>
        </div>
        <ul>
          <li v-for="curso in api.cursos" :key="curso.id">
            <router-link :to="{ name: 'course', params:{ curso: curso.id }}">
              <h2>{{ curso.nome }} - {{ curso.totalAulas }} aulas | {{ curso.horas }}</h2>
              <p>{{ curso.descricao }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
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

<style scoped>
p {
  font-weight: normal;
}
</style>