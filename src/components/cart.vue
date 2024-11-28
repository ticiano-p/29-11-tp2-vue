<template>
    <div  class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card h-100"  style="cursor: pointer;">
        <div class="card-body">
          <img class="img-fluid d-block mx-auto" :src="foto" :alt="nombre">
          <h2 class="mb-2 fw-bold mt-2 fs-5 text-center">{{ nombre }}</h2>
          <div class="d-flex justify-content-around align-items-center mt-2 flex-wrap">
            <p class="fs-5 mb-0 flex-grow-1 text-truncate"> $ {{ precio }}</p>
            <button @click.stop="addCart" class="btn btn-outline-success d-flex align-items-center flex-shrink-0">
              <i class="bi bi-cart4 me-4 ms-4"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

   
  </template>
  
  <script>
  
  export default {
    props: {
      nombre: String,
      foto: String,
      precio: Number,
      id: Number,
      car: Array,
      products: Array,
      filtro: Array,
      filtroCat: Array
    },
    
    computed:{
      filtradas(){                                           
             const lista=this.products.filter(task=>
              task.nombre.toLowerCase().includes(this.filtro.toLowerCase())&&
              task.categoria.includes(this.filtroCat))
             return lista ;   
             
        },
    },
    
    methods: {
      addCart() {
        this.$emit('add',{
          id: this.id,
          nombre: this.nombre,
          precio: this.precio,
          foto: this.foto
        });
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  