<template>
    <div id="slideCocina" class="carousel slide navbar-expand-md margen-top">
      <div class="carousel-indicators">
        <button
          type="button"data-bs-target="#slideCocina"data-bs-slide-to="0"class="active"aria-current="true"aria-label="Slide 1"
        ></button>
        <button type="button" data-bs-target="#slideCocina" data-bs-slide-to="1" aria-label="Slide 2"
        ></button>
        <button type="button" data-bs-target="#slideCocina" data-bs-slide-to="2" aria-label="Slide 3"
        ></button>
      </div>
      <div id="carouselExampleAutoplaying" class="carousel slide pt-4" data-bs-ride="carousel"
      >
        <div class="carousel-inner">
        <picture class="carousel-item active">
           
           <img
             v-bind:src="imgCArrusel1"
             class="d-block w-100"
             alt="baner3"
           />
         </picture>
        <picture class="carousel-item ">
           
           <img
             v-bind:src="imgCArrusel2"
             class="d-block w-100"
             alt="baner2"
           />
         </picture>
         
          <picture class="carousel-item ">
            
            <img
              v-bind:src="imgCArrusel3"
              class="d-block w-100"
              alt="baner1"
            />
          </picture>
          
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#slideCocina"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#slideCocina"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <section id="nuestros" class="row mx-0 py-5 d-flex flex-row-reverse">
  <section class="col-12 col-lg-6 px-3">
    <h2 class="col-12">Bienvenidos a LibroExpress</h2>
    <p class="fs-5">
      En LibroExpress, somos apasionados por los libros y nos dedicamos a ofrecer una experiencia de compra única para lectores de todas las edades. Nuestra tienda en línea combina la comodidad de la tecnología con la pasión por la lectura, ofreciéndote una amplia selección de libros físicos y ebooks para que puedas disfrutar de tus lecturas favoritas en cualquier formato que prefieras.
    </p>
    <p class="fs-5">
      Desde novelas cautivadoras y libros infantiles hasta guías educativas y ensayos profundos, en LibroExpress encontrarás todo lo que necesitas para enriquecer tu biblioteca personal. Con un proceso de compra simple y opciones de envío flexibles, estamos aquí para hacer que tu experiencia de lectura sea lo más placentera posible.
    </p>
  </section>
  <div class="slide col-12 col-lg-6 text-center Base">
    <picture>
      <img 
        v-bind:src="imgPrecentacion" 
        alt="img presentacion" 
        class="img-fluid mx-auto d-block" 
      />
    </picture>
  </div>
</section>

</template>

<script>
    export default {
        props: {
            imgCArrusel1:String,
            imgCArrusel2:String,
            imgCArrusel3:String,
            imgPrecentacion:String,
        },
        
    }
</script>

<style scoped>
   
</style>