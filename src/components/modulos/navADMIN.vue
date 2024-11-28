<script setup>
</script>

<template>
    <nav class="bg-tostado navbar navbar-expand-md border-bottom fixed-top red">
        <div class="container-fluid">
          <a
            class="text-white navbar-brand h1 mb-0 text-pan font-merri fs-3"
            href="?sec=home"
          >
            <img
              v-bind:src="foto"
              alt="Logo"
              width="35"
              height="35"
              class="d-inline-block align-text-center "
            />
            LibroExpress
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item"><router-link class="nav-link active link-light fs-5" to="/admin">Editar libros</router-link></li>
              <li class="nav-item"><router-link class="nav-link active link-light fs-5" to="/admin-sec=suscritos">Suscritos</router-link></li>
            </ul>
            
          </div>
        </div>
      </nav>
</template>

<script>
    export default {
        name: 'Haeder',
        props: {
            foto: String,
        },
        methods: {

        }
    }
</script>

<style scoped>
   * {
   
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
.bg-tostado {
    background-color: #5f5f5f !important;
  }

</style>