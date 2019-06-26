<template>
  <div class="servicios">
    <img alt="Vue logo" src="../assets/pinguins.jpg">
    <h1 class="mt-5">Servicios</h1>
    <p>Esta es la pagina de Servicios</p>
<<<<<<< HEAD

    <ul v-for="(item, index) in posts" :key="index">
      <p v-if="item.biography.publisher ==='DC Comics' && item.name ==='Batman' && item.biography.fullName ==='Bruce Wayne'">
        {{item.name}} - {{item.biography.publisher}} - {{item.images.md}} - {{item.biography.fullName}}
        <b-img :src="item.images.md"  fluid class="ml-1 mr-1 mt-3 mb-2" alt="Fluid image"></b-img>
      </p>
      <p v-if="item.biography.publisher ==='Marvel Comics' && item.name ==='Daredevil'">
        {{item.name}} - {{item.biography.publisher}} - {{item.images.md}} - {{item.biography.fullName}}
        <b-img :src="item.images.md"  fluid class="ml-1 mr-1 mt-3 mb-2" alt="Fluid image"></b-img>
      </p>
    </ul>
  </div>  
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'app',
  mounted(){
    this.$store.dispatch('loadPosts')
  },
  computed: {
    ...mapState([
      'posts'
    ])
  },
}
</script>
=======
  </div>
</template
>>>>>>> master
