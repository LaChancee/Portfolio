<template>

  <v-container fluid>
     <v-row class="text-center mt-13">
     <v-col class="mb-2">
        <h1 class="font-weight-bold mb-2" :class="[$vuetify.breakpoint.smAndUp ? 'display-3' : 'h1']">
          Mes <span style="color:#5000ca">compétences</span>
        </h1>
      </v-col>
    </v-row>

   
    <v-row class="ma-5 " >
    

      <v-col class="">
        
          <v-card rounded  class="card" elevation="15"   width="300" id="card1" @load="card" >
            <v-card-title style="font-size:20px" > <v-icon color="#5000ca"> mdi-desktop-mac </v-icon> <span style="font-weight:bold" color="#5000ca" class="ml-2"> Les outils</span>  </v-card-title>
              <v-card-text style="font-size:17px"> 
              - Visual Studio Code <br>
              - Git <br>
              - GLPI<br>
              - PGI <br>
              - Azur DevOps <br>
              </v-card-text>
              <router-link to='/production' style="text-decoration: none; color: inherit;">
                <v-btn color="#5000ca" rounded elevation="0" dark class="ma-3" href="/production">
                  <v-icon>mdi-folder-multiple</v-icon>
                </v-btn>
              </router-link>
          </v-card>
        
      </v-col>
      <v-col> <!-- Développement -->
        <v-card elevation="15" class="card" width="300" id="card2"  @load="card">
          <v-card-title  style="font-size:20px">  <v-icon color="#5000ca"> mdi-xml </v-icon> <span style="font-weight:bold" color="#5000ca" class="ml-2"> Les technologies</span> </v-card-title>
            <v-card-text style="font-size:17px"> 
              - HTML/ CSS<br>
              - PHP/ Code Igniter/ Laravel<br>
              - VueJs/ Vuetify<br>
              - MySQL<br>
              - Javascript

            
            </v-card-text>
            <router-link to='/production' style="text-decoration: none; color: inherit;">
              <v-btn color="#5000ca" rounded elevation="0" dark class="ma-3" href="/production">
                <v-icon>mdi-folder-multiple</v-icon>
              </v-btn>
            </router-link>
        </v-card>
      </v-col>
      <v-col> <!-- Développement -->
        <v-card elevation="15" id="card3" width="300"   @load="card">
          <v-card-title style="font-size:20px">  <v-icon color="#5000ca"> mdi-order-bool-descending-variant </v-icon> <span style="font-weight:bold" color="#5000ca" class="ml-2"> </span> Gestion de projet</v-card-title>
            <v-card-text style="font-size:17px" > 
              - Méthode agile Scrum <br>
              - Bonnes pratiques OWASP<br>
              - Azur DevOps <br>
              - Diagramme de Gantt <br> <br>               
            
            </v-card-text>
        
            <router-link to='/production' style="text-decoration: none; color: inherit;">
              <v-btn color="#5000ca" rounded elevation="0" dark class="ma-3" href="/production">
                <v-icon>mdi-folder-multiple</v-icon>
              </v-btn>
            </router-link>
        </v-card>
      </v-col>
      <v-col class="">
        <v-card id="card4" width="300" elevation="15"  @load="card">
          <v-card-title style="font-size:20px"><v-icon color="#5000ca"> mdi-head-cog-outline </v-icon> <span style="font-weight:bold" color="#5000ca" class="ml-2"> </span> Compétences</v-card-title>
          <v-card-text style="font-size:17px">
            - Modelisation de base de données
            - Création d'application web <br> <br> <br> <br>
            </v-card-text>
            <router-link to='/production' style="text-decoration: none; color: inherit;">
              <v-btn color="#5000ca" rounded elevation="0" dark class="ma-3" href="/production">
                <v-icon>mdi-folder-multiple</v-icon>
              </v-btn>
            </router-link>
        </v-card>
      </v-col>
    </v-row>
    <v-row disabled class="ma-12" justify="center">
      
      <v-btn disabled elevation="22" x-large color="#5000ca" dark style="width:200px" > Mon CV</v-btn>
    </v-row>
    
  </v-container>
</template>
<script>
import anime from 'animejs/lib/anime.es.js';
export default ({
  setup() {
    
  },
  methods:{
    card(){
      anime({
        targets: ['#card1','#card2','#card3','#card4'],
        translateY: 270,
        duration:'1200'
      });
    }
  }
})
</script>
