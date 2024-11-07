<template>
  <div class="row mt-4 p-2">
    <div class="card mt-4">
      <h2><i class="fa-solid fa-cart-shopping btn-detalle"></i> Carrito</h2>
      <p class="fs-4">Items en el carrito: {{ canCarrito }}</p>
      <ul>
        <div
          v-for="producto in car"
          :key="producto.id"
          class="mt-2 list-group-item d-flex justify-content-between align-items-center"
        >
          <img class="img-carrito" :src="producto.foto" :alt="producto.nombre" />
          <p class="fs-4">{{ producto.nombre }} - $ {{ producto.precio }} x {{ producto.cantidad }}</p>
          <button @click="eliminarProducto(producto)" class="btn btn-outline-success button-vue">Eliminar</button>
        </div>
      </ul>
      <div class="d-flex justify-content-between align-items-center">
        <h4>Total:$ {{ calculatedTotal }}</h4>
        <button class="btn btn-outline-danger mb-2" @click="vaciarCarrito">
          <i class="bi bi-trash3 pe-2"></i>Vaciar Carrito
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    car: Array,
    
    canCarrito: Number
  },
  methods: {
    
    eliminarProducto(producto) {
      const indice = this.car.findIndex(item => item.id === producto.id);
        if (indice !== -1) {
            if (this.car[indice].cantidad > 1) {
                this.car[indice].cantidad--;
            } else {
                this.car.splice(indice, 1);
            }
        }
    },
    vaciarCarrito() {
      this.$emit("vaciar");
    }
  },
  computed: {
    
    calculatedTotal() {
      return this.car.reduce((suma, producto) => suma + producto.precio * producto.cantidad, 0);
    },
    canCarrito() {
      return this.car.reduce((total, item) => total + item.cantidad, 0);
    }
  }
};
</script>

<style scoped>
/* Puedes agregar estilos aquí si los necesitas */
</style>

