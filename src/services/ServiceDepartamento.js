import Global from "./../Global";
import axios from "axios";

export default class ServiceDepartamento {
  getDepartamentos = new Promise(function (resolve) {
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
