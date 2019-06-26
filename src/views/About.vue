<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/AboutUs.jpg">
    <h1>This is an about page</h1>
      <b-img :src="require('../assets/AboutUs.jpg')"  fluid class="ml-1 mr-1 mt-3 mb-2" alt="Fluid image"></b-img>
      <b-img src="https://picsum.photos/1024/480/?image=55" fluid class="ml-1 mr-2 mt-3 mb-2" alt="Fluid image"></b-img>
    <embeds class="m-5"/>
  </div>
</template>

<script>
import embeds from '@/components/Embeds.vue'
export default {
  name: 'about',
  data() {
      return {
        mainProps: { blank: true, width: 75, height: 75, class: 'm1' }
      }
    },
  components: {
    embeds
  }
}
</script>
