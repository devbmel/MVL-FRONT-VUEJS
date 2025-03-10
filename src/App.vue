<script setup></script>

<template>
  <header>
    <img
      class="logo"
      src="./assets/img/My_Virtual_Library-removebg-preview(1).png"
      alt="logo de my virtual
      library, une plume dans un livre"
    />
    <nav class="nav">
      <ul>
        <li><a href="/index.html">Accueil</a></li>
        <li><a href="library.html">Bibliothèque</a></li>
        <li><a href="wishlist.html">Wishlist</a></li>
      </ul>
    </nav>
    <div id="buttons">
      <form action="">
        <button class="button" type="submit">Connexion</button>
      </form>
    </div>
  </header>
  <router-view> </router-view>
  <footer>
    <p>Copyright © 2024. Tout droits réservés. Mentions légales</p>
  </footer>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
}
main h1 {
  text-align: center;
  font-size: 60px;
  color: #2f3b3b;
  margin-top: 100px;
}

section {
  display: flex;
  justify-content: center;
}

section p {
  width: 80%;
  height: auto;
  border: solid 3px #7a5c45;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #e2d6cc;
  color: #7a5c45;
  text-align: justify;
  padding: 20px;
}
</style>
