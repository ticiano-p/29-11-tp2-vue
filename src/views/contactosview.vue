<script setup>
import contactos from '../components/contactos.vue';
import Header from '../components/modulos/nav.vue';


</script>

<template>
        <Header class="titulo" foto="./img/logo.png"></Header>

  <contactos
            imgPrecentacion="./img/banerContacto.png"
            imgLateral1="./img/registrar.webp"
            imgLateral2="./img/leelibros.webp"
            imgLateral3="./img/tucasa.webp"
  ></contactos>
</template>

<style scoped>
.products-page {
  padding: 20px;
}
</style>
