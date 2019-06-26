<template>
  <div id="app" class="bg-dark text-light">
    <div id="nav" class="bg-light">

      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/servicios">servicios</router-link>
      |
      <router-link to="/columnas">columnas</router-link>
      |
      <router-link to="/forms">forms</router-link>
      |
      <router-link to="/CRUD">CRUD</router-link>
      |
      <router-link to="/contarFrutas">contarFrutas</router-link>
      |
      <router-link to="/Fotos/1">fotos</router-link>
    </div>

<div>
  <b-container>
    <b-navbar toggleable="md" type="dark" variant="success">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" exact>Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/servicios">servicios</b-nav-item>
          <b-nav-item to="/contarFrutas">contarFrutas</b-nav-item>
          <b-nav-item to="/forms">forms</b-nav-item>
          <b-nav-item to="/columnas">columnas</b-nav-item>
          <b-nav-item to="/CRUD">CRUD</b-nav-item>
          <b-nav-item to="/Fotos/1">fotos</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</div>
    <b-container>
      <router-view/>
    </b-container>
    <h3>Esto es una lista</h3>
  <ul class="text-left" v-for="(item, index) in posts" :key="index">
    <li>
      {{item.name}}
    </li>
    <li>
      {{item.biography}}
    </li>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
