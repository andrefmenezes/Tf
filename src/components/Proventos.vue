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
    <tr>
        <th>Mês-Ano</th>
        <th>Proventos</th>
       
 
    </tr>
    <tr>
        
        
        
    </tr>
    
</table>
      </div>
    </div>
    <div class="p2-pv">
    <div class="pv-total">
      <strong>Total de Proventos:</strong>
      <strong id="qtdtotal"></strong>
    </div>




    </div>
      
       <div class="p3-pv">
  <form class="pv" method="GET" v-on:submit="adicionaLinha('tbl');" >

 

            <fieldset>
           
        <div class="field-group-pv">

               <div class="field-pv">
                <label for="select">Tipo da operação:</label>
                         <select name="select">
  <option value="valor1" selected>Novo</option> 
  <option value="valor2" >Editar</option>
  <option value="valor3">Apagar</option>
</select>

            </div>
            <div class="field-pv">
              <label for="prov">Proventos:</label>
              <input type="number" name="prov" id="prov" required>
            </div>
            <div class="field-pv">
                <label for="pv-data">Data:</label>
                <input type="date" name="pv-data" id="dt" required>

            </div>
          
            
        </div>
            </fieldset>
            
            <button type="submit" >
                Concluir operação
            </button>
        </form>
       </div>
      
    
    
  </div>
  </div>
</template>
<script src="jquery-3.3.1.min.js"></script>
<script>
import navbar from './Navbar.vue'
export default {
  name: "Proventos",
   components:{
       navbar
    
  }, methods:{
adicionaLinha(idTabela) {
            var dt = document.getElementById('dt');
            
            var data = dt.value;
           
             var prov = document.getElementById('prov');
             var provento =prov.value;

                var tabela = document.getElementById(idTabela);
                var numeroLinhas = tabela.rows.length;
                var linha = tabela.insertRow(numeroLinhas);
                var celula1 = linha.insertCell(0);
                var celula2 = linha.insertCell(1);                   
                celula1.innerHTML = `${data}`
                celula2.innerHTML = `${provento}`
                 var tot = document.getElementById( qtdtotal);
                 total = celula2++
                tot.innerHTML = `${total}`
                
            },
            calcTot(){
               var tabela = document.getElementById(idTabela);
               var tot = document.getElementById( qtdtotal);
                var numeroLinhas = tabela.rows.length;
                var linha = tabela.insertRow(numeroLinhas);                
                var celula2 = linha.insertCell(1);                   
                total = celula2++
                tot.innerHTML = `${total}`
               
            }
  },
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
.p1-pv{
  width: 30%;
  
}
.p2-pv{
  width: 30%;
  display: flex;
  justify-content: center;
}
.p3-pv{
  width: 40%;
  display: flex;
  justify-content: center;
}
.prov-title{
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

.tb-pv{
 
  background-color: #0c3a2d;
  width: 60%;   
  text-align: center;
  padding: 0.4%;
  margin-top: 47%;
  margin-left: 15%;
  border-radius: 18px;
  margin-bottom: 3%;
  
}
.prov-btn{
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

.prov strong{
     color: #e2cd8a;
  font-size: 1.5em;
}
.tb-pv table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
.tb-pv th, td {
  color: #e2cd8a;
  padding: 15px;
}
.tb-pv th {
  text-align: center;
}
.tb-pv table {
  
  margin-left: 5%;
  border-spacing: 5px;
}
.pv-total{
   background-color: #0c3a2d;
  width: 40vh;
  height: 15vh;
  border-radius: 38px;
  padding: 2%;
  display: flex;
  justify-content: center;
  margin-top: 75%;
}
.pv {
    
    background-color:#048084;
    padding:64px;    
    border-radius: 29px;
    max-width:730px ;
    max-height: 430px;
    margin-top: 35%;
    
}

.pv  fieldset{
  
    border:0;
}
.pv  legend{
    margin-bottom: 40px;
}
.pv  legend h2{
    font-size: 24px;
}

.pv  .field-pv{
    flex:1;/*prencher o espaço que falta*/
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
}
.pv  .field-group-pv{
    display:flex;
    flex-direction:column;
    align-items: center;

}

.pv  input,.pv select{
    background-color: #C4C4C4;
    outline:none;/*tira a linha preta*/
    border: 0;
    padding:14px 20px;
    font-size:16px;
    border-radius: 8px;

}

.pv  label{
    font-size:1.5em;
    margin-bottom:4px;
    color: #e2cd8a;
}


.pv  button{
    width: 70%;
     height: 34px;
    background-color:#0C3A2D;
    border-radius:8px;
    color:#e2cd8a;
    font-weight: bold;
    font-size:16px;
    border:0;
    margin-left: 15%;
    
    
    
}


</style>
