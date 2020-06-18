<template>
  <div class="hello">
      <div id="page-op">

        <form action="">

           

            <fieldset>
           
        <div class="field-group">

            <div class="field">             
           <a class="logo" href="#"><img src="../assets/fotos/TF-estrela.jpg" > </a>
            </div>
            <div class="field">
              <label for="ativo">Ativo:</label>
              <input type="text" name="ativo">
            </div>
            <div class="field">
                <label for="preco">Preço:</label>
                <input type="number" name="preco">

            </div>
             <div class="field">
                <label for="qtd">Quantidade:</label>
                <input type="number" name="qtd">

            </div>
             <div class="field">
                <label for="data">Data:</label>
                <input type="date" name="data">

            </div>
        </div>
   




            </fieldset>
            
            <button type="submit">
                Concluir
            </button>
        </form>




    </div>







  </div>
</template>

<script>
export default {
  name: 'Operacao',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.hello{
width: 100%;
min-height: 100vh;
padding-top: 5%;
padding-bottom: 10%;
background: #058863;
display: flex;
align-items: center;
justify-content: center;
}

div#page-op{    
    display: flex;
    width:30%;
  
}

form{
    
    background-color:white;
    padding:64px;    
    border-radius: 29px;
    max-width:730px ;
    
}

form fieldset{
  
    border:0;
}
form legend{
    margin-bottom: 40px;
}
form legend h2{
    font-size: 24px;
}

form .field{
    flex:1;/*prencher o espaço que falta*/
    display:flex;
    flex-direction:column;
    margin-bottom:24px;
}
form .field-group{
    display:flex;
    flex-direction:column;
    align-items: center;

}

form input,form select{
    background-color: #C4C4C4;
    outline:none;/*tira a linha preta*/
    border: 0;
    padding:16px 24px;
    font-size:16px;
    border-radius: 8px;

}

form label{
    font-size:14px;
    margin-bottom:8px;
}


form button{
    width: 60%;
     height: 34px;
    background-color:#0C3A2D;
    border-radius:8px;
    color:white;
    font-weight: bold;
    font-size:16px;
    border:0;
    margin-left: 20%;
    
    
    
}



</style>
