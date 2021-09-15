<template>
  <img alt="Vue logo" src="./assets/dmi.jpg" />
  <h1>ATM BERAS DAN TELUR PROVINSI SULAWESI TENGGARA</h1>
  <br />
  <body onload="Javascript:Refresh_page(5000);">
  <div
    v-for="(atmberas, index) in atmberas"
    :key="index"
    class="d-flex justify-content-center"
  >
    <h5 v-if="atmberas.beras != 0">{{ atmberas.beras }} {{ "liter" }}</h5>
    <h5 v-if="atmberas.telur && atmberas.telur_beras != 0">
      {{ atmberas.telur_beras }} {{ "liter" }} {{ atmberas.telur }}
      {{ "telur" }}
    </h5>
  </div>
  </body>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  setup() {
    // reactive state (mengumpulkan/menyimpan semua data api kedalam array)
    let atmberas = ref([]);

    onMounted(() => {
      // fungsinya on mount untuk mengambil data enpoint API
      axios
        .get("http://localhost/BackendAtmBerasUMK/public/api/getApiTelur")
        .then((result) => {
          atmberas.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    return {
      atmberas,
    };
  },
};
function Refresh_page(t){
  setTimeout("location.reload(true);",t)
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
