<template>
  <v-app>
    <v-app-bar
      app
      color="primary"  
      flat
      dark
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="white"
          size="48"
        >
          <span class="primary--text headline">CM</span>
        </v-avatar>      
        <v-spacer></v-spacer>
       
        <v-menu
            bottom
            left
            v-if="!desktop_mode"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>fas fa-ellipsis-v</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in menu"
                :key="i"
                :to="item.to"
              >
                <v-list-item-title>                  
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>


        
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col v-if="desktop_mode" cols="3">
            <v-sheet  rounded="lg">
              <v-row>
                <v-col align="center" class="mt-3">
                  <v-avatar size="62">
                    <img
                      src="../src/images/-u9p15x.jpg"
                      alt="Carlos"                      
                    >
                  </v-avatar>
                  <h2 class="primary--text display-1 mt-2">Carlos Motiño</h2>
                  <h4 class="accent--text subtitle-1">Web Developer</h4>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-list color="transparent">
                <v-list-item
                  v-for="(item, index) in menu"
                  :key="index"
                  link
                  :to="item.to"
                >
                  <v-list-item-content>
                    <v-list-item-title class="primary--text">
                      {{item.title}}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                
                <v-divider class="my-2"></v-divider>
                <v-row align="center" class="primary--text">
                  <v-col align="center" cols="4" class="mx-0">
                    <h1>
                      <a href="https://www.linkedin.com/in/carlos-ivan-moti%C3%B1o-hernandez-3008b4ab/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </h1>                    
                  </v-col>
                  <v-col align="center" cols="4" class="mx-0">
                    <h1>
                      <a href="https://twitter.com/talo119" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter-square"></i>
                      </a>
                    </h1>                    
                  </v-col>
                  <v-col align="center" cols="4" class="mx-0">
                    <h1>
                      <a href="https://github.com/Talo119?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github-square"></i>
                      </a>
                    </h1>
                  </v-col>
                </v-row>
                
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <router-view></router-view>
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    links: [
        'Home',        
      ],
    menu:[
      {title:'Home', to:'/'},
      {title:'About Me', to:'/about'},
      {title:'Experience', to:'/experience'},
      {title:'Skills & Education', to:'/skillsEducation'},
      {title:'Contact', to:'/contact'}
    ],
    //desktop_mode:true,
  }),
  created () {
    this.vefiricarResolucion();
    /* if (screen.width <= 768) {
      this.desktop_mode = false;
    }; */
  },

  computed: {
    ...mapState(['desktop_mode']),    
  },

  methods: {
    ...mapActions(['vefiricarResolucion']),
  },

};
</script>
