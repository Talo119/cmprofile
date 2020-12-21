<template>
  <div class="container">
    <v-row align="center" class="mx-2">
      <v-col cols="12" class="mt-2">
        <Titulo title="Who I am?"/>        
        <v-alert  
          border="left"
          colored-border          
          elevation="2"
          color="primary"
          class="mt-2"
        >
          <v-row align="center">
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="secondary--text">
              <h4 class="primary--text text-justify">
                I am front-end developer that specializes in Vue and Veutify development.
                Passionate about my career and profession area. In constant learning for 
                my personal growth and to be able to fulfill my work in the best way.
            </h4>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
              <v-row class="mt-0 secondary--text">
                  <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <strong class="display-5 green--text">
                      <i class="fas fa-map-marker-alt"></i> Location
                    </strong>                    
                  </v-col>
                  <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" class="green--text">San Pedro Sula,Honduras</v-col>

                  <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <strong class="orange--text">
                      <i class="fas fa-at"></i> Email
                    </strong>
                    
                  </v-col>
                  <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" class="orange--text">carlos.motino911@gmail.com</v-col>

                  <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <strong class="purple--text">
                      <i class="fab fa-discord"></i> Discord
                    </strong>
                    
                  </v-col>
                  <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" class="purple--text">@talo#0252</v-col>
              </v-row>
            </v-col>
            
          </v-row>       
        </v-alert>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import Titulo from '../components/Titulo'
export default {
  components: {
    Titulo,
  },
}
</script>
