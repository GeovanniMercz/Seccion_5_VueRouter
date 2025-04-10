<script setup>
import { useFavoritoStore } from "@/store/favoritos";
import { storeToRefs } from "pinia";

const useFavoritos = useFavoritoStore();
const { favoritos } = storeToRefs(useFavoritos);
</script>

<template>
  <h1>Favoritos</h1>
  <ul class="list-group">
    <li
      v-for="poke in favoritos.filter((p) => p?.id && p?.name && p?.sprite)"
      :key="poke.id"
      class="list-group-item d-flex align-items-center gap-3"
    >
      <img :src="poke.sprite" alt="Imagen de Pokémon" width="50" />
      <div>
        <p><strong>ID:</strong> {{ poke.id }}</p>
        <p><strong>Nombre:</strong> {{ poke.name }}</p>
      </div>
    </li>
  </ul>
</template>
