<template>
    <div class="container">
        <v-row align="center" class="mx-2">
            <v-col cols="12">
                <Titulo title="Experience"/>
                <v-timeline>
                    <v-timeline-item
                    v-for="(year, i) in years"
                    :key="i"
                    :color="year.color"
                    small
                    >
                    
                        <template v-slot:opposite>
                            <span :class="`headline font-weight-bold ${year.color}--text mr-2`">
                                <i class="fas fa-calendar-alt"></i>
                            </span>                     
                            <span
                            :class="`headline font-weight-bold ${year.color}--text`"
                            v-text="year.year"
                            ></span>
                        </template>
                        <div class="py-4 ml-0">
                            <div>
                                <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
                                    <i class="fas fa-building"></i>
                                    {{year.company}}
                                </h2>
                            </div>    
                            
                            <div>
                                {{year.description}}
                            </div>                                
                            
                        </div>
                                            
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Titulo from '../components/Titulo'
export default {
    components: {
        Titulo
    },
    data() {
        return {
            years: [                
                {
                    color: 'green',
                    year: '2015-2017',
                    company:'DHV Consultants',
                    description:'Desarrollo en asp.Net, Webform y Winform. Uso de controles DevExpress, manejo de SQL Server.'
                },                
                
                {
                    color: 'orange',
                    year: '2017-a la fecha',
                    company:'Empire Electronic of Honduras',
                    description:'Desarrollo en asp.Net, C#, VB06 para ambiente web y movil. Desarrollo web con Vue, Bootstrap y HTML.'
                },
             ],
        }
    },
}
</script>

