<template>
  <v-container fluid>  
    <v-row class="text-center mt-13">
     <v-col class="mb-2">
        <h1 class="display-3 font-weight-bold mb-2">
          Hey ! Je suis <span style="color:#5000ca">Miharisoa</span>  et bienvenu sur mon <span style="color:#5000ca">portfolio</span>
        </h1>
      </v-col>
    </v-row>

    <v-row class="ma-12 ">
      <v-col>
        <v-card elevation="0" class="ma-12" max-width="500">
        <v-card-title style="font-size:20px"> <h1> Bienvenu !</h1> </v-card-title>
          <v-card-text style="font-size:17px"> Etudiant au lycée VHB en BTS SIO depuis bientôt 2 ans !<br>

          <br>Vous pouvez consultez mes Compétences
          </v-card-text>
      
          <v-btn color="#CFA0E9" fab small dark class="ma-3" @click:>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </v-card>
      </v-col>
     
      <v-col class="ml-26">
        <v-img  max-height="380" max-width="500" src="../assets/pouce.png" id="pouce" @load="go" ></v-img>
      </v-col>
    </v-row>
    
  
  </v-container>
  
</template>

<script>
  import anime from 'animejs/lib/anime.es.js';
  
  export default {
    name: 'BaseVue',
    
    data: () => ({
      
    }),
    methods:{
      go(){
        anime({
          targets: '#pouce',
          translateX: 250,
          duration: 4000,
        })}
    }

  };
</script>
