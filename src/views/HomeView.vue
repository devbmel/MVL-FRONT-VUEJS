<script setup></script>

<template>
  <main>
    <h1>My Virtual library</h1>
    <section>
      <p id="introduction">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi quod aut magnam? Eum
        similique nulla ea deleniti? Soluta unde animi voluptates cupiditate consectetur! Ea
        quibusdam cum excepturi beatae illo! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Earum consequuntur molestias aliquam quaerat maxime perspiciatis doloremque rerum,
        impedit vel modi dolorum eligendi cum eum cupiditate temporibus veritatis odit ea similique.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi quod aut magnam? Eum
        similique nulla ea deleniti? Soluta unde animi voluptates cupiditate consectetur! Ea
        quibusdam cum excepturi beatae illo! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Earum consequuntur molestias aliquam quaerat maxime perspiciatis doloremque rerum,
        impedit vel modi dolorum eligendi cum eum cupiditate temporibus veritatis odit ea similique.
      </p>
    </section>
    <div id="buttons">
      <form action="src/html/inscription.html">
        <button class="button" type="submit">S'inscrire</button>
      </form>
    </div>
  </main>
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
