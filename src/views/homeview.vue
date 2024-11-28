<script setup>
import home from '../components/home.vue';
import Header from '../components/modulos/nav.vue';

</script>

<template>
  <Header class="titulo" foto="./img/logo.png"></Header>

  <home
    imgCArrusel1="./img/b1.webp"
    imgCArrusel2="./img/b2.webp"
    imgCArrusel3="./img/b3.webp"
    imgPrecentacion="./img/biLibroExpres.jpg"
  ></home>
</template>

<style scoped>
.products-page {
  padding: 20px;
}
</style>
