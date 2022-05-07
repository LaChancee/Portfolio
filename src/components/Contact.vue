<template>
    <v-container fluid>
        
      <div class="block ma-12" >
          <h1 :class="[$vuetify.breakpoint.mdAndUp ? 'heading' : 'h3']">Contactez-moi !</h1>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            method="POST"
            action="https://formsubmit.co/miharisoababef@gmail.com"
            >
            <v-text-field
            name="name"
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Nom"
            required
            ></v-text-field>

            <v-text-field
            name="email"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-textarea
            name="message"
            v-model="message"
            :rules="messageRules"
            label="Message"
            required
            ></v-textarea>

           

            <v-btn
            :disabled="!valid"
            color="#5000ca"
            class="mr-4"
            @click="validate"
            type="submit"
            fab
            >
            <v-icon color="white">mdi-send</v-icon>
            </v-btn>

            <v-btn
            icon
            color="error"
            class="mr-4"
            @click="reset"
            >
            <v-icon>mdi-restart</v-icon>
            </v-btn>
        </v-form>
      </div>
    </v-container>
</template>

<script>
 export default {
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Nom requis',
            v => (v && v.length <= 10) || 'Le nom doit faire moins de 10 caractères',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail requis',
            v => /.+@.+\..+/.test(v) || 'E-mail invalide',
        ],
        message: '',
        messageRules: [
            v => !!v || 'Message requis',
            v => (v && v.length >= 10) || 'Message doit faire plus de 10 caractères',
        ],

        }),

        methods: {
        validate () {
            this.$refs.form.validate()
           
        },
        reset () {
            this.$refs.form.reset()
        },
        
    },
}
</script>