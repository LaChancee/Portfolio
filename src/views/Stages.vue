<template>
  <v-container fluid>
     <v-row class="text-center mt-13" fluid>
     <v-col class="mb-2">
        <h1 class="display-3 font-weight-bold mb-2">
          Mes <span style="color:#5000ca">Stages </span> 
        </h1>
      </v-col>
    </v-row>
    <v-row class="ma-12">
      <v-card width="500" height="500" elevation="15" shaped >
          <v-card-title  >
            <v-icon color="#5000ca">mdi-desktop-mac</v-icon> <span class="ml-2"> Mon stage de première année </span>
          </v-card-title >
          <v-card-text>
            <h3>Contexte :</h3>
            Netkoders est une société créer par Michael Lebreton qui est le gérant de cette dernière, 
            ainsi chaque année il proposent à des étudiants de les prendre en stage pour finaliser ou commencer un projet. 
            Cette société propose des prestations de service pour des créations de site ou application web ou autre en fonction des clients, 
            de plus, Netkoders propose aussi des formations à différent tarifs.
          </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>

export default ({
  setup() {
    
  },
})
</script>
