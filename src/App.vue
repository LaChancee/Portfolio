<template>
  <v-app>
    <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    
    >
      <!-- BARRE NAVIGATION -->
      <v-btn
      color="#7E57C2"
      elevation="0"
      class="ma-3 white--text"
      dressed
      >
        Home
      </v-btn>

      <v-btn
      color="#7E57C2"
      elevation="0"
      text
      class="ma-3"
      >
        AP
      </v-btn>
      <v-btn
      color=#7E57C2
      elevation="0"
      text
      class="ma-2"
      >
        Compétences
    </v-btn>
    <v-btn
    color="#7E57C2"
    elevation="0"
    text
    class="ma-2"
    >
      A propos de moi 
    </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="1500"
      width="105%"
    >
      <v-container fluid style="height: 15000px;">
    <v-main>
      <HelloWorld/>
    </v-main>
      </v-container>
    </v-sheet>
  </v-card>
<!--   APP BARR-->
    
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    
  }),
};
</script>
