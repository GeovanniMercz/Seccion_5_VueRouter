import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritoStore = defineStore("favoritos", () => {
  const favoritos = ref([]);

  if (localStorage.getItem('favoritos')) {
    favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
  } else {
    
  }

  const add = (poke) => {
    if (poke?.id && poke?.name && poke?.sprite) {
      const yaExiste = favoritos.value.some((p) => p.id === poke.id);
      if (!yaExiste) {
        favoritos.value.push(poke);
        localStorage.setItem('favoritos',JSON.stringify(favoritos.value))
      }
    }
  };

  const remove = (id) => {
    favoritos.value = favoritos.value.filter((item) => item?.id !== id);
    localStorage.setItem('favoritos',JSON.stringify(favoritos.value))
    
  };
  const findpoke = (name) => favoritos.value.find((item) => item.name === name);

  return {
    favoritos,
    add,
    remove,
    findpoke,
  };
});
