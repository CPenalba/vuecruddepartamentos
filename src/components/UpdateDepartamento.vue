<template>
  <div>
    <h1>Update departamento</h1>
    <form v-if="departamento" v-on:submit.prevent="updateDepartamento()">
      <input
        type="hidden"
        v-model="departamento.idDepartamento"
        class="form-control"
      />
      <br />
      <label>Nombre</label>
      <input type="text" v-model="departamento.nombre" class="form-control" />
      <br />
      <label>Localidad</label>
      <input
        type="text"
        v-model="departamento.localidad"
        class="form-control"
      />
      <br />
      <button>Actualizar</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamento from "./../services/ServiceDepartamento";

const service = new ServiceDepartamento();
export default {
  name: "UpdateDepartamento",
  data() {
    return {
      departamento: null,
    };
  },
  mounted() {
    let id = this.$route.params.id;
    service.findDepartamento(id).then((result) => {
      this.departamento = result;
    });
  },
  methods: {
    updateDepartamento() {
      service.updateDepartamento(this.departamento).then((result) => {
        console.log(result);
        this.$router.push("/");
      });
    },
  },
};
</script>

<style></style>
