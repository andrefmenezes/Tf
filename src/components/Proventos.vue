<template>
  <div>
    <div>
      <navbar />
    </div>

    <div class="prov">
      <div class="p1-pv">
        <div class="prov-title">
          <strong>Proventos:</strong>
          
        </div>
        <div class="tb-pv">
          <table id="tbl" border="1">
            <thead>
              <tr>
                <th>Mês-ano</th>
                <th>Proventos</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="prov of proventoss " :key="prov.id_prov">
                <td>{{prov.data_prov}}</td>
                <td>{{prov.proventos}}</td>

                <td>
                  <button @click="editar(prov)" class="waves-effect btn-small blue darken-1">
                    <i class="material-icons">
                      <font-awesome-icon :icon="['fas', 'edit']" />
                    </i>
                  </button>
                  <button @click="remover(prov)" class="waves-effect btn-small blue darken-1">
                    <i class="material-icons">
                      <font-awesome-icon :icon="['fas', 'trash-alt']" />
                    </i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="p2-pv">
        <div class="pv-total">
        <div class="pv-total-1">
 <strong id="title">Total de Proventos:</strong>
        </div>
         
         <div class="pv-total-1">
           <strong>{{this.soma}}</strong>
         </div>

         
          
        </div>
      </div>

      <div class="p3-pv">
        <!-- @submit.prevent evita a atualizaçao da pagina -->
        <form class="pv" @submit="salvar">
          <fieldset>
            <div class="field-group-pv">
              <div class="field-pv">
                <label for="prov">Proventos:</label>
                <input type="float" name="prov" id="prov" required v-model=" prov.proventos" />
              </div>
              <div class="field-pv">
                <label for="pv-data">Data:</label>
                <input type="text" name="pv-data" id="dt" required v-model=" prov.data_prov" />
              </div>
            </div>
          </fieldset>

          <button type="submit">Concluir operação</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./Navbar.vue";
import Prov from "../services/prov";
export default {
  name: "Proventos",
  components: {
    navbar
  },
  data() {
    return {
      prov: {
        id_prov: "",
        proventos: "",
        data_prov: ""
      },
      proventoss: [],
      soma: 0,
     
    };
  },
  mounted() {
    this.listar();
  },
  methods: {
    listar() {
      Prov.listar().then(res => {
        this.proventoss = res.data;
        
        for (let index = 0; index < this.proventoss.length; index++) {
          var i =this.proventoss[index].proventos.toString().replace(",", ".");
          this.soma = this.soma + parseFloat(i);
          
        }
         
      });
    },

    salvar() {
      if (!this.prov.id_prov) {
        Prov.salvar(this.prov).then(res => {
          this.prov = res.data;
          alert("ok");
          this.prov = {};
          this.listar();
        });
      } else {
        Prov.atualizar(this.prov).then(res => {
          this.prov = res.data;
          alert("atualizado");
          this.prov = {};
          this.listar();
        });
      }
    },

    editar(prov) {
      this.prov = prov;
    },
  
    remover(prov) {
      Prov.apagar(prov).then(res => {
        this.prov = res.data;
        this.listar();
      });
    },
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.prov {
  background-color: #42cca5;
  min-height: 100vh;
  display: flex;
  width: 100%;
}
.p1-pv {
  width: 30%;
}
.p2-pv {
  width: 30%;
  display: flex;
  justify-content: center;
}
.p3-pv {
  width: 40%;
  display: flex;
  justify-content: center;
}
.prov-title {
  position: absolute;
  background-color: #0c3a2d;
  width: 30vh;
  height: 6.5vh;
  border-radius: 49px;
  text-align: center;
  padding: 0.4%;
  margin-top: 8%;
  margin-left: 3%;
}

.tb-pv {
  background-color: #0c3a2d;
  width: 60%;
  text-align: center;
  padding: 0.4%;
  margin-top: 47%;
  margin-left: 15%;
  border-radius: 18px;
  margin-bottom: 3%;
}
.prov-btn {
  position: absolute;
  background-color: #048084;
  width: 40vh;
  height: 6.5vh;
  border-radius: 49px;
  text-align: center;
  padding: 0.4%;
  margin-top: 8%;
  margin-left: 70%;
}

.prov strong {
  color: #e2cd8a;
  font-size: 1.5em;
}
.tb-pv table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
.tb-pv th,
td {
  color: #e2cd8a;
  padding: 15px;
}
.tb-pv th {
  text-align: center;
}
.tb-pv table {
  margin-left: 2%;
  border-spacing: 5px;
  margin-right: 2%;
}
.pv-total {
  background-color: #0c3a2d;
  width: 40vh;
  height: 15vh;
  border-radius: 38px;
  padding: 2%;
  display: flex;
  justify-content: center;
  margin-top: 75%;  
  flex-direction: column;
  align-items: center;
}
.pv {
  background-color: #048084;
  padding: 64px;
  border-radius: 29px;
  max-width: 730px;
  max-height: 330px;
  margin-top: 35%;
}

.pv fieldset {
  border: 0;
}
.pv legend {
  margin-bottom: 40px;
}
.pv legend h2 {
  font-size: 24px;
}

.pv .field-pv {
  flex: 1; /*prencher o espaço que falta*/
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.pv .field-group-pv {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pv input,
.pv select {
  background-color: #c4c4c4;
  outline: none; /*tira a linha preta*/
  border: 0;
  padding: 14px 20px;
  font-size: 16px;
  border-radius: 8px;
}

.pv label {
  font-size: 1.5em;
  margin-bottom: 4px;
  color: #e2cd8a;
}

.pv button {
  width: 70%;
  height: 34px;
  background-color: #0c3a2d;
  border-radius: 8px;
  color: #e2cd8a;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  margin-left: 15%;
}
.blue.darken-1 {
  background-color: #0c3a2d !important;
}

.waves-effect {
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  z-index: 1;
  -webkit-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
  margin-bottom: 20%;
}

.btn-small {
  height: 32.4px;
  line-height: 32.4px;
  font-size: 13px;
}
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}


.pv-total-1{
flex: 1; /*prencher o espaço que falta*/
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

</style>
