<template>
    <v-container fluid>
        <v-row class="text-center mt-13">
            <v-col class="mb-2">
                <h1 class="display-3 font-weight-bold mb-2">
                    Mes Ateliers de <span style="color:#5000ca">professionalisation</span>
                </h1>
            </v-col>
        </v-row>
        <v-row class="ma-12">
            <v-col class="ml-12">
                <v-card elevation="2" class="ma-12" max-width="300">
                <v-card-title style="font-size:20px" > <v-icon color="#5000ca"> mdi-desktop-mac </v-icon>
                 <span style="font-weight:bold" color="#5000ca" class="ml-2"> AP-1 HTML CSS</span>  </v-card-title>
                
                    <v-card-text style="font-size:17px"> 
                    
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
export default {
	name: "AP",
	data() {
	}
}
</script>