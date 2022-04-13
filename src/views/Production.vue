<template>
    <v-container fluid>
       
        <v-row class="text-center mt-13" >
            <v-col class="mb-2">
                <h1 class=" font-weight-bold mb-2"  :class="[$vuetify.breakpoint.mdAndUp ? 'display-3' : 'h1']">
                    Mes ateliers de <span style="color:#5000ca">professionalisation</span>
                </h1>
            </v-col>
        </v-row>
         <!-- Une carte -->
         
        <v-row class="ma-12" fluid>
            <h2  class=" font-weight-bold "  :class="[$vuetify.breakpoint.mdAndUp ? 'h2' : 'subtitle-1']">Ateliers de professionalisation de <span style="color:#5000ca">première </span> année</h2>
            <v-expansion-panels focusable style="position : relative; z-index:0;" >
                <v-expansion-panel v-for="ap in apPremiereAnnee" :key="ap.title">
                <v-expansion-panel-header>{{ap.title}} {{ap.subtitle}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-card elevation=0>
                        <v-card-text>
                            {{ap.content}} 
                           
                            <h4 class="mt-1">Compétences visées</h4>
                            <span v-for="tag in ap.tags" :key="tag">{{tag}} <br></span>
                        </v-card-text>
                        <v-card-action>
                        <v-btn color="#5000ca" rounded elevation="0" dark class="ma-3" target="_blank" v-bind:href="ap.link">
                            <v-icon>mdi-folder-multiple</v-icon>
                        </v-btn>
                        </v-card-action>
                    </v-card>
                    
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        </v-row>
        <v-row class="ma-12" fluid>
            <h2  class=" font-weight-bold "  :class="[$vuetify.breakpoint.mdAndUp ? 'h2' : 'subtitle-1']">Ateliers de professionalisation de <span style="color:#5000ca">deuxième </span> année</h2>
            <v-expansion-panels focusable >
                <v-expansion-panel v-for="ap in apDeuxiemeAnnee" :key="ap.title">
                <v-expansion-panel-header>{{ap.title}} {{ap.subtitle}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-card elevation=0>
                        <v-card-text>
                            {{ap.content}} 
                           
                            <h4 class="mt-1">Compétences visées</h4>
                            <span v-for="tag in ap.tags" :key="tag">{{tag}} <br></span>
                        </v-card-text>
                        <v-card-action>
                        <v-btn color="#5000ca" rounded elevation="0" dark class="ma-3" target="_blank" v-bind:href="ap.link">
                            <v-icon>mdi-folder-multiple</v-icon>
                        </v-btn>
                        </v-card-action>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        </v-row>
            
        
    </v-container>
</template>
<script>
export default {
    data: () => ({
      show: false,
      snackbar: false,
      text: 'Pas encore de productions disponible',
      vertical: true,
      apPremiereAnnee: [
        {
          title: 'AP1-1',
          subtitle: 'Developpement de site web en local',
          content: 'Lors de cet atelier, par équipe de 2 nous avons développé un site pour notre lycée pendant 2 séances de 4 heures.L\'objectif de l\'AP était de découvrir et s\'approprier les éléments des langages HTML et CSS',
          img: 'https://www.cyberlabs.ch/wp-content/uploads/2019/01/cyberlabs-logo-1.png',
          link: 'https://drive.google.com/drive/folders/1LYdi71WNkFLMOCT_oUpR_nV_JTMm8P_Z?usp=sharing',
          linkText: 'Voir le projet',
          tags: ['B1.3 Développer la présence en ligne de l\'organisation', 'B1.2 Répondre aux incidents et aux demandes d\'assistance et d\'évolution'  ]
        },
        {
          title: 'AP1-2',
          subtitle: 'Formations aux outils numériques',
          content: 'Lors de cet atelier-ci, nous avons eu pour mission de former des classes d\'élève en Terminale ou BTS NDRC aux différents outils numériques. Par binômes nous avons former une classe sur le logiciel Mindview pour son coté gestion de projet. Lors de cette AP j\'ai pu développer mes compétences en tant qu\'orateur et de formateur',
          img: 'https://www.cyberlabs.ch/wp-content/uploads/2019/01/cyberlabs-logo-1.png',
          link: 'https://drive.google.com/drive/folders/1YgHpJRZ41793jpldJnpveQhJ72_BW6Uw?usp=sharing',
          linkText: 'Voir le projet',
          tags: [' B1.4 Travavailler en mode projet ', 'B1.5 Mettre à disposition des utilisateurs un service informatique'],
        },
        {
            title: 'AP1-3',
            subtitle: 'Réalisation d\'une infrastructure réseau virtuelle',
            content: 'Pendant cet atelier nous avons eu pour mission de réaliser une infrastructure d\'un réseau grâce à des machines virtuelles. J\'ai acquis des connaissance sur la compréhension d\'un réseau et de son infrastructure en respectant le cahier des charges',
            img: 'https://www.cyberlabs.ch/wp-content/uploads/2019/01/cyberlabs-logo-1.png',
            link: 'https://drive.google.com/drive/folders/1sgJucez2Hz3aSK4VOwl_LRgxpJOBC5jb?usp=sharing',
            linkText: 'Voir le projet',
            tags: ['B1.1 Gérer le patrimoine informatique ','B1.2 Répondre aux incidents et aux demandes d\'assistance des utilisateurs', 'B1.5 Mettre à disposition des utilisateurs un service informatique'],
        },
        {
            title: 'AP1-4',
            subtitle: 'Entretien avec des anciens BTS SIO - Métiers du numériques',
            content: 'Cet atelier de professionnalisation était un entretien avec des ancien étudiant du lycée VHB en BTS SIO. Lors de cet entretien nous avons pu en savoir plus sur les choix à faire pour notre avenir, poursuite d\'étude, métiers etc... nous n\'avions pas encore fait nos choix pour nos options, le passé de ses anciens étudiants était très inspirant.',
            img: 'https://www.cyberlabs.ch/wp-content/uploads/2019/01/cyberlabs-logo-1.png',
            link: 'https://drive.google.com/drive/folders/1JK85FqkXQXAo2R2HNJzKLhUerjPObPLc?usp=sharing',
            linkText: 'Voir le projet',
            tags: ['B1.3 Organiser son développement professionnel '],
        },
        {
            title: 'AP1-5',
            subtitle: 'Réalisation du PCP (Porte-feuille de compétences Professionnel)',
            content:'L\'AP à réaliser était ce porte-feuille de compétences professionnel, afin de présenter mes compténces techniques et mes compétences professionnelles. J\'ai pu réaliser ce porte-feuille en utilisant les outils VueJS et son framework Vuetify, et Figma pour le maquettage.',
            img: 'https://www.cyberlabs.ch/wp-content/uploads/2019/01/cyberlabs-logo-1.png',
            link: 'https://drive.google.com/drive/folders/1JK85FqkXQXAo2R2HNJzKLhUerjPObPLc?usp=sharing',
            linkText: 'Voir le projet',
            tags: ['B1.6 Organiser son développement professionnel','B1.6.4 Développer son projet professionnel', 'B1.6.1 Mettre en place son environnement d’apprentissage personnel', 'B3.1 Protéger les données à caractère personnel'],
        },
        {
            title: 'AP2-0',
            subtitle: 'Découverte de la gestion de projet',
            content: 'Nous avons découvert la gestion de projet et plus précisément la méthode Agile et Crumbs. Nous avons pu avoir une meilleur cohésion d\'équipe et un meilleur intérêt pour l\'importance de bien gérer les étapes de son projet grâce à de nombreux outils comme par exemple Mindview',
            img: 'https://www.cyberlabs.ch/wp-content/uploads/2019/01/cyberlabs-logo-1.png',
            link: '',
            linkText: '',
            tags: ['B1.3 Organiser son développement professionnel','B1.4 Travailler en mode projet'],
        },
        {
            title: 'AP2-1',
            subtitle: 'Déploiement Serveur et apllication web',
            content: 'Cet AP a surement été le plus conséquent et le plus long car, par binôme de SLAM et SISR (développement et réseaux), nous devions mettre en place un serveur et une application web permettant de créer une fiche de validation pour nos futurs stage et ainsi faciliter cette démarche. L\'atelier était très enrichissant car nous devions mélanger nos connaissances pour aboutir à nos objectifs. De plus, nous avons utiliser la méthode Agile en gérant le projet et ses différentes étapes grâce aux outils : Mindview et PIA. Puis, lors de la pratique nous avons été confronté a un projet développement MVC (Modèle Vue Contrôleur). Enfin, pour la partie serveur nous avions utilisé une machine virtuelle Ubuntu, et le service proFTP pour le transfert de fichier.',
            img: 'https://www.cyberlabs.ch/wp-content/uploads/2019/01/cyberlabs-logo-1.png',
            link: 'https://drive.google.com/drive/folders/1_csoR_wMKsMH-eDcBW1wJbPlQGAFeZ8L',
            linkText: 'Voir le projet',
            tags: [
                'B1.1 Gérer le patrimoine informatique',
                'B1.2 Répondre aux incidents et aux demandes d’assistance et d’évolution',
                'B1.4 Travailler en mode projet',
                'B1.5 Mettre à disposition des utilisateurs un service informatique',
                'B1.6 Organiser son développement professionnel',
                'B3.1 Protéger les données à caractère personnel',
                ' B3.2 Préserver l’identité numérique de l’organisation',
                'B3.4 Garantir la disponibilité, l’intégrité et la confidentialité des services informatiques et des données de l’organisation face aux cyberattaques',
                'B3.5 A – SLAM – Assurer la cybersécurité d’une infrastructure réseau, d’un système, d’un service'
            ],
        },
        {
            title: 'AP2-2a',
            subtitle: 'Développement d\'application de facturation client',
            content: 'Lors de cet atelier par groupe de 2 nous avons développé une application grâce à Tkinter connecté à une base de données MySQL dans laquelle nous devions créer une facture pour un client, il fallait donc stocker les informations du client et des articles.',
            img: 'https://www.cyberlabs.ch/wp-content/uploads/2019/01/cyberlabs-logo-1.png',
            link: '',
            linkText: '',
            tags: ['B1.3 Organiser son développement professionnel','B1.4 Travailler en mode projet','B3.1 Protéger les données à caractère personnel'],

        }, 
        {
            title: 'AP2-2b',
            subtitle: 'Réalisation du Labtainer CyberLabs',
            content:'Labtainer est l\'enchainement d\'exercice sur machine virtuelle permettant la compréhension des attaques ou autres fonction et action qu\'un utilisateurs puissent faire et s\'en prévenir.',
            img: 'https://www.cyberlabs.ch/wp-content/uploads/2019/01/cyberlabs-logo-1.png',
            link: 'https://drive.google.com/drive/folders/1WZpRp8YBIKLKe2EF0VA6VGEQgzzuTgu0?usp=sharing',
            linkText: 'Voir le projet',
            tags: [
                'B1.3 Organiser son développement professionnel',
                'B3.1 Protéger les données à caractère personnel',
                'B3.2 Préserver l\'identité numérique de l\'organisation'],

        }

      ],
      apDeuxiemeAnnee: [
          {
            title: 'AP3-1',
            subtitle: 'Développement d\'un pannel d\'administration ',
            content:'Un administrateur de l\'application a les pouvoirs d\'effectuer un CRUD sur les projets, groupes et utilisateurs Gitlab grâce à l\'API de celle-cin, De plus un tri est nécéssaire',
            img: 'https://www.cyberlabs.ch/wp-content/uploads/2019/01/cyberlabs-logo-1.png',
            link: 'https://siovhblyceebasch-my.sharepoint.com/:f:/g/personal/miharisoa_babef_lycee-basch_fr/ErR15fJiFpNBqYIpJ6RBXs0Bn5tDGGQAK-usDhYhqtuQ0Q?e=x6RsmK',
            linkText: 'Voir le projet',
            tags: [    
                'B1.2 Répondre aux incidents et aux demandes d’assistance et d’évolution',
                'B1.3 Organiser son développement professionnel',
                'B1.4 Travailler en mode projet',
                'B2.1 Conception et développement d\'une solution applicative',
                'B2.3 Gestion des données'
                ],
          },
          {
            title: 'AP3-2',
            subtitle: 'Développement d\'un pannel d\'administration ',
            content:'Développement d\'une API, dans laquelle nous devions accéder à une base de données MySQL et de retourner les donneés, médicaments, médecins et rapport de visite au format JSON et pouvoir les créer, modifier et supprimer. Cette API a été développé sous Code Igniter, PHP.',
            img: 'https://www.cyberlabs.ch/wp-content/uploads/2019/01/cyberlabs-logo-1.png',
            link: 'https://drive.google.com/drive/folders/1t3e0w8hFDot79Hm99aKdX21tXpRh61Ns?usp=sharing',
            linkText: 'Voir le projet',
            tags: [
                'B1.2 Répondre aux incidents et aux demandes d’assistance et d’évolution',
                'B1.3 Organiser son développement professionnel',
                'B1.4 Travailler en mode projet',
                'B2.1 Conception et développement d\'une solution applicative',
                'B2.3 Gestion des données'
                ],
          },
          {
            title: 'AP4-1',
            subtitle: 'Développement d\'une application mobile',
            content:'Réalisation d\'une application mobile permettant de gérer les médicaments, les médecins et les visites médicales. Cette application a été développé sous Android Studio, Java.',
            img: 'https://www.cyberlabs.ch/wp-content/uploads/2019/01/cyberlabs-logo-1.png',
            link: 'Aucun projet',
            linkText: '',
            tags: [
                'B1.2 Répondre aux incidents et aux demandes d’assistance et d’évolution',
                'B1.3 Organiser son développement professionnel',
                'B1.4 Travailler en mode projet',
                'B2.1 Conception et développement d\'une solution applicative',
                'B2.3 Gestion des données'
                ],
          }
      ]
    }),
    
    
    
}
</script>
<style scoped>
.v-item-group theme--light v-expansion-panels v-expansion-panels--focusable{
   z-index: inherit;
   position: relative;
}
</style>