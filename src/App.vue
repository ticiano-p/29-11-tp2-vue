<script setup>
import 'bootstrap';
import 'bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import appFooter from './components/modulos/footer.vue';
</script>
<script>
export default {
  data() {
    return {
      products: [], //este sql
      car: [],      // Carrito de compras
      filtro: '',   // Filtro de texto para búsqueda
      filtroCat: '',// Filtro por categoría
      mostrarFormulario: false
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const endpoint = 'http://localhost/vue/getProductos.php';
        const response = await fetch(endpoint);
        const json = await response.json();
        this.products = json;
      }finally{}
    },
   
  },
  
};
</script>
<template>
  <router-view></router-view>
  <appFooter
    Direccion="https://maps.app.goo.gl/sd5UdacMTL7fVtyY7"
    Telefono="11 3646-3585"
    Email="LibroExpress@Liexpress.com"
    Instagram="https://www.instagram.com/"
    Facebook="https://www.facebook.com/"
    Twitter="https://x.com/"
    Derechos="2024 LibroExpress. Todos los derechos reservados."
  ></appFooter>
  
</template>

<style scoped>
</style>
