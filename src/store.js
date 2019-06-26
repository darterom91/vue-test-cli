import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    posts: []
  },
  actions: {
    loadPosts({commit}){
      axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then(data=> {
        console.log(data.data);
        let posts = data.data
        commit('SET_POSTS', posts)
      })
      .catch()
    }
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    }
  }
})
