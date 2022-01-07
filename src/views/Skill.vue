<template>
  <v-container fluid>
     <v-row class="text-center mt-13">
     <v-col class="mb-2">
        <h1 class="display-3 font-weight-bold mb-2">
          Mes <span style="color:#5000ca">compétences</span>
        </h1>
      </v-col>
    </v-row>

    <v-row class="ma-12">
      <v-col class="ml-12">
        <v-card elevation="15" class="ma-12" max-width="300" height="250">
          <v-card-title style="font-size:20px" > <v-icon color="#5000ca"> mdi-desktop-mac </v-icon> <span style="font-weight:bold" color="#5000ca" class="ml-2"> Les outils</span>  </v-card-title>
            <v-card-text style="font-size:17px"> 
            - Visual Studio Code <br>
            - Git <br>
            - GLPI<br>
            - PGI <br>
            - Azur DevOps
            </v-card-text>
        
            <v-btn color="#5000ca" rounded elevation="0" dark class="ma-3" @click:>
              <v-icon>mdi-folder-multiple</v-icon>
            </v-btn>
        </v-card>
      </v-col>
      <v-col> <!-- Développement -->
        <v-card elevation="15" class="ma-12" max-width="300" height="250">
          <v-card-title style="font-size:20px">  <v-icon color="#5000ca"> mdi-xml </v-icon> <span style="font-weight:bold" color="#5000ca" class="ml-2"> Les technologies</span> </v-card-title>
            <v-card-text style="font-size:17px"> 
              - HTML/ CSS<br>
              - PHP/ Code Igniter/ Laravel<br>
              - VueJs/ Vuetify<br>
              - MySQL<br>
              - Javascript

            
            </v-card-text>
            <v-btn color="#5000ca" rounded elevation="0" dark class="ma-3" @click:>
              <v-icon>mdi-folder-multiple</v-icon>
            </v-btn>
        </v-card>
      </v-col>
      <v-col> <!-- Développement -->
        <v-card elevation="15" class="ma-12" max-width="300" height="250"  >
          <v-card-title style="font-size:20px">  <v-icon color="#5000ca"> mdi-order-bool-descending-variant </v-icon> <span style="font-weight:bold" color="#5000ca" class="ml-2"> </span> Gestion de projet</v-card-title>
            <v-card-text style="font-size:17px" > 
              - Méthode agile Scrum <br>
              - Bonnes pratiques OWASP<br>
              - Azur DevOps <br>
              - Diagramme de Gantt <br> <br>               
            
            </v-card-text>
        
            <v-btn color="#5000ca" rounded elevation="0" dark class="ma-3" @click:>
              <v-icon>mdi-folder-multiple</v-icon>
            </v-btn>
        </v-card>
      </v-col>
      <v-col class="ma-12">
        <v-card height="250" max-width="300" elevation="15">
          <v-card-title style="font-size:20px"><v-icon color="#5000ca"> mdi-head-cog-outline </v-icon> <span style="font-weight:bold" color="#5000ca" class="ml-2"> </span> Compétences</v-card-title>
          <v-card-text style="font-size:17px">
            - Modelisation de base de données
            - Création d'application web
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-12" justify="center">
      
      <v-btn elevation="22" x-large color="#5000ca" dark style="width:200px"> Mon CV</v-btn>
    </v-row>
  </v-container>
</template>
<script>

export default ({
  setup() {
    
  },
})
</script>
