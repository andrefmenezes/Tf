 <template>
 

<footer class=" fofo bg-gradiente-footer">
      
      <p class="copy">
      Tosdelga Finances &copy;-organizando suas finanças.
      </p>

   </footer>

 </template>

 <script>
 export default {
   name: 'footer',
   props: {
    
   }
 }
</script>


 <style >


a{
     text-decoration: none;
 }
 
 .fofo{
    width: 100%;
     float: left;
     padding: 3% 4%;
     text-align: center;
     height: 3%;
     align-items: center;
 }
 .bg-gradiente-footer{
        background: linear-gradient(to right, #0C3A2D,#63CAC6);
 }
  
     .copy{
         margin-top: 0;
         align-items: center;
        color:white;
        font-size: 1em;
        justify-content: center;
      
     }
     
     /*mobile*/

   
     @media screen and (min-width: 768px){
      
  

     }
     @media screen and (min-width: 960px){
        
       }
       @media screen and (min-width: 1280px){
    
       }
 </style>