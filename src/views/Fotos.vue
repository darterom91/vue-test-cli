<template>
  <div class="text-white">
    <h1>Galeria de fotos</h1>
    <Foto/>
    <img src="../assets/camara.jpg" alt="Camara de fotos">
    <br>
    <div>
      <router-link :to="{name:'fotos', params:{id : item}}" 
      v-for="(item, index) in fotosArr" :key="index">
        <Button>boton {{item}}</Button>
      </router-link>
    </div>
    <button @click="home()">home</button>
    <button @click="anterior()">anterior</button>
    <button @click="despues()">despues</button>

  </div>
</template>

<script>

import Foto from '../components/Foto.vue'

export default {
  components :{
    Foto
  },
  data(){
    return{
      fotosArr:[1, 2, 3]
    }
  },
  methods: {
    home(){
      this.$router.push('/')
    },
    anterior(){
      this.$router.go(-1)
    },
    despues(){
      this.$router.go(1)
    }
  },
}
</script>