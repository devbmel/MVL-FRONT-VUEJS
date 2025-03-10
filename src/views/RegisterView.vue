<script setup>
import '@/assets/form.css'
</script>

<template>
  <main>
    <h1>S'inscrire</h1>
    <div class="formDiv">
      <form id="inscriptionForm">
        <div>
          <label for="username">Nom d'utilisateur :</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Au moins 6 caractères"
            required
            aria-required="true"
            aria-describedby="champ pour username"
          />
        </div>
        <div>
          <label for="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="something@exemple.com"
            required
            aria-required="true"
            aria-describedby="champ pour l'email"
          />
        </div>
        <div>
          <label for="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Le mot de passe doit contenir au moins 6 caractères"
            required
            aria-required="true"
            aria-describedby="champ pour le mot de passe"
          />
        </div>
        <div>
          <label for="confirmpassword">Confirmer le mot de passe :</label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            required
            aria-required="true"
            aria-describedby="champ pour la confirmation du mot de passe"
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  </main>
</template>
