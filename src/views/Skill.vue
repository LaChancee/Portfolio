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
        <v-card elevation="2" class="ma-12" max-width="300">
          <v-card-title style="font-size:20px" > <v-icon color="#5000ca"> mdi-desktop-mac </v-icon> <span style="font-weight:bold" color="#5000ca" class="ml-2"> Les outils</span>  </v-card-title>
            <v-card-text style="font-size:17px"> 
            - Visual Studio Code <br>
            - Git <br>
            - GLPI<br>
            - PGI <br>
            </v-card-text>
        
            <v-btn color="#5000ca" rounded elevation="0" dark class="ma-3" @click:>
              <v-icon>mdi-folder-multiple</v-icon>
            </v-btn>
        </v-card>
      </v-col>
      <v-col> <!-- Développement -->
        <v-card elevation="2" class="ma-12" max-width="300">
          <v-card-title style="font-size:20px">  <v-icon color="#5000ca"> mdi-xml </v-icon> </v-card-title>
            <v-card-text style="font-size:17px"> Etudiant au lycée VHB en BTS SIO depuis bientôt 2 ans !<br>

            <br>Vous pouvez consultez mes Compétences
            </v-card-text>
        
            <v-btn color="#5000ca" rounded elevation="0" dark class="ma-3" @click:>
              <v-icon>mdi-folder-multiple</v-icon>
            </v-btn>
        </v-card>
      </v-col>
      <v-col> <!-- Développement -->
        <v-card elevation="2" class="ma-12" max-width="300">
          <v-card-title style="font-size:20px">  <v-icon color="#5000ca"> mdi-console </v-icon> </v-card-title>
            <v-card-text style="font-size:17px"> Je suis étudiant au lycée VHB en BTS SIO depuis bientôt 2 ans<br>

            <br>Vous pouvez consultez mes productions
            </v-card-text>
        
            <v-btn color="#5000ca" rounded elevation="0" dark class="ma-3" @click:>
              <v-icon>mdi-folder-multiple</v-icon>
            </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default ({
  setup() {
    
  },
})
</script>
