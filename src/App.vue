<template>
  <img alt="Vue logo" src="./assets/dmi.jpg" />
  <h1>ATM BERAS DAN TELUR PROVINSI SULAWESI TENGGARA</h1>
  <br />
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
  <!-- <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="card rounded shadow">
          <div class="card-header">HASIL DATA</div>
          <div class="card-body">
            <table class="table">
              <tr v-for="(atmberas, index) in atmberas" :key="index">
                <td v-if="atmberas.beras != 0">
                  {{ atmberas.beras }} {{ "liter" }}
                </td>
                <td v-if="atmberas.telur && atmberas.telur_beras != 0">
                  {{ atmberas.telur_beras }} {{ "liter" }} {{ atmberas.telur }}
                  {{ "telur" }}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div> -->
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
        .get("http://192.168.1.10/BackendAtmBerasUMK/public/api/getApiTelur")
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
setTimeout(function () {
  location.reload();
}, 1000);
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
