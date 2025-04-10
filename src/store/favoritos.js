import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritoStore = defineStore('favoritos', () => {
  const favoritos = ref([])

  const add = (poke) => {
    favoritos.value.push(poke)
  }

  return {
    favoritos,
    add
  }
})
