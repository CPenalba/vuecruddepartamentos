<template>
  <div>
    <h1>Create departamento</h1>
    <h2>{{ mensaje }}</h2>
    <form v-on:submit.prevent="insertDepartamento()">
      <label>Id deparatmento: </label>
      <input
        type="number"
        v-model="departamento.idDepartamento"
        class="form-control"
      />
      <br />
      <label>Nombre: </label>
      <input type="text" v-model="departamento.nombre" class="form-control" />
      <br />
      <label>Localidad: </label>
      <input
        type="text"
        v-model="departamento.localidad"
        class="form-control"
      />
      <br />
      <button class="btn btn-info">Insertar</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamento from "@/services/ServiceDepartamento";

const service = new ServiceDepartamento();

export default {
  name: "CreateDepartamento",
  methods: {
    insertDepartamento() {
      service.insertDepartamento(this.departamento).then((result) => {
        this.mensaje = "Insertado " + result;
        this.$router.push("/");
      });
    },
  },
  data() {
    return {
      mensaje: "",
      departamento: {
        idDepartamento: 0,
        nombre: "",
        localidad: "",
      },
    };
  },
};
</script>

<style></style>
