<template>
<div>
  <div id="content">
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
  
    <v-app-bar-nav-icon style='z-index:20001;' class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="hidden-sm-and-up" ><a href="/" style="text-decoration: none; color: #5000ca;">Miharisoa</a>.fr </v-app-bar-title>
    
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
        style='z-index:99999; '
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
            <v-fab-transition>
              <v-btn
              color="#5000ca"
              fab
              dark
              x-large
              fixed
              bottom
              right
              @click="top"
              elevation="15"
              v-scroll="onScroll"
              v-show="fab"
              >
                <v-icon>mdi-chevron-up</v-icon>
              </v-btn>
            </v-fab-transition>
              
          </v-container>
      </v-main>
      
       
     <v-footer  inset padless bottom color="white"  width="auto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
          <path fill="#5000ca" fill-opacity="1" id="Purple" d="M0,256L40,218.7C80,181,160,107,240,90.7C320,75,400,117,480,154.7C560,192,640,224,720,208C800,192,880,128,960,133.3C1040,139,1120,213,1200,245.3C1280,277,1360,267,1400,261.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </v-footer>
  </v-card> 
 
  </v-app>
  </div>
  <v-overlay
      :opacity="1"
      :value="overlay"
      color="black"
    >
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <rect x="17.5" y="30" width="15" height="40" fill="#5000ca">
          <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
          <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="64;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
        </rect>
        <rect x="42.5" y="30" width="15" height="40" fill="#6900ff">
          <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
          <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
        </rect>
        <rect x="67.5" y="30" width="15" height="40" fill="#b47fff">
          <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
          <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
        </rect>
        <!-- [ldio] generated by https://loading.io/ -->
      </svg>
    </v-overlay>
</div>

  
</template>
<!-- JEU PopSauce image flou de moins en moins à faire et dutch voir un skyjo  -->
<script>


export default {
  name: 'App',

  data: () => ({
      drawer: false,
      group: null,
      svg: true,
      zIndex: 0,
      fab: false,
      overlay: true,

    }),
  methods: {
    top() {
      window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    },
    
    // function that hide the button when the user scroll down
      onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    
    
  },
  mounted() {
      // hide the overlay when everything has loaded
      // you could choose some other event, e.g. if you're loading
      // data asynchronously, you could wait until that process returns
      this.overlay = false
    }, 

    watch: {
      group () {
        this.drawer = false
      },
    }, 
};
</script>
<style scoped>


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