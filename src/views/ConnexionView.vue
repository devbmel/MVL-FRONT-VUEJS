<script setup>
import '@/assets/form.css'
</script>

<template>
  <main>
    <h1>Se connecter</h1>
    <div class="formDiv">
      <form id="connexionForm">
        <div>
          <label for="username">Nom d'utilisateur :</label>
          <input type="text" id="username" name="username" pattern="[a-zA-ZÀ-ÿ]+" required />
        </div>

        <div>
          <label for="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            pattern="/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{8,}$/"
            required
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  </main>
</template>
