<template>
  <div>
    <h1>Detalles departamento</h1>
    <router-link to="/">Back to list</router-link>
    <ul class="list-group">
        <li class="list-group-item"> ID: {{ $route.params.id }}</li>
        <li class="list-group-item"> NOMBRE: {{ $route.params.nombre }}</li>
        <li class="list-group-item"> LOCALIDAD: {{ $route.params.localidad }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"DetailsDepartamento",

}
</script>

<style>

</style>