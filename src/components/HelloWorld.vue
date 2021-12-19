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
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="ml-n7">
      <path fill="#5000ca" fill-opacity="1" d="M0,256L40,218.7C80,181,160,107,240,90.7C320,75,400,117,480,154.7C560,192,640,224,720,208C800,192,880,128,960,133.3C1040,139,1120,213,1200,245.3C1280,277,1360,267,1400,261.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
    </svg>

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
