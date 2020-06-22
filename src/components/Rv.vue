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
            <table id="tbl-rv"  border="1">
    <tr>
        <th>%</th>
        <th>Ativos</th>
        <th>Quantidade</th>
        <th>Preço Medio</th>
        <th>Preço Atual</th>
        <th>Custo Total </th>
        <th>Valor Total</th>
        <th>Variação</th>
       <th>         </th>
    </tr>
   
     
   
</table>



      </div>

  </div>
    <div class="p2-rv">
         <div class="f-rv" action="">          

            <fieldset>           
        <div class="field-group-rv">

                <div class="field-rv">
                <label for="select">Tipo da operação:</label>
                         <select name="select">
  <option value="valor1" selected>Novo</option> 
  <option value="valor2" >Editar</option>
  <option value="valor3">Apagar</option>
</select>

            </div>
            
            <div class="field-rv">
              <label for="ativo">Ativo:</label>
              <input type="text" name="ativo" id="ativo">
            </div>
            <div class="field-rv">
               <label for="preco">Preço:</label>
                <input type="number" name="preco" id="preco">

            </div>
             <div class="field-rv">
               <label for="qtd">Quantidade:</label>
                <input type="number" name="qtd" id="qtd">

            </div>
             <div class="field-rv">
               <label for="data">Data:</label>
                <input type="date" name="data">

            </div>
            
        </div>
            </fieldset>
            
            <button v-on:click="adicionaLinha('tbl-rv')">
                Cadastrar operação
            </button>
        </div>
    
  </div>
  </div>
</div>
</template>

<script>
import navbar from './Navbar.vue'
export default {
  name: "Rv",
   components:{
       navbar
    
  }, methods:{
adicionaLinha(idTabela) {
            var at = document.getElementById('ativo');            
            var ativo = at.value;           
             var qt = document.getElementById('qtd');
             var qtd =qt.value;
             var pr = document.getElementById('preco');
             var preco =pr.value;
             var pa = 10;
                var tabela = document.getElementById(idTabela);
                var numeroLinhas = tabela.rows.length;
                var linha = tabela.insertRow(numeroLinhas);
                var celula1 = linha.insertCell(0);
                var celula2 = linha.insertCell(1); 
                 var celula3 = linha.insertCell(2);        
                 var celula4 = linha.insertCell(3); 
                 var celula5 = linha.insertCell(4);
                  var celula6 = linha.insertCell(5);
                   var celula7 = linha.insertCell(6);
                    var celula8 = linha.insertCell(7);
                    var celula9 = linha.insertCell(8);   
                    var ct=  qtd * preco
                    var va =   qtd * pa
                    var porc = (preco/va)*100   
                    var vari = va - ct               
                celula1.innerHTML = `${porc}%`
                celula2.innerHTML = `${ativo}`
                celula3.innerHTML=`${qtd}`
                 celula4.innerHTML=`${preco}`
                  celula5.innerHTML=`${pa}`
                   celula6.innerHTML=`${ct}`
                celula7.innerHTML=`${va}`
                celula8.innerHTML=`${vari}`
                 celula9.innerHTML =  '<button v-on:click="removeLinha(this)">Remover</button>';
                
            },
            removeLinha(linha) {
              var i=linha.parentNode.parentNode.rowIndex;
              document.getElementById('tbl-rv').deleteRow(i);
            }            
           
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.rv {
  background-color: #42cca5;
  min-height: 100vh;
  display: flex;
 
  
}

.p2-rv{
  width: 40%;
  display: flex;
  justify-content: center;
}
.rv-title{
 
  background-color: #0c3a2d;
  width: 30vh;
  height: 6.5vh;
  border-radius: 49px;
  text-align: center;
  padding: 0.4%;
  margin-top: 17%;
  margin-left: 5%;
}
.tb-rv{
 
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

.rv-btn{
   
  background-color: #048084;
  width: 30vh;
  height: 6.5vh;
  border-radius: 49px;
  text-align: center;
  padding: 0.4%;
  margin-top: 30%;
  margin-left: 70%;
}

.rv strong{
     color: #e2cd8a;
  font-size: 1.5em;
}
.tb-rv table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
.tb-rv th, td {
  color: #e2cd8a;
  padding: 15px;
}
.tb-rv th {
  text-align: center;
}
.tb-rv table {
  border-spacing: 5px;
}


.f-rv  {
    
    background-color:#048084;
    padding:64px;    
    border-radius: 29px;
    max-width:730px ;
    max-height: 600px;
    margin-top: 40%;
    margin-bottom: 5%;

    
}

.f-rv   fieldset{
  
    border:0;
}
.f-rv   legend{
    margin-bottom: 40px;
}
.f-rv   legend h2{
    font-size: 24px;
}

.f-rv   .field-rv{
    flex:1;/*prencher o espaço que falta*/
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
}
.f-rv  .field-group-rv{
    display:flex;
    flex-direction:column;
    align-items: center;

}

.f-rv   input,form select{
    background-color: #C4C4C4;
    outline:none;/*tira a linha preta*/
    border: 0;
    padding:14px 20px;
    font-size:16px;
    border-radius: 8px;

}

.f-rv  label{
    font-size:1.5em;
    margin-bottom:4px;
    color: #e2cd8a;
}


.f-rv  button{
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
