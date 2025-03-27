<template>
    <main class="apparition">
        <form v-if="showConnexion" id="connexion" class="apparition" @submit.prevent="handleLogin">
          <label for="pres">Connexion :</label>
          <div id="mail">
            <img src="../assets/images/mail.png" width="50" height="50" />
            <input type="email" v-model="email" placeholder="Email" required />
          </div>
          <div id="mdp">
            <img src="../assets/images/mdp.png" width="65" height="65" />
            <input type="password" v-model="password" placeholder="Password" required />
          </div>
          <button type="submit">Connexion</button>
        </form>
  
        <form v-if="!showConnexion" id="inscription" class="apparition" @submit.prevent="handleSignup">
          <label for="pres">Inscription :</label>
          <div id="name">
            <img src="../assets/images/personne.png" width="50" height="50" />
            <input type="text" v-model="nom" placeholder="Nom" required />
          </div>
          <div id="firstname">
            <img src="../assets/images/personne.png" width="50" height="50" />
            <input type="text" v-model="prenom" placeholder="Prenom" required />
          </div>
          <div id="mail">
            <img src="../assets/images/mail.png" width="50" height="50" />
            <input type="email" v-model="email" placeholder="Email" required />
          </div>
          <div id="mdp">
            <img src="../assets/images/mdp.png" width="65" height="65" />
            <input type="password" v-model="password" placeholder="Password" required />
          </div>
          <button type="submit">Inscription</button>
        </form>
  
        <div v-if="showConnexion" id="button_inscription" class="apparition">
          <p>Vous n'avez pas encore de compte ?</p>
          <button @click="toggleForms">Inscrivez-vous</button>
        </div>
        <div v-if="!showConnexion" id="button_connexion" class="apparition">
          <p>Vous avez déjà un compte ?</p>
          <button @click="toggleForms">Connectez-vous</button>
        </div>
    </main>
</template>
  
<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const showConnexion = ref(localStorage.getItem('inscription') !== 'true');
  const email = ref('');
  const password = ref('');
  const nom = ref('');
  const prenom = ref('');
  
  const toggleForms = () => {
    showConnexion.value = !showConnexion.value;
    localStorage.setItem('inscription', showConnexion.value ? 'false' : 'true');
  };
  
  const handleLogin = () => {
    console.log('Tentative de connexion avec', email.value, password.value);
  };
  
  const handleSignup = () => {
    console.log("Tentative d'inscription avec", nom.value, prenom.value, email.value, password.value);
  };
  
  onMounted(() => {
    showConnexion.value = localStorage.getItem('inscription') !== 'true';
  });
</script>
  
<style scoped>
 
    
    
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
    
        50% {
            background-position: 100% 50%;
        }
    
        100% {
            background-position: 0% 50%;
        }
    }
    .hidden{
        display: none !important;
    }

    header{
        /* background-color: #6e0000;
        opacity: 0.4; */
        background-color: #6c7c8c5f
        
    }
    header nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }
    #image img{
        margin-left: 100px;
        border-radius: 50%;
    }
    #texte a{
        text-decoration: none;
        color: white;
        font-size: 30px;
        margin-right: 300px;
        transition: 1s ease-in-out;
        display: inline-block;
    }
    #texte a:hover{
        transform: scale(1.2);
        transition: 1s;
    }


    main{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100vh;
    }
    #connexion{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 10%;
        width: 300px;
        padding: 70px 90px 70px 90px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        background-color: #6c7c8c5f
    }
    #connexion img{
        filter: invert(1);
    }
    #connexion label{
        font-size: 20px;
        margin-bottom: 30px;
        font-size: 30px;
        color: #FFFFFF;
    }
    #connexion input{
        width: 200px;
        height: 40px;
        margin-top: 10px;
        font-size: 20px;
        border: none;
        border-left: 2px solid black;
        /* border-bottom: black 2px solid; */
        outline: none;
        transition: 1s;
        padding-left: 20px;
        background-color: transparent;
    }
    input::placeholder {
        color: #FFFFFF;
        font-family: "Georgia", sans-serif;
    }

    #connexion button{
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #ffffff26;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 20px;
        transition: 1s;
        border-radius: 20px;
        margin-top: 40px;
    }
    #connexion button:hover{
        background-color: black;
        transform: scale(1.1);
        transition: 1s;
    }

    #name img{
        margin-top: 5px;
        margin-left: 10px;
        margin-right: 20px;
    }
    #firstname img{
        margin-top: 5px;
        margin-left: 10px;
        margin-right: 20px;
    }
    #mail img{
        margin-top: 5px;
        margin-left: 10px;
        margin-right: 20px;
    }
    #firstname{
        padding: 10px;
    }
    #mdp,#mail,#name,#firstname{
        display: flex;
        justify-content: center;
        border: 1px solid black;
        border-radius: 10px;
        padding: 5px 5px 12px 5px;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    #mdp{
        padding: 2px 2px 2px 2px;
    }
    #mdp input{
        margin-bottom: 5px;
    }
    #mdp img{
        border: none;
        border-radius: 50%;
        align-items: center;
        margin-left: 10px;
        margin-right: 20px;
    }





    #inscription{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 40px;
        width: 300px;
        padding: 70px;
        background-color: #6c7c8c5f;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }
    #inscription img{
        filter: invert(1);
    }
    #inscription label{
        font-size: 20px;
        color: white;
        margin-bottom: 30px;
        font-size: 30px;
    }
    #inscription input{
        width: 200px;
        height: 40px;
        margin-top: 10px;
        font-size: 20px;
        border: none;
        border-left: 2px solid black;
        /* border-bottom: black 2px solid; */
        outline: none;
        transition: 1s;
        background-color: transparent;
        padding-left: 20px;
    }

    #inscription button{
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #ffffff26;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 20px;
        transition: 1s;
        border-radius: 20px;
    }
    #inscription button:hover{
        background-color: black;
        transform: scale(1.1);
        transition: 1s;
    }





    #button_inscription{
        align-items: center;
        margin-top: 20px;
    }
    #button_inscription p{
        color: #FFFFFF;
    }
    #button_inscription button{
        padding: 10px 20px;
        background-color: #ffffff26;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 1s;
        margin: 10px;
        font-size: 10px;
        border-radius: 20px;
        margin-left: 60px;
    }
    #button_inscription button:hover{
        background-color: black;
        transform: scale(1.1);
        transition: 1s;
    }
    #button_connexion{
        align-items: center;
        margin-top: 20px;
    }
    #button_connexion p{
        color: #FFFFFF;
    }
    #button_connexion button{
        padding: 10px 20px;
        background-color: #ffffff26;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 1s;
        margin: 10px;
        font-size: 10px;
        border-radius: 20px;
        margin-left: 30px;
    }
    #button_connexion button:hover{
        background-color: black;
        transform: scale(1.1);
        transition: 1s;
    }



    footer{
        /* background-color: #6e0000; */
        background-color: #6c7c8c5f;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }
    footer p{
        color: white;
        font-size: 40px;
    }





    header.apparition{
        animation-delay: 0.2s;
    }
    main.apparition{
        animation-delay: 0.4s;
    }
    footer.apparition{
        animation-delay: 0.6s;
    }

    @keyframes fadeIn{
        0%{
            opacity: 0;
            transform: translateY(20px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    .apparition{
        opacity: 0;
        animation: fadeIn 1s ease-in-out forwards;
    }

</style>
  