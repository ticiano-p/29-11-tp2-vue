<script setup>
import 'bootstrap';
import 'bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/modulos/nav.vue';
import cart from './components/cart.vue';
import carrito from './components/carrito.vue';
import home from './components/home.vue';
import Footer from './components/modulos/footer.vue';
</script>

<script>
export default {
  data() {
    return {
      products: [], // Lista completa de productos
      car: [],      // Carrito de compras
      filtro: '',   // Filtro de texto para búsqueda
      filtroCat: '' // Filtro por categoría
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const endpoint = 'http://localhost/vue/getProducts.php';
        const response = await fetch(endpoint);
        const json = await response.json();
        this.products = json;
      } catch (error) {
        alert('Error al cargar los productos');
      }
    },
    agregando(product) {
      const itemCarrito = this.car.find((item) => item.id === product.id);
      if (itemCarrito) {
        itemCarrito.cantidad++;
      } else {
        this.car.push({ ...product, cantidad: 1 });
      }
    },
    vaciarCarrito() {
      this.car = [];
    }
  },
  computed: {
    filtradas() {
      return this.products.filter(product => 
        product.nombre.toLowerCase().includes(this.filtro.toLowerCase()) &&
        (this.filtroCat === '' || product.categoria === this.filtroCat)
      );
    }
  }
};
</script>

<template>
  <Header class="titulo" foto="./img/logo.png"></Header>
  <home
    imgCArrusel1="./img/b1.webp"
    imgCArrusel2="./img/b2.webp"
    imgCArrusel3="./img/b3.webp"
    imgPrecentacion="./img/biLibroExpres.jpg"
  ></home>

  <main id="app" class="container">
    <carrito
      :car="car"
      :total="calculatedTotal"
      @eliminar="eliminarProducto"
      @vaciar="vaciarCarrito"
    ></carrito>
    
    <div class="row mt-4">
      <div class="col-md-8 col-sm-12">
        <input v-model="filtro" class="form-control mb-2 fs-4" type="search" placeholder="Buscar...">
      </div>
      <div class="col-md-4 col-sm-12">
        <select v-model="filtroCat" class="form-select fs-4">
          <option value="" disabled selected>Filtrar por:</option>
          <option value="Juvenil">Juvenil</option>
          <option value="fantasia">fantasia</option>
          <option value="Policiales">Policiales</option>
          <option value="Terror">Terror</option>

          <option value="">No filtrar</option>
        </select>
      </div>
    </div>

    <div class="row p-2">
      <cart
        v-for="user in filtradas" 
        :key="user.id"
        @add="agregando"
        :foto="user.imagen"
        :nombre="user.nombre"
        :precio="user.precio"
        :id="user.id"
      ></cart>
    </div>
  </main>

  <Footer
    Direccion="https://maps.app.goo.gl/sd5UdacMTL7fVtyY7"
    Telefono="11 3646-3585"
    Email="LibroExpress@Liexpress.com"
    Instagram="https://www.instagram.com/"
    Facebook="https://www.facebook.com/"
    Twitter="https://x.com/"
    Derechos="2024 LibroExpress. Todos los derechos reservados."
  ></Footer>
</template>

<style scoped>
</style>
