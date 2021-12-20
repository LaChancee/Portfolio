<template>
  <v-app >
    <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      class="App-bar"
    >
    
      <!-- BARRE NAVIGATION -->
      <v-btn color="#5000ca" elevation="0" class="ma-3 white--text"  dressed>
       <router-link to='/' style="text-decoration: none; color: inherit;">Home</router-link> 
      </v-btn>

      <v-btn
      color="#5000ca"
      elevation="0"
      text
      class="ma-3"
      >
       <router-link to='AP' style="text-decoration: none; color: inherit;" >AP</router-link> 
      </v-btn>
    <v-btn color=#5000ca elevation="0" text class="ma-2">
      <router-link to='/Competences' style="text-decoration: none; color: inherit;">Compétences</router-link> 
    </v-btn>

    <v-btn color="#5000ca" elevation="0" text class="ma-2">
      <router-link to='AboutMe' style="text-decoration: none; color: inherit;">A propos de moi</router-link> 
    </v-btn>      
    </v-app-bar>

    <v-sheet id="scrolling-techniques-7" class="overflow-y-auto" max-height="1200" width="105%">    
<!--   APP BARR-->
      <v-container fluid style="height: 12000px;">
        <v-main>
          <router-view/>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="ml-n7">
            <path fill="#5000ca" fill-opacity="1" id="Purple" d="M0,256L40,218.7C80,181,160,107,240,90.7C320,75,400,117,480,154.7C560,192,640,224,720,208C800,192,880,128,960,133.3C1040,139,1120,213,1200,245.3C1280,277,1360,267,1400,261.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
          <v-row class="ma-12" width="100%">
            <v-card>
              <v-title >
                Test
              </v-title>
            </v-card>
          </v-row>
        </v-main>
      </v-container>
    <div width="100%">
      tets
    </div>
    </v-sheet>
  </v-card> 
</v-app>
</template>
<!-- JEU PopSauce image flou de moins en moins à faire et dutch voir un skyjo  -->
<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    
  }),
};
</script>
<style scoped>
router-link a{
    text-decoration: none; color: inherit;
}
body{
  background-color: #5000ca;
}

</style>