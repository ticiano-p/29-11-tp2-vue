<template>
    <section class="row">
  <picture class="col-12">
    <img  class="img-fluid d-block w-100" v-bind:src="imgPrecentacion" alt="Banner de contacto">
  </picture>
</section>
    <section class="container">
        
    <div class="row">
        
        <div class="f-contactos col-12 col-md-8 order-1 order-md-1">
            <h1 class=" mt-5">Suscribete a clubes de lectura.</h1>
            <p>
                <strong>Únete</strong> a nuestros <em>clubes de lectura</em> y disfruta de una 
                <strong>selección exclusiva</strong> de <em>libros digitales</em> cada mes. 
                Explora <strong>nuevos géneros</strong> y recibe tus lecturas directamente en tu 
                <strong>ebook</strong>. ¡No te pierdas la oportunidad de sumergirte en 
                <em>grandes historias</em> desde la comodidad de tu hogar!
              </p>  
          <hr>
            <div class="row">
                <form id="contact" v-on:submit.prevent="postProductos()" class=" row g-3" method="post" action="" >
                  <div class="col-6">
                      <label for="Nombre" class="form-label">Nombre</label>
                      <input  required type="text" class="form-control" id="Nombre" name="Nombre" v-model="nombre" placeholder="Nombre" >
                  </div>
                  <div class="col-6">
                      <label for="Apellido" class="form-label">Apellido</label>
                      <input  required type="text" class="form-control" id="Apellido" name="Apellido" v-model="apellido" placeholder="Apellido">
                  </div>
                  <div class="col-10">
                      <label for="Email" class="form-label">Email</label>
                      <input  required type="email" class="form-control" id="Email" placeholder="Email" v-model="email" name="Email" >
                  </div>
                  <div class="col-12">
                      <label for="Géneros" class="form-label">Géneros literarios de preferencia:</label>
                      <select name="Géneros" v-model="genero" id="" required>
                        <option value="" disabled selected>Seleccione un Genero</option>

                          <option value="recomendación de la empresa" >Recomendación de la empresa</option>
                          <option value="Novela" >Juvenil</option>
                          <option value="Ciencia Ficción">Ciencia Ficción</option>
                          <option value="Misterio">Policiales</option>
                          <option value="Biografías">Terror</option>
                          
                      </select>
                  </div>
                  <div class="col-12">
                      <label for="FormatoInput" class="form-label">Formato de libro:</label>
                      <select name="Formato" v-model="formato" id="" required>
                        <option value="" disabled selected>Seleccione un formato</option>

                          <option value="PDF">PDF</option>
                          <option value="ePub">ePub</option>
                          <option value="Mobi ">Mobi (para la Kindle)</option>
                          <option value="rtf">rtf</option>
                          <option value="swf">swf</option>
                          
                          
                      </select>
                  </div>
                  <div class="d-grid gap-2 col-3 mx-auto mt-5">
                      <button type="submit" class="btn btn-outline-warning">
                      Enviar
                      </button>
                  </div>
                </form>
              </div>
        </div>
        
        <aside class="col-12 col-md-3 order-2 order-md-2 mt-5 ms-4">
            <div class=" col-12 mt-5">
                <img v-bind:src="imgLateral1" class="aside-img">
                <h2 class="aside-h2">Registra al  lector.</h2>
                <p >Completá los datos de cada lector.</p>
            </div>
            <div >
            <img v-bind:src="imgLateral2" class="aside-img">
                <h2 class="aside-h2">Seleccionamos y enviamos los libros.</h2>
                <p>Nuestro equipo elige los mejores libros para tu preferencia.</p>
            </div>
            <div >
            <img v-bind:src="imgLateral3" class="aside-img">
                <h2 class="aside-h2">¡Todos los meses en tu casa!</h2>
                <p >Recibe un Mail con libros y más sorpresas.</p>
            </div> 

        </aside>
        
    </div>
        
    </section>

</template>

<script>
    export default {
        props: { 
            imgPrecentacion:String,
            imgLateral1:String,
            imgLateral2:String,
            imgLateral3:String
        },
        data() {
        return {
            nombre:'',
            apellido:'',
            email:'',
            genero:'',
            formato:''

        }
    },
    
    methods: {
        
      async postProductos(){
        try {
            const data= {
            nombre:this.nombre,
            apellido:this.apellido,
            email:this.email,
            genero:this.genero,
            formato:this.formato

         }
         console.log(data)
        const endpoint = 'http://localhost/vue/postSubscription.php';
        const config = {
             headers:{
                'Content-Type': 'application/json' 
             },
             method: 'POST',
             body: JSON.stringify(data)
        }
        console.log(config)
        const response = await fetch(endpoint, config);
        Toastify({
                text: "Suscripcion Enviada",
                duration: 3000,
                offset: {
                y: "3rem"
                }
                }).showToast();
        } catch (error) {
            console.error(error)
        }
      }
    }
    }
</script>

<style scoped>
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
</style>