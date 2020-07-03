<template>
  <div>
    <div>
      <navbar />
    </div>
    <div class="rv">
      <div class="p1-rv">
        <div class="rv-title">
          <strong>Renda Variável:</strong>
        </div>

        <div class="tb-rv">
          <table id="tbl" border="1">
            <thead>
              <tr>
                <th>%</th>
                <th>Ativos</th>
                <th>Quantidade</th>
                <th>Preço Medio</th>
                <th>Preço Atual</th>
                <th>Custo Total</th>
                <th>Valor Total</th>
                <th>Variação</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(ativo) of ativos" :key="ativo.id_ativo">
                <td   >{{ precoAtual(ativo.name_ativo) }}</td>
                <td>{{ativo.name_ativo}}</td>
                <td>{{ativo.qtd_ativo}}</td>
                <td>{{ativo.pm_ativo}}</td>
                <td>{{ porcent }}</td>
                <td>{{((ativo.qtd_ativo.toString().replace(",", ".")) *(ativo.pm_ativo.toString().replace(",", "."))).toFixed(2)}}</td>
                <td>{{}}</td>
                <td>{{}}</td>
                <td>
                  <button @click="editar(ativo)" class="waves-effect btn-small blue darken-1">
                    <i class="material-icons">
                      <font-awesome-icon :icon="['fas', 'edit']" />
                    </i>
                  </button>
                  <button @click="remover(ativo)" class="waves-effect btn-small blue darken-1">
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
      <div class="p2-rv">
        <form class="f-rv" @submit="salvar">
          <fieldset>
            <div class="field-group-rv">
              <div class="field-rv">
                <label for="ativo">Ativo:</label>
                <input
                  type="text"
                  maxlength="6"
                  name="ativo"
                  id="ativo"
                  required
                  v-model="ativo.name_ativo"
                />
              </div>
              <div class="field-rv">
                <label for="preco">Preço:</label>
                <input type="float" name="preco" id="preco" required v-model="ativo.pm_ativo" />
              </div>
              <div class="field-rv">
                <label for="qtd">Quantidade:</label>
                <input type="number" name="qtd" id="qtd" required v-model="ativo.qtd_ativo" />
              </div>
              <div class="field-rv">
                <label for="data">Data:</label>
                <input type="date" name="data" required v-model="ativo.data_ativo" />
              </div>
            </div>
          </fieldset>

          <button type="submit">Cadastrar operação</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./Navbar.vue";
import Ativo from "../services/ativos";
import * as moment from "moment";
export default {
  name: "Rv",
  components: {
    navbar
  },
  data() {
    return {
      ativo: {
        id_ativo: "",
        name_ativo: "",
        pm_ativo: "",
        qtd_ativo: "",
        data_ativo: ""
      },
      ativos: [],
      soma: 0,
      pa: [],
      porcent: 0,
      va: 0,
      variacao: 0
    };
  },
  mounted() {
    this.listar();
  },
  methods: {
    precoAtual(nome) {
      var data_ontem = moment()
        .subtract("1", "days")
        .format("YYYYMMDD");

      const bovespa = require("bovespa")();
      bovespa(nome, data_ontem).then(data => {
          this.va = data.preult;
          console.log(data.preult)
      });
      return this.va
    },
    listar() {
      var data_ontem = moment()
        .subtract("1", "days")
        .format("YYYYMMDD");

      Ativo.listar().then(res => {
        this.ativos = res.data;

        for (let index = 0; index < this.ativos.length; index++) {
          var i = this.ativos[index].name_ativo;
          // console.log(i);
          const bovespa = require("bovespa")();
          bovespa(i, data_ontem).then(data => {
            this.pa.push(data.preult);
            // console.log(this.pa.preult);
          });
        }
        // console.log(this.pa);
      });

      //   var ti = 'ABEV3'
      //    const bovespa = require("bovespa")();
      //    bovespa(ti, data_ontem).then(data => {
      //      this.pa =  data
      //   console.log(this.pa)
      //   });
      //   console.log(this.pa)

      //   bovespa(ti, data_ontem).then(console.log);
    },

    salvar() {
      if (!this.ativo.id_ativo) {
        Ativo.salvar(this.ativo).then(res => {
          this.ativo = res.data;
          alert("ok");
          this.ativo = {};
          this.listar();
        });
      } else {
        Ativo.atualizar(this.ativo).then(res => {
          this.ativo = res.data;
          alert("atualizado");
          this.ativo = {};
          this.listar();
        });
      }
    },

    editar(ativo) {
      this.ativo = ativo;
    },

    remover(ativo) {
      Ativo.apagar(ativo).then(res => {
        this.ativo = res.data;
        this.listar();
      });
    },
    adicionaLinha(idTabela) {
      var pr = document.getElementById("preco");
      var preco = pr.value;
      var tabela = document.getElementById(idTabela);
      var numeroLinhas = tabela.rows.length;
      var linha = tabela.insertRow(numeroLinhas);
      var celula1 = linha.insertCell(0);
      var celula2 = linha.insertCell(1);

      celula1.innerHTML = `${preco}%`;
      celula2.innerHTML = `${pr}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.rv {
  background-color: #42cca5;
  min-height: 100vh;
  display: flex;
}

.p2-rv {
  width: 40%;
  display: flex;
  justify-content: center;
}
.rv-title {
  background-color: #0c3a2d;
  width: 30vh;
  height: 6.5vh;
  border-radius: 49px;
  text-align: center;
  padding: 0.4%;
  margin-top: 17%;
  margin-left: 5%;
}
.tb-rv {
  background-color: #0c3a2d;
  min-width: 100%;
  min-height: 50vh;
  text-align: center;
  padding: 0.4%;
  margin-top: 10%;
  margin-left: 3%;
  border-radius: 15px;
  margin-bottom: 5%;
}

.rv-btn {
  background-color: #048084;
  width: 30vh;
  height: 6.5vh;
  border-radius: 49px;
  text-align: center;
  padding: 0.4%;
  margin-top: 30%;
  margin-left: 70%;
}

.rv strong {
  color: #e2cd8a;
  font-size: 1.5em;
}
.tb-rv table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
.tb-rv th,
td {
  color: #e2cd8a;
  padding: 15px;
}
.tb-rv th {
  text-align: center;
}
.tb-rv table {
  border-spacing: 5px;
}

.f-rv {
  background-color: #048084;
  padding: 64px;
  border-radius: 29px;
  max-width: 730px;
  max-height: 600px;
  margin-top: 40%;
  margin-bottom: 5%;
}

.f-rv fieldset {
  border: 0;
}
.f-rv legend {
  margin-bottom: 40px;
}
.f-rv legend h2 {
  font-size: 24px;
}

.f-rv .field-rv {
  flex: 1; /*prencher o espaço que falta*/
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.f-rv .field-group-rv {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.f-rv input,
form select {
  background-color: #c4c4c4;
  outline: none; /*tira a linha preta*/
  border: 0;
  padding: 14px 20px;
  font-size: 16px;
  border-radius: 8px;
}

.f-rv label {
  font-size: 1.5em;
  margin-bottom: 4px;
  color: #e2cd8a;
}

.f-rv button {
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
</style>
