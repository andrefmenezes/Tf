<template>
<div>
 <div>
 <navbar />
  </div>
 
  <div class="port">
    <div class="port-grafico">
      <div class="port-title">
        <strong>Portifólio:</strong>
      </div>
<div class="canvas-wrapper">
    <canvas id="canvas3"></canvas>
</div>

    </div>
    <div class="port-group">
      <div class="grid-celula">
        <div class="port-sub">
          <strong>Patrimônio:</strong>
        </div>
      </div>
      <div class="grid-celula">
        <div class="port-sub">
          <strong>Custo Total:</strong>
        </div>
      </div>
      <div class="grid-celula">
        <div class="port-sub">
          <strong>Variação:</strong>
        </div>
      </div>
      <div class="grid-celula">
        <div class="port-sub">
          <strong>Rentabilidade:</strong>
        </div>
      </div>
    </div>
  </div>
   
  </div>
</template>

<script>
import navbar from './Navbar.vue'
export default {
  name: "Portifolio",
   components:{
       navbar
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.port {
  background-color: #42cca5;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.port-grafico {
  width: 50%;
}
.port-group {
  width: 50%;
  padding: 10% 0 10% 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}
.port-sub {
  display: flex;
  justify-content: center;

  background-color: #0c3a2d;
  width: 30vh;
  height: 15vh;
  border-radius: 38px;
  padding: 2%;
}

.port-title {
  position: absolute;
  background-color: #0c3a2d;
  width: 30vh;
  height: 6.5vh;
  border-radius: 49px;
  text-align: center;
  padding: 0.4%;
  margin-top: 9%;
  margin-left: 10%;
}
.port strong {
  color: #e2cd8a;
  font-size: 1.5em;
}

.grid-celula{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
