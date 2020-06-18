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
            <table  border="1">
    <tr>
        <th>%</th>
        <th>Ativos</th>
        <th>Quantidade</th>
        <th>Preço Medio</th>
        <th>Preço Atual</th>
        <th>Custo Total </th>
        <th>Valor Total</th>
        <th>Variação</th>
 
    </tr>
    <tr>
        <td>10%</td>
        <td>ITSA4</td>
        <td>10</td>
        <td>10</td>
        <td>12</td>
        <td>100</td>
        <td>120</td>
        <td>+20</td>
    </tr>
     <tr>
        <td>10%</td>
        <td>ITSA4</td>
        <td>10</td>
        <td>10</td>
        <td>12</td>
        <td>100</td>
        <td>120</td>
        <td>+20</td>
    </tr>
     <tr>
        <td>10%</td>
        <td>ITSA4</td>
        <td>10</td>
        <td>10</td>
        <td>12</td>
        <td>100</td>
        <td>120</td>
        <td>+20</td>
    </tr>
     <tr>
        <td>10%</td>
        <td>ITSA4</td>
        <td>10</td>
        <td>10</td>
        <td>12</td>
        <td>100</td>
        <td>120</td>
        <td>+20</td>
    </tr>
     <tr>
        <td>10%</td>
        <td>ITSA4</td>
        <td>10</td>
        <td>10</td>
        <td>12</td>
        <td>100</td>
        <td>120</td>
        <td>+20</td>
    </tr>
     <tr>
        <td>10%</td>
        <td>ITSA4</td>
        <td>10</td>
        <td>10</td>
        <td>12</td>
        <td>100</td>
        <td>120</td>
        <td>+20</td>
    </tr> <tr>
        <td>10%</td>
        <td>ITSA4</td>
        <td>10</td>
        <td>10</td>
        <td>12</td>
        <td>100</td>
        <td>120</td>
        <td>+20</td>
    </tr> <tr>
        <td>10%</td>
        <td>ITSA4</td>
        <td>10</td>
        <td>10</td>
        <td>12</td>
        <td>100</td>
        <td>120</td>
        <td>+20</td>
    </tr> <tr>
        <td>10%</td>
        <td>ITSA4</td>
        <td>10</td>
        <td>10</td>
        <td>12</td>
        <td>100</td>
        <td>120</td>
        <td>+20</td>
    </tr>
    
   
</table>



      </div>

  </div>
    <div class="p2-rv">
         <form class="f-rv" action="">          

            <fieldset>           
        <div class="field-group-rv">
            
            <div class="field-rv">
              <label for="ativo">Ativo:</label>
              <input type="text" name="ativo">
            </div>
            <div class="field-rv">
               <label for="preco">Preço:</label>
                <input type="number" name="preco">

            </div>
             <div class="field-rv">
               <label for="qtd">Quantidade:</label>
                <input type="number" name="qtd">

            </div>
             <div class="field-rv">
               <label for="data">Data:</label>
                <input type="date" name="data">

            </div>
            
        </div>
            </fieldset>
            
            <button type="submit">
                Cadastrar operação
            </button>
        </form>
    
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
  min-width: 50%;
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
    max-height: 500px;
    margin-top: 50%;

    
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
