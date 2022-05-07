<template>
  <v-container fluid>  
    <v-row class="text-center mt-13">
     <v-col class="mb-2">
        <h1 class="hidden-md-and-up font-weight-bold mb-2 ">
          Hey ! Je suis <span style="color:#5000ca">Miharisoa Babef</span>  et bienvenue sur mon <span style="color:#5000ca">portfolio</span>
        </h1>
        <h1 class="hidden-sm-and-down display-3  font-weight-bold mb-2 ">
          Hey ! Je suis <span style="color:#5000ca">Miharisoa Babef</span>  et bienvenue sur mon <span style="color:#5000ca">portfolio</span>
        </h1>

        
      </v-col>
    </v-row>

    <v-row  align="center"
      justify="center">
      <v-col >
        <v-card elevation="0" class="ma-12 text-md-left text-justify " >
        <v-card-title style="font-size:30px" :class="[$vuetify.breakpoint.mdAndUp ? 'heading' : 'subtitle-1']" > <h1> Bienvenue !</h1> </v-card-title>
          <v-card-text style=" line-height:1.2em " :class="[$vuetify.breakpoint.mdAndUp ? 'title' : 'body-1']" class="text-justify" > Je suis étudiant au Lycée Victor-et-Hélène-Basch 
            (VHB) en BTS SIO depuis bientôt 2 ans.<br>
          <br>Je continue à développer et à travailler mes compétences tout au long de ma formation et en dehors de celle-ci. <br>

          <br>Vous pouvez consultez mes productions.
          </v-card-text>
      
          <router-link to='/production' style="text-decoration: none; color: inherit;">
            <v-btn color="#5000ca" elevation="22" fab small dark class="ma-3"  x-large href="/production">
              <v-icon>mdi-folder-multiple</v-icon>
            </v-btn>
          </router-link>
          <v-btn  color="#5000ca" elevation="22" fab small dark class="ma-3"   @click="isShow = !isShow" x-large>
            <v-icon>mdi-email</v-icon>
          </v-btn>
        </v-card>
      </v-col>
     
      <v-col class="ml-26 mb-5 hidden-md-and-down">
        <v-img  max-height="459" max-width="500" src="../assets/salut.png" id="pouce" @load="go" ></v-img>
      </v-col>
    </v-row>
   <v-row>
     <v-scroll-x-transition mode="in" hide-on-leave="true">
       <Contact msg="Contactez-moi" v-show="isShow" transition="fade-transition"/>
      </v-scroll-x-transition>
     
   </v-row>
  
  </v-container>
  
</template>

<script>
  import anime from 'animejs/lib/anime.es.js';
  import Contact from '@/components/Contact.vue'


 

  
  export default {
    name: 'BaseVue',
    
    data: () => ({
      isShow:false,
      
    }),
    methods:{
      go(){
        anime({
          targets: '#pouce',
          translateX: [250, 250],
          scale: 1,
          rotate: '0.05turn',
          direction:'alternate',
          
          duration:'1200'

        })},
         showDetails(){
           this.showModal = true;
       },

    },
    computed: {
    fontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '5px';
        default: return '30px';
      }
    }
  },
   components: {
    Contact
  }

  };
</script>

<style scoped>
:root {
--font-size: 8px;
@media screen and (min-width: 1444px) {
--font-size: 16px;
}}
</style>