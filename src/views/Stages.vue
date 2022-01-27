<template>
  <v-container fluid>
     <v-row class="text-center mt-13" fluid>
     <v-col class="mb-2">
        <h1 class="display-3 font-weight-bold mb-2">
          Mes <span style="color:#5000ca">Stages </span> 
        </h1>
      </v-col>
    </v-row>
    <v-row>
      
        <v-card class="ma-4 " elevation="0" style="font-size:20px;" width="1500">
          <h2><span style="color:#5000ca" class="font-weight-bold">Contexte :</span></h2>
            <p class="flex justify-center">Netkoders est une société créer par Michael Lebreton qui est le gérant de cette dernière, 
            ainsi chaque année il proposent à des étudiants de les prendre en stage pour finaliser ou commencer un projet. 
            Cette société propose des prestations de service pour des créations de site ou application web ou autre en fonction des clients, 
            de plus, Netkoders propose aussi des formations à différent tarifs. <br> 
            <br></p>
        </v-card>
          
        
    
      
    </v-row>
    <v-row class="ma-12">
      <v-col>
        <v-card width="700" height="640" elevation="15" shaped class="text-size"  >
          <v-card-title  >
            <v-icon color="#5000ca">mdi-desktop-mac</v-icon> <span class="ml-2"> Mon stage de première année </span>
          </v-card-title >
          <v-card-text>
            <h3>25 mai au 6 juillet</h3>
            <p>Lors de cette année, j'ai effectué mon stage du 25 main au 6 juillet en distanciel en raison des conditions sanitaires.
            J'étais accompagné d'autres stagiaires afin de travailler sur un projet commun, <span style="color:#5000ca" class="font-weight-bold">Reportify</span>.</p>
             
            <h3>Projet :</h3>
            <p>Comme enoncé ci-dessus Reportify est une application permettant de créer des rappoprts, le but était donc de créer cette application de zéro tout en 
              apprenant à utiliser les technologies notamment JS, car l'application est en Vanilla JS avec de l'HTML/CSS.
              Nous avons été formé sur beaucoup de notion de JS par Michaël, mais aussi sur des notions plus professionelles, en effet, 
              nous avons utilisé des méthodes agiles. <br>
              Chaque semaine nous avions un sprint dans lequel nous devions réaliser une tâche.
              Deplus chaque matin une réunion était réaliser afin d'expliquer aux autres ce que nous avons fait la veille et de determiner ce qu'il nous reste à faire
              pour les prochains jours. Puis en fin de semaine, nous réalisions une backlog, nous faisons un point sur où nous sommes rendu, les erreurs que nous avons eu
              puis les autres pouvaient nous aider apporter des conseils ou des remarques </p>
              <h3>Compétences visées :</h3>
              <p>B1.2 Répondre aux incidents et aux demandes d’assistance et d’évolution <br>
                B1.4 Travailler en mode projet <br> 
                B1.6 Organiser son développement professionnel <br>
                B2.1 Concevoir et développer une solution applicative <br>
                B2.3 Gérer les données 
              </p>
          </v-card-text>
          <v-card-action >
                      <v-btn color="#5000ca" rounded elevation="0" dark class="ma-3" href="https://drive.google.com/drive/u/0/folders/1So0uJoJm3CmMpw28vQ56poXm5mDlFF53">
                          Productions
                      </v-btn>
          </v-card-action>
        </v-card>
      </v-col>
      <v-col>
        <v-card width="700" height="750" elevation="0" shaped class="mr-6">
          <v-card-title  >
            <v-icon color="#5000ca">mdi-desktop-mac</v-icon> <span class="ml-2"> Mon stage de deuxième année </span>
          </v-card-title >
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
