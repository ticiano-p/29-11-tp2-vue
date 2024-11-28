<script setup>
import cart from '../components/cart.vue'; // Ruta relativa a `src/components/`
import cartFiltro from '../components/cartFiltro.vue'; // Ruta relativa a `src/components/`
import Header from '../components/modulos/nav.vue';

import { reactive, computed, onMounted } from 'vue';

const state = reactive({
  products: [],
  car: JSON.parse(localStorage.getItem('carrito')) || [], // Inicializa desde localStorage o como vacío
  filtro: '',
  filtroCat: '',
});

async function getProducts() {
  try {
    const endpoint = 'http://localhost/vue/getProductos.php';
    const response = await fetch(endpoint);
    const json = await response.json();
    state.products = json;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}



function agregando(product) {
  const itemCarrito = state.car.find((item) => item.id === product.id);
  if (itemCarrito) {
    itemCarrito.cantidad++;
  } else {
    state.car.push({ ...product, cantidad: 1 });
  }
  localStorage.setItem('carrito', JSON.stringify(state.car));; // Sincroniza con localStorage
  Toastify({
    text: "Producto agregado al carrito",
    duration: 3000,
    gravity: "top", 
    position: "right", 
    offset: {
        y: "3rem"
    }
}).showToast();
}

const filtradas = computed(() => {
  return state.products.filter(product =>
    product.nombre?.toLowerCase().includes(state.filtro.toLowerCase()) &&
    (state.filtroCat === '' || product.categoria === state.filtroCat)
  );
});

// Carga inicial de productos
onMounted(() => {
  getProducts();
});
</script>

<template>
    <Header class="titulo" foto="./img/logo.png"></Header>

 <div class="container-fluid">
    <section class="row">
        <picture class="col-12 text-center mt-5">
            <img class="img-fluid" src="../../img/banerProduc.jpg" alt="Banner de contacto">
        </picture>
    </section>
</div>
  <div class="products-page">
    <cartFiltro
      :filtro="state.filtro"
      :filtroCat="state.filtroCat"
      @update:filtro="state.filtro = $event"
      @update:filtroCat="state.filtroCat = $event"
    ></cartFiltro>
    <main id="app" class="container">
      <div v-if="filtradas.length > 0" class="row p-2">
        <cart
          v-for="product in filtradas"
          :key="product.id"
          @add="agregando"
          :foto="product.imagen"
          :nombre="product.nombre"
          :precio="product.precio"
          :id="product.id"
          :filtro="state.filtro"
          :filtroCat="state.filtroCat"
        />
      </div>
      <p class="fs-4 text-center" v-else>No hay productos que coincidan con tu búsqueda.</p>
    </main>
  </div>
</template>

<style scoped>
.products-page {
  padding: 20px;
}

</style>
