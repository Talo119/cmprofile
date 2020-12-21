<template>
  <div class="container">
      <v-row>
          <Titulo title="Skills and Education" />
          <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="green--text">
                <h1 class="headline">My Education</h1>
                <v-alert
                    border="left"
                    colored-border          
                    elevation="2"
                    color="green"
                    class="mt-5"
                >
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Universidad Cristiana de Honduras</v-list-item-title>
                            <v-list-item-subtitle>Ingenieria en Sistemas (2007-2016)</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-alert>
                
                <v-alert
                    border="left"
                    colored-border          
                    elevation="2"
                    color="green"
                    class="mt-5"
                >
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Instituto Evangelico Centroamericano</v-list-item-title>
                            <v-list-item-subtitle>Bach. Tecnico en Computacion (2001-2006)</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-alert>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="amber--text">
                <h1 class="headline mb-5">Skills</h1>
                
                <v-progress-linear
                    v-model="item.value"
                    height="25"
                    v-for="(item,index) in skills" :key="index"
                    color="amber"  
                    class="mb-2"                  
                >
                    {{item.tool}} | 
                    <strong class="ml-2">{{ Math.ceil(item.value) }}%</strong>
               </v-progress-linear>
          </v-col>
      </v-row>
      
  </div>
</template>

<script>
import Titulo from '../components/Titulo'
export default {
    components:{
        Titulo
    },
    data() {
        return {
            skills:[
                {tool:'Visual Basic', value:95},
                {tool:'Vuejs', value:90},
                {tool:'Bootstrap', value:70},
                {tool:'Vuetify', value:60},
                {tool:'SQL Server', value:85},
                {tool:'C#', value:50},
                {tool:'.Net Core', value:30},
            ]
        }
    },
}
</script>

