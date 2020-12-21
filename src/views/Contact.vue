<template>
  <div class="container">
      <Titulo title="Let's talk"/>
      <v-alert v-if="alert.show" :type="alert.tipo">
        {{alert.message}}
      </v-alert>
      <v-form class="contact-form mb-4" @submit.prevent="sendEmail">
          <v-text-field type="text" label="Name" name="user_name" v-model="contact.name">              
          </v-text-field>
          <v-text-field type="email" label="Email" name="user_email" v-model="contact.email">
          </v-text-field>          
          <v-textarea label="Message" name="message" v-model="contact.message">              
          </v-textarea>
          <v-btn type="submit" color="primary">Contact Me</v-btn>
      </v-form>
      <v-divider v-if="!desktop_mode"></v-divider>
      <v-row v-if="!desktop_mode" align="center" class="primary--text">        
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import emailjs from 'emailjs-com'
import Titulo from '../components/Titulo'
export default {
    components: {
        Titulo,
    },

    data() {
        return {
            contact: {
                name:'', email:'', subject:'', message:''
            },
            alert:{
                tipo:'success',
                message:'',
                show:false
            },
            
        }
    },

    created () {
        this.vefiricarResolucion();
    },

    computed:{
        ...mapState(['desktop_mode']),
    },

    methods: {

        ...mapActions(['vefiricarResolucion']),

        sendEmail (e) {
            try {
                let status_envio = ''; 
                emailjs.sendForm('service_xbixrbj', 'contact_form', e.target, 'user_6L4y3lXieVcgo3yYuqbqD',{
                    name:this.contact.name,
                    email:this.contact.email,
                    message:this.contact.message
                })
                this.showAlert('success');
            } catch (error) {
                this.showAlert('error');
            }                       
            /* emailjs.sendForm('service_xbixrbj', 'contact_form', e.target, 'user_6L4y3lXieVcgo3yYuqbqD')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);                
                status_envio = 'success';                
            }, (error) => {
                console.log('FAILED...', error);
                status_envio = 'error';
            });

            this.showAlert(status_envio); */
        },

        showAlert(tipo){
            let self = this;
            let n = 0;
            if(tipo === 'success'){
                self.tipo = tipo;
                self.alert.message='Email sent!';                
                self.alert.show=true;               
                self.contact.name='';
                self.contact.email='';
                self.contact.message='';
                setTimeout(function(){ self.alert.show=false; }, 3000);
            } else {
                self.tipo = tipo;
                self.alert.message='Email not sent!'
                self.alert.show=true;                
            }
        },
        hideAlert(){
            //setTimeout(self.alert.show=false, 5000);
            setTimeout(function(){ self.alert.show=false; }, 5000);
        },
    },

}
</script>

