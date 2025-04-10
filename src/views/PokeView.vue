<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useFavoritoStore } from "@/store/favoritos";

const route = useRoute();
const router = useRouter();
const pokeSprite = ref({});
const useFavorito = useFavoritoStore();

const { add } = useFavorito;


const back = () => {
  router.push("/pokemons");
};

const getData = async () => {
  console.log(route.params.name);
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
    );

    const poke = {
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
    };

    add(poke);

    pokeSprite.value = data.sprites.front_default;
  } catch (error) {
    pokeSprite.value = null;
  }
};

getData();
</script>

<template>
  <main class="text-center">
    <div v-if="pokeSprite">
      <img :src="pokeSprite" alt="" />
      <h1>Poke: {{ $route.params.name }}</h1>
      <button  class="btn btn-primary mb-2" @click="add(data)">
        Agregar Favoritos
      </button>
    </div>
    <h1 v-else>Pokemon no encontrado...</h1>
    <button @click="back()">Volver al listado</button>
  </main>
</template>
