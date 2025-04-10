<script setup>

import { RouterLink } from "vue-router"; 
import {useGetData} from '@/composables/getData'


const {data,getData,loading} = useGetData()

getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
  <H1> Pokemons </H1>
  <p v-if="loading">Cargando infromación....</p>
  <div v-if="data">
    <ul>
    <li v-for="poke in data.results">
      <RouterLink :to="`/pokemons/${poke.name}`">
        {{ poke.name }}
      </RouterLink>
    </li>
  </ul>
  </div>
</template>
