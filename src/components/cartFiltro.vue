<template>
    <main id="app" class="container">
      <div class="row mt-3">
        <div class="col-md-8 col-sm-12">
          <input 
            :value="filtro" 
            @input="$emit('update:filtro', $event.target.value)" 
            class="form-control mb-2 fs-4" 
            type="search" 
            placeholder="Buscar..."
          >
        </div>
        <div class="col-md-4 col-sm-12">
          <select 
            :value="filtroCat" 
            @change="$emit('update:filtroCat', $event.target.value)" 
            class="form-select fs-4"
          >
            <option value="" disabled selected>Filtrar por:</option>
            <option value="Juvenil">Juvenil</option>
            <option value="fantasia">fantasia</option>
            <option value="Policiales">Policiales</option>
            <option value="Terror">Terror</option>
            <option value="">No filtrar</option>
          </select>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    props: {
      filtro: String,
      filtroCat: String
    }
  };
  </script>
  
  <style scoped>
  </style>
  