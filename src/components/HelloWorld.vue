<template>
  <v-container fluid>  
    <v-row class="text-center mt-13">
     <v-col class="mb-2">
        <h1 class="display-3 font-weight-bold mb-2">
          Hey ! Je suis <span style="color:#5000ca">Miharisoa</span>  et bienvenu sur mon <span style="color:#5000ca">portfolio</span>
        </h1>
      </v-col>
    </v-row>

    <v-row class="ma-12 ">
      <v-col class="ml-16">
        <v-card elevation="0" class="ma-12 text-md-left " max-width="800">
        <v-card-title style="font-size:30px"> <h1> Bienvenu !</h1> </v-card-title>
          <v-card-text style="font-size:28px; line-height:1.2em" > Je suis étudiant au Lycée Victor-et-Hélène-Basch (VHB) en BTS SIO depuis bientôt 2 ans.<br>
          <br>Je continue à développer et à travailler mes compétences tout au long de ma formation et en dehors de celle-ci. <br>

          <br>Vous pouvez consultez mes productions.
          </v-card-text>
      
          <router-link to='/production' style="text-decoration: none; color: inherit;">
            <v-btn color="#5000ca" elevation="22" fab small dark class="ma-3"  x-large href="/production">
              <v-icon>mdi-folder-multiple</v-icon>
            </v-btn>
          </router-link>
        </v-card>
      </v-col>
     
      <v-col class="ml-26">
        <v-img  max-height="459" max-width="500" src="../assets/coucou.png" id="pouce" @load="go" ></v-img>
      </v-col>
    </v-row>
    <v-row class="ma-12" justify="center">
      <v-dialog v-model="dialog" width="500">
     
          <!--_______________________ CONTACTEZ MOI    ____________________-->
        <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn elevation="22" color="#5000ca"  x-large dark v-bind="attrs" v-on="on" width="400" height="60">
         Contactez-moi
        </v-btn>
      </template>

     <v-card>
        <v-card-title>
          <span class="text-h5">Contactez-moi !</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Email*" required ></v-text-field>
              </v-col>                         
              <v-col cols="12">
                <v-text-field label="Objet*" required ></v-text-field>
                <v-textarea label="Votre message*" type="textarea" required >
                  <template v-slot:label>
                    <div>
                      Message
                    </div>
                  </template>
                </v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*Indique les champs requis</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn plain color="red" dark @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="#5000ca" dark @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>-->
    </v-dialog>
    </v-row> 
  
  </v-container>
  
</template>

<script>
  import anime from 'animejs/lib/anime.es.js';
  
  export default {
    name: 'BaseVue',
    
    data: () => ({
      
    }),
    methods:{
      go(){
        anime({
          targets: '#pouce',
          translateX: [250, 250],
          scale: 1,
          rotate: '0.05turn',
          direction:'alternate',
          loop: true,
          duration:'1200'

        })},
      submit(){}
    }

  };
</script>
