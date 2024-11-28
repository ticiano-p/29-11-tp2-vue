<script setup>
import carrito from '../components/carrito.vue'; // Ruta relativa a `src/components/`
import Header from '../components/modulos/nav.vue';

import { reactive, computed, onMounted } from 'vue';

const state = reactive({
  car: JSON.parse(localStorage.getItem('carrito')) || [], // Inicializa desde localStorage o como vacío
});

// Total calculado del carrito
const calculatedTotal = computed(() => {
  return state.car.reduce((total, item) => total + item.precio * item.cantidad, 0);
});
</script>

<template>
      <Header class="titulo" foto="./img/logo.png"></Header>

  <carrito
    :car="state.car"
    @updateCar="state.car = $event"
    :total="calculatedTotal"
  ></carrito>
</template>

<style scoped>
.products-page {
  padding: 20px;
}
</style>
