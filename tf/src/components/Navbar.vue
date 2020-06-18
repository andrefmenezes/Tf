
<template>
  <div class="navbar">
    <header class="cabecalho ">
        <a class="logo" href="#"><img src="../assets/fotos/TF-estrela2.jpg" > </a>
         
  
  <nav class="menu">     
      
      <div class="nav">
     
      <ul>       
         <li><router-link to="/portifolio"> Portfólio </router-link></li> 
          <li><router-link to="/rv"> Renda Variável </router-link></li> 
          <li><router-link to="/prov"> Proventos </router-link></li> 
         <li><router-link to="/"> Renda Fixa </router-link></li>  
         <li><router-link to="/"> Contato </router-link></li> 
         <li><router-link to="/"> Sair </router-link></li> 
      </ul>
  
    </div>
     
  </nav>
</header> 
  </div>
</template>
<script>

export default {
  name: 'navbar',
   components: {
     
  }
}
</script>


<style >

.navbar{
    position: absolute;
    width: 100% !important;
    top: 0%;    
    background-color: white;
  
}
*{        
    margin: 0;
    padding: 0;
    font-size: 100%;
    border: none;
    outline: none;
    font-weight: 300;
    box-sizing: border-box;
    font-family: Arial,sans-serif;
}

ul{
    list-style: none;
}
a{
    text-decoration: none;
}
img{
    max-width: 100%;
}

.bg-gradiente{
    background: linear-gradient(to right, #0C3A2D,#63CAC6);
}

.logo{
    height: 20px;
    width: 20%;
    float: left;
  margin-top: 0.8%;
    font-size: 0;
}

.btn-close{
    font-size: 1.5em;
    color: #fff;
    float: right;
    cursor: pointer;
    margin: 2% 3% 0 0;
  
}

.menu{
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.9);
    top: 0;
    left: 0;

}

.menu ul{
    width: 100%;
    float: left; 
    text-align: center;
    }
.menu li{
    padding: 1%;
color: #000000;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .menu li a{
        font-size: 2em;
        color: white;
        padding: 1.5% 3%S;
    }
     .menu li a:hover{
border: 1px solid #0C3A2D;
     }


.insta{
    margin-right: 2%;
}
.nav{
    
      display: flex;
    
}
    /*mobile*/

    @media screen and (min-width: 360px){

       
        
    }
     @media screen and (min-width: 736px){
      
      .logo{
                     
            margin-top: 0;
           width: 214px; 
           height: 100px;          
            /*background: url(../assets/fotos/nine-sites.png) center center/214px no-repeat;*/
                 
       
      }
     
    }

      @media screen and (min-width: 1280px){
       .menuMobile{
           display: none;
       }
       .btn-close{
           display: none;
       }
        .menu{
            width: auto;
            height: 56px;
            line-height: 56px;            
            background-color:white;
            display: block !important;
            position: static;
        }
        
        .menu li{
            padding: 2%;
            float: left;
        }
        .menu li a{
           font-size: 1.5em;
           padding: 15px;
            color: #130400;
        }
        .menu li a:hover{
            border: none;
            color: #42CCA5;
        }
      }
</style>
