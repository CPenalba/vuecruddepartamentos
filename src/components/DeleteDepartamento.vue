<template>
  <div>
    <h1>Delete departamento</h1>
  </div>
</template>

<script>
import ServiceDepartamento from "./../services/ServiceDepartamento";

const service = new ServiceDepartamento();

export default {
  name: "DeleteDeparatmento",
  mounted() {
    let id = this.$route.params.id;
    service.deleteDepartamento(id).then((result) => {
      console.log(result);
      this.$router.push("/");
    });
  },
};
</script>

<style></style>
