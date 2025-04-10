import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritoStore = defineStore('favoritos', () => {
  const favoritos = ref([])

  const add = (poke) => {
    if (poke?.id && poke?.name && poke?.sprite) {
      const yaExiste = favoritos.value.some(p => p.id === poke.id);
      if (!yaExiste) {
        favoritos.value.push(poke);
      }
    }
  }
  
  const remove = (id) => {
    favoritos.value = favoritos.value.filter(item => item?.id !== id)
  }
  

  return {
    favoritos,
    add,
    remove,
  }
})
