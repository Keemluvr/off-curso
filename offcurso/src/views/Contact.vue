<template>
  <div>
     <!-- loading -->
    <div v-if="loading">
      <page-loading/>
    </div>
    <!-- content -->
    <transition>  
      <div v-if="api">
        <h1>{{ api.titulo }}</h1>
        <p>{{ api.descricao }}</p>
        <ul>
          <li>
            <b>Email:</b>
            {{ api.contato.email }}
          </li>
          <li>
            <b>Telefone:</b>
            {{ api.contato.telefone }}
          </li>
          <li>
            <b>Endereco:</b>
            {{ api.contato.endereco }}
          </li>
        </ul>
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

<style scoped>
  ul {
    margin-top: 40px;
  }

  li {
    margin-bottom: 15px;
  }
</style>