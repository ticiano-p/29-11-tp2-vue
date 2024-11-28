<template>
<main id="app" class="container">
<div class="row mt-5  mb-5 p-2">
<div class="card mt-4 p-4">
  <h2><i class="fa-solid fa-cart-shopping btn-detalle"></i> Personas suscritas al club de lectura:</h2>
  <hr style="max-width: 60%;">
  <table class="table mt-2 mx-auto" >
<thead>
    <tr>
      <th class="fs-4 ">Nombre:</th>
      <th class="fs-4">Apellido:</th>
      <th class="fs-4">Email:</th>
      <th class="fs-4">Genero literarios:</th>
      <th class="fs-4 ">Formato de libro:</th>
    </tr>
  </thead>
  <tbody v-for=" suscrito in suscritos" >
      <tr>
        <td class="fs-5 ">{{ suscrito.nombre }}</td>
        <td class="fs-5 ">{{ suscrito.apellido }} </td>
        <td class="fs-5 ">{{ suscrito.email }} </td>
        <td class="fs-5 ">{{ suscrito.genero }} </td>
        <td class="fs-5 ">{{ suscrito.formato }} </td>

      </tr>

  </tbody>
</table>
</div>
</div>


</main>
</template>

<script>
export default {
   
  data() {
      return {
          suscritos:[],
          nombre:'',
          apellido:'',
          email:'',
          genero:'',
          formato:''

      }
  },
  created() {
  this.getProducts();
},
  methods: {
    async getProducts() {
    try {
      const endpoint = 'http://localhost/vue/getSuscritos.php';
      const response = await fetch(endpoint);
      const json = await response.json();
      this.suscritos = json;
    }finally{}
  },
  }
};
</script>

<style scoped>
</style>
