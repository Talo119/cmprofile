<template>
  <div class="container">
    <v-parallax
      src="../images/pexels-luis-gomes-546819 Medium.jpg"
      dark
    >
      <v-row align="center" justify="center">
        <v-col cols="12"  xs="12" sm="12" md="4" lg="4" xl="4" class="text-center">
          <v-alert outlined color="white">
            <h1 class="display-1 font-weight-thin mb-2">
              Carlos Motiño
            </h1>
            <h4 class="subtitle-1">
              Web Developer
            </h4>
          </v-alert>          
        </v-col>
      </v-row>
    </v-parallax>
    <small>Photo by luis gomes from Pexels</small>    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
