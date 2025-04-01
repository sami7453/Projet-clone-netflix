<template>
    <section>
        <form id="inscription" class="apparition" @submit.prevent="handleSignup">
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
    </section>
</template>

<script setup lang="ts">

</script>

<style lang="css">

</style>
