<template>
  <div>
    <h1>{{titulo}}</h1>
    <b-form @submit="agregarTarea">
      <b-form-group
        id="input-group-1"
        label="tareaNueva:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          class="my-2"
          id="input-1"
          v-model="nuevaTarea"
          type="text"
          required
          placeholder="Enter text"></b-form-input>
      </b-form-group>
      <b-button class="btn mt-2" type="submit" variant="primary" >Submit</b-button>
    </b-form>

    <div class="mt-3" v-for="(item, index) in tareas" :key="index">
      <div>
        <b-alert :class="['alert', item.estado ? 'alert-success' : 'alert-danger']" variant="success" show>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              {{index}} -- {{item.nombre}} and {{item.estado}}
            </div>
            <div>
              <b-button class="btn btn-sm" variant="success" @click="editarTarea(index)">OK</b-button>
              <b-button class="btn btn-sm " variant="danger" @click="borrarTarea(index)">X</b-button>
            </div>
          </div>
        </b-alert>
      </div>
    </div>

    <h3>{{nuevaTarea}}</h3>


  </div>
</template>

<script>
export default {
  name: 'crud',
  data() {
    return {
    titulo: 'GYM CON VUE',
    tareas: [],
    nuevaTarea: ''
    }
  },
  methods: {
    agregarTarea(evt){
      evt.preventDefault()
      console.log("Diste a click: "+this.nuevaTarea);
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false
      });
      console.log(this.tareas);
      this.nuevaTarea = '';
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    },
    editarTarea(index){
      // console.log("editar "+index);
      this.tareas[index].estado = true;
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    },
    borrarTarea(index){
      this.tareas.splice(index, 1);
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    }
  },
  created() {
    let datosDB = JSON.parse(localStorage.getItem('gym-vue'));

    if (datosDB == null) {
      this.tareas = [];
    }else{
      this.tareas = datosDB;
    }
  }
}
</script>