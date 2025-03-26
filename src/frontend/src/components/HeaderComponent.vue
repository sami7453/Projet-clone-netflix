<template>
    <header class="apparition">
        <nav>
          <div id="image">
            <router-link to="/">
              <img src="../assets/images/1.png" width="80" height="80" />
            </router-link>
          </div>
          <div id="texte">
            <router-link to="/">Accueil</router-link>
            <router-link to="/login">Connexion</router-link>
          </div>
        </nav>
      </header>
</template>

<script setup lang="ts">
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        /* background: linear-gradient(-45deg, #ff007f, #ff6a00, #00d2ff, #8a2be2); */
        /* background-size: 200% 200%; */
        /* animation: gradient 10s ease infinite; */
        font-family: 'Georgia', sans-serif;
    }
    
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
    header.apparition{
        animation-delay: 0.2s;
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
