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
                    <h1>{{ api.nome }}</h1>
                    <p>{{ api.descricao }}</p>
                    <h2>Aulas</h2>
                    <ul class="classes">
                        <li v-for="aula in api.aulas" :key="aula.id">
                            {{ aula.nome }}
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
    
</template>

<script>
import fetchData from "@/mixins/fetchData.js"

export default {
    name: "Course",
    props: ["curso"],
    mixins: [fetchData],
    created() {
        this.fetchData(`/curso/${this.curso}`)
    },
}
</script>

<style>
.classes li  {
    display: block;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
    background: white;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 4px;
}

</style>