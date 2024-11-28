<template>
<main id="app" class="container">
  <div class="row mt-5 p-2">
    <div class="card mt-4 p-4 mx-auto" style="max-width: 85%;">
      <h2><i class="fa-solid fa-cart-shopping btn-detalle"></i> Insertar nuevos libros:</h2>
      <form v-on:submit.prevent="postProductos" class="row g-3">
        <div class="col-md-6">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" id="nombre" v-model="nombre" required class="form-control">
        </div>
        <div class="col-md-6">
          <label for="precio" class="form-label">Precio</label>
          <input type="number" id="precio" v-model="precio" required class="form-control">
        </div>
        <div class="col-md-6">
          <label for="imagen" class="form-label">Imagen</label>
          <input type="text" id="imagen" v-model="imagen" required class="form-control">
        </div>
        <div class="col-md-6">
          <label for="categoria" class="form-label">Categoría</label>
          <select v-model="categoria" class="form-select" required>
            <option value="" disabled selected>Elegir categoría:</option>
            <option value="Juvenil">Juvenil</option>
            <option value="fantasia">fantasía</option>
            <option value="Policiales">Policiales</option>
            <option value="Terror">Terror</option>
          </select>
        </div>
        <div class="col-12 text-center">
          <button type="submit" class="btn btn-outline-success mt-2">Guardar</button>
        </div>
      </form>
    </div>
  </div>

  <!-- Tabla de productos -->
  <table class="table mt-2 mx-auto" style="max-width: 80%;">
    <thead>
      <tr>
        <th>Foto</th>
        <th>Nombre</th>
        <th>Opciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>
          <img style="max-width: 4em; height: auto;" :src="product.imagen" :alt="product.nombre">
        </td>
        <td class="fs-4 align-middle">{{ product.nombre }}</td>
        <td class="align-middle">
          <!-- Botones de acciones -->
          <button
            @click="abrirModal(product)"
            type="button"
            class="btn btn-outline-warning me-2 btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#modalEditar"
          >
            Editar
          </button>
          <button @click="removeProductos(product)" type="button" class="btn btn-outline-danger btn-sm">
            Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Modal de edición -->
  <div class="modal fade" id="modalEditar" tabindex="-1" aria-labelledby="modalEditarLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalEditarLabel">Editar producto</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex flex-column align-items-center">
          <form  @submit.prevent="editarProductos()">
            <div>
              <input type="hidden" id="id" v-model="productoSeleccionado.id" required class="form-control">

            </div>
            <div class="">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" id="nombre" v-model="productoSeleccionado.nombre" required class="form-control">
            </div>
            <div class="">
              <label for="precio" class="form-label">Precio</label>
              <input type="number" id="precio" v-model="productoSeleccionado.precio" required class="form-control">
            </div>
            <div class="">
              <label for="imagen" class="form-label">Imagen</label>
              <input type="text" id="imagen" v-model="productoSeleccionado.imagen" required class="form-control">
            </div>
            <div class="">
              <label for="categoria" class="form-label">Categoría</label>
              <select :value="productoSeleccionado.categoria" class="form-select" required>
                <option value="" disabled>Elegir categoría:</option>
                <option value="Juvenil">Juvenil</option>
                <option value="fantasia">Fantasía</option>
                <option value="Policiales">Policiales</option>
                <option value="Terror">Terror</option>
              </select>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-warning" data-bs-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-outline-success"   data-bs-dismiss="modal">Guardar cambios</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</main>

</template>
  
  <script>
  export default {
    
    data() {
        return {
            products: [],
            productoSeleccionado: {},
            nombre:'',
            precio:'',
            imagen:'',
            categoria:'',
            id:''

        }
    },
    created() {
    this.getProducts();
    

  },
    methods: {
      
      // elimina producto
      async removeProductos(id){
        try {
            const data= {
            id: id.id
         }
        const endpoint = 'http://localhost/vue/removeProductos.php';
        const config = {
             headers:{
                'Content-Type': 'application/json' 
             },
             method: 'POST',
             body: JSON.stringify(data)
        }
        const response = await fetch(endpoint, config);
        const json = await response.json();
        console.log(json);
        this.getProducts();

         console.log(data)
        } catch (error) {
            console.error(error)
        }
      },
      abrirModal(product) {
      this.productoSeleccionado = { ...product }; 
    },
      // editar producto
      async editarProductos(){
        try {
            const data= {
              id: this.productoSeleccionado.id,
              nombre: this.productoSeleccionado.nombre,
              precio: this.productoSeleccionado.precio,
              imagen: this.productoSeleccionado.imagen,
              categoria: this.productoSeleccionado.categoria,
         }
        const endpoint = 'http://localhost/vue/editProductos.php';
        const config = {
             headers:{
                'Content-Type': 'application/json' 
             },
             method: 'POST',
             body: JSON.stringify(data)
        }
        const response = await fetch(endpoint, config);
        console.log(response);
        
        
        this.getProducts();
        
         console.log(data)
        } catch (error) {
            console.error(error)
        }
      },
      // agrega producto
      async postProductos(){
        try {
            const data= {
            nombre:this.nombre,
            precio:this.precio,
            imagen:this.imagen,
            categoria:this.categoria
         }

        const endpoint = 'http://localhost/vue/postProductos.php';
        const config = {
             headers:{
                'Content-Type': 'application/json' 
             },
             method: 'POST',
             body: JSON.stringify(data)
        }
        const response = await fetch(endpoint, config);
        const json = await response.json();
        
        console.log(json);
        this.getProducts();
        
         console.log(data)
        } catch (error) {
            console.error(error)
        }
      },
      async getProducts() {
      try {
        const endpoint = 'http://localhost/vue/getProductos.php';
        const response = await fetch(endpoint);
        const json = await response.json();
        this.products = json;
      }finally{}
    },
    }
  };
  </script>
  
  <style scoped>
  </style>
  