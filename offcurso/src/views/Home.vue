<template>
  <div class="home">
    <!-- loading -->
    <div v-if="loading">
      <page-loading />
    </div>
    <!-- content -->
    <transition>
      <div v-if="api" class="content">
        <div>
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <router-link to="/cursos" tag="button" class="btn-cursos">Cursos</router-link>
          <!-- assessments -->
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p>{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- image -->
        <img src="@/assets/aprender.png" alt="Aprenda Web Design" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Home",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  }
};
</script>

<style scoped>
.btn-cursos {
  border: none;
  background: var(--secondary-color);
  border-radius: 4px;
  color: var(--thirty-color);
  cursor: pointer;
  padding: 15px 20px;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

p:nth-child(1) {
  font-weight: bold;
}
</style>