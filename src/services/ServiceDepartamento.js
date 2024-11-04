import Global from "./../Global";
import axios from "axios";

export default class ServiceDepartamento {
  getDepartamentos() {
    return new Promise(function (resolve) {
      let departamentos = [];
      let request = "api/departamentos";
      let url = Global.urlApiDepartamentos + request;
      console.log(url);
      axios.get(url).then((response) => {
        departamentos = response.data;
        resolve(departamentos);
      });
    });
  }

  insertDepartamento(departamento) {
    return new Promise(function (resolve) {
      let request = "api/departamentos";
      let url = Global.urlApiDepartamentos + request;
      console.log(url);
      axios.post(url, departamento).then(() => {
        resolve(departamento);
      });
    });
  }

  findDepartamento(id) {
    return new Promise(function (resolve) {
      let request = "api/departamentos/" + id;
      let url = Global.urlApiDepartamentos + request;
      let departamento = {};
      axios.get(url).then((response) => {
        departamento = response.data;
        resolve(departamento);
      });
    });
  }

  updateDepartamento(departamento) {
    return new Promise(function (resolve) {
      let request = "api/departamentos";
      let url = Global.urlApiDepartamentos + request;
      axios.put(url, departamento).then(() => {
        resolve(departamento);
      });
    });
  }
}
