<script setup>
import {useCounterStore} from '@/store/counter.js'

const useCounter = useCounterStore()
</script>

<template>
  <h1>Home Counter : {{ useCounter.count }}
    <h2>
      Double {{ useCounter.double }}
    </h2>
    <button @click="useCounter.increment">  
      Increment
    </button>



  </h1>
</template>
