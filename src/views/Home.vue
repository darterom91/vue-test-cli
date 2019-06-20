<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <slides/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import slides from '@/components/Slides.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    slides
  }
}
</script>
