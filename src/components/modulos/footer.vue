<template>
    <footer class="bg-tostado text-white py-4 ">
    <div class="container">
        <div class="row">
            <!-- Información de Contacto -->
            <div class="col-md-4 mb-3">
                <h5 class="fs-4">Contacto</h5>
                <ul class="list-unstyled">
                    <li><a target="_blank" class="text-white fs-5" v-bind:href=Direccion>Dirección: Av. Sta. Fe 1860. CABA. </a></li>
                    <li class="fs-5">Teléfono: {{Telefono}}</li>
                    <li class="link-light fs-5 ">Email: <a class="link-light fs-5" v-bind:href=Email>{{Email}}</a> </li>
                </ul>
            </div>
            <!-- Enlaces Útiles -->
            <div class="col-md-4 mb-3 ">
                <h5 class="fs-4">Enlaces Útiles</h5>
                <ul class="list-unstyled">
                    <li class="nav-item"><router-link class="nav-link active link-light fs-5" to="/">Presentación</router-link></li>
                    <li class="nav-item"><router-link class="nav-link active link-light fs-5" to="/productos">Productos</router-link></li>
                    <li class="nav-item"><router-link class="nav-link active link-light fs-5" to="/carrito"><i class="bi bi-cart4 me-4 ms-4"></i></router-link></li>
                 </ul>
            </div>
            <!-- Redes Sociales -->
            <div class="col-md-4 mb-3">
                <h5 class="fs-4">Síguenos</h5>
                <ul class="list-unstyled d-flex">
                    <li class="me-3"><a target="_blank" v-bind:href=Facebook class="text-white" ><i class="bi bi-facebook fs-3"></i></a></li>
                    <li class="me-3"><a target="_blank" v-bind:href=Twitter class="text-white" ><i class="bi bi-twitter fs-3"></i></a></li>
                    <li class="me-3"><a target="_blank" v-bind:href=Instagram class="text-white" ><i class="bi bi-instagram fs-3"></i></a></li>
                    
                </ul>
            </div>
        </div>
        <div class="text-center mt-4">
            <p class="fs-3">&copy;  {{Derechos}}</p>
        </div>
    </div>
</footer>
</template>

<script>
    export default {
        name: 'footer',
        props: {
            
            Direccion: String,
            Telefono:String,
            Email:String,
            
            Instagram:String,
            Facebook:String,
            Twitter:String,
            Derechos:String
        },
        methods: {

        }
    }
</script>

<style scoped>
   .bg-tostado {
    background-color: #5f5f5f !important;
  }

  .nav-link:hover{
    color: #f0a500;
  }
  ul{
    list-style-type: none;
  }
 a {
    text-decoration: none;
  }
</style>