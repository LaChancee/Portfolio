<template>
   <v-app fluid flex  >
    <v-card class=" overflow-y-hidden" style="height:100%"  fluid padless> 
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      class="App-bar"     
      app
      fluid
    >
  
    <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="hidden-sm-and-up"> <span style="color:#5000ca">Miharisoa</span>.fr </v-app-bar-title>
    
      <!-- BARRE NAVIGATION -->
      <div class="hidden-xs-only">
        <router-link to='/' style="text-decoration: none; color: inherit;">
          <v-btn color="#5000ca" elevation="0" class="ma-3 white--text"  dressed>
            Accueil
          </v-btn>
        </router-link> 
        
        <router-link to='production' style="text-decoration: none; color: inherit;" >
          <v-btn color="#5000ca" elevation="0"  text class="ma-3">Productions</v-btn>
        </router-link>
        <router-link to='competences' style="text-decoration: none; color: inherit;">
          <v-btn color=#5000ca elevation="0" text class="ma-2">
            Compétences
          </v-btn>
        </router-link> 
      <router-link to='stages' style="text-decoration: none; color: inherit;">
        <v-btn color="#5000ca" elevation="0" text class="ma-2">
          
          Stages
        </v-btn>
        </router-link>
      </div>


      <!-- BARRE NAVIGATION MOBILE -->
        <v-navigation-drawer
        v-model="drawer"
        app
        clipped
        absolute
        fixed
        floating
        id="navDrawer"
        >
          <v-list nav dense >
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
            <router-link to='/' style="text-decoration: none; color: inherit;">
              <v-list-item >
                <v-list-item-content color="#5000ca">
                      Accueil
                </v-list-item-content>
                </v-list-item>
              </router-link>  

              <router-link to='production' style="text-decoration: none; color: inherit;" >
                <v-list-item>
                    Productions
                </v-list-item>
              </router-link>
              <router-link to='competences' style="text-decoration: none; color: inherit;">
                <v-list-item>                  
                    Compétences
                </v-list-item>
              </router-link>

              <router-link to='stages' style="text-decoration: none; color: inherit;">
                <v-list-item >
                    Stages
                </v-list-item>
              </router-link>
            </v-list-item-group>
          </v-list>
      </v-navigation-drawer>
    
    
     
    </v-app-bar>

        
<!--   APP BARR-->
      <v-main  >
        <v-container fluid fill-height  id="Test">
            <router-view></router-view>
          </v-container>
      </v-main>
      
       
     <v-footer  inset padless bottom color="white"  width="auto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
          <path fill="#5000ca" fill-opacity="1" id="Purple" d="M0,256L40,218.7C80,181,160,107,240,90.7C320,75,400,117,480,154.7C560,192,640,224,720,208C800,192,880,128,960,133.3C1040,139,1120,213,1200,245.3C1280,277,1360,267,1400,261.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </v-footer>
  </v-card> 
 
</v-app>
</template>
<!-- JEU PopSauce image flou de moins en moins à faire et dutch voir un skyjo  -->
<script>


export default {
  name: 'App',

  data: () => ({
      drawer: false,
      group: null,
      svg: true
    }),

    watch: {
      group () {
        this.drawer = false
      },
    }, 
};
</script>
<style scoped>


.v-footer--absolute {
  width: auto !important;
}
  html {
    height: 100%;
  }

  router-link a{
      text-decoration: none; color: inherit;
  }
  #scrolling-techniques-7{
    background-color: white;
  }
  #Test{
    background-color: white;
  }

</style>