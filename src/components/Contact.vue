<v-dialog v-model="dialog" width="500">
     
          <!--_______________________ CONTACTEZ MOI    ____________________-->
        <template v-slot:activator="{ on, attrs }">
        <v-btn elevation="22" color="#5000ca"  x-large dark v-bind="attrs" v-on="on">
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
      </v-card>
    </v-dialog>