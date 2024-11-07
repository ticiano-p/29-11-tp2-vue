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
              <li class="nav-item"><a class="nav-link active link-light fs-5 " href="?sec=home">Presentación</a></li>
              <li class="nav-item"><a class="nav-link active link-light fs-5" href="?sec=producto">Productos</a></li>
              <li class="nav-item"><a class="nav-link active link-light fs-5 " type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarModal" aria-controls="sidebarModal"><i class="bi bi-cart4 me-4 ms-4"></i></a></li>

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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.bg-tostado {
    background-color: #5f5f5f !important;
  }

  .nav-link:hover{
    color: #f0a500;
  }
  
/* contactos */
#contact input[type=text]{
    width: 85%;
    padding: 0.85rem 1.25rem;
    border: none;
    border-bottom: 1px solid burlywood;
  }
  #contact input[type=email]{
    width: 85%;
    padding: 0.85rem 1.25rem;
    border: none;
    border-bottom: 1px solid burlywood;
  }
  select{
    
    padding: 0.85rem 1.25rem;
    border: none;
    border-bottom: 1px solid burlywood;
  }
  .btn-outline-warning{
    border-bottom: 1px solid burlywood;
  }

.aside-img {
  width: 100%;  
  max-width: 120px; 
  height: auto;  
}
.aside-h2{
  font-size: 1.5rem;  
  
  line-height: 1.2;
}

  /*gracias de contactos */
  .container-center{
    background-color: rgb(255, 255, 255);
    margin: 5rem 0 !important;
    border: 1px solid black;
    border-radius: 10px;
    
}
.fondo{
           
  background: url(../img/libros-4.jpg)!important;
  
} 

.título {
  font-size: 5rem;
  text-align: center;
  text-shadow: 5px 5px 3px gray;
}


.Acercademí {
  margin-top:6rem ;
  padding-top: 2rem;
  background: #e5e5e5;
  border-radius: 1rem;
  border: solid 1px rgb(0, 0, 0);
}

a{
  text-decoration: none;
}

.Acercademí-img {
  position: relative;
  width: 25rem;
  height: 25rem;
  
}

.Acercademí-img img {
  width: 90%;
  border-radius: 50%;
  border: .2rem solid #000000;
  
  left: 112%;
}



ul {
  list-style-type: none;
}


</style>