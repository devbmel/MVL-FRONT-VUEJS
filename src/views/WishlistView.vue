<script></script>

<template>
  <main>
    <h1>Liste de souhait</h1>
    <ul id="libraryList"></ul>
    <div id="wishlist">
      <div class="cardWishlist">
        <div class="imageFav">
          <img src="" alt="" />
        </div>
        <p id="titreLivre">Titre</p>
        <p id="auteur">Auteur</p>
        <p id="format">Formats disponibles</p>
        <p id=" prix">Prix</p>
        <img class="iconesupp" src="" alt="" />
      </div>
    </div>
  </main>
</template>

<style>
#wishlist {
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 15px;
}

.cardWishlist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid 2px #7a5c45;
  background-color: #e2d6cc;
  padding: 10px;
  border-radius: 8px;
}

.imageFav {
  width: 8em;
  height: 8em;
  padding: 10px;
}
.imageFav img {
  max-height: 100%;
  width: auto;
}

.iconesupp {
  padding-right: 10px;
  cursor: pointer;
}

/* ----------------Media Queries ------------------ */
@media (min-width: 600px) and (max-width: 768px) {
  #wishlist {
    width: 90%;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .cardWishlist {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px;
    gap: 10px;
    border: solid 2px #7a5c45;
    background-color: #e2d6cc;
    border-radius: 8px;
  }
  .imageFav {
    width: 7em;
    height: 7em;
    padding: 8px;
  }
  .imageFav img {
    max-height: 100%;
    width: auto;
    border-radius: 8px;
  }
  .iconesupp {
    width: 20px;
    height: 20px;
    padding-right: 10px;
    cursor: pointer;
  }
  p {
    font-size: 14px;
    text-align: center;
  }
  h1 {
    font-size: 26px;
    text-align: center;
    margin-bottom: 20px;
  }
}
@media (max-width: 480px) {
  #wishlist {
    width: 95%;
    gap: 10px;
  }
  .cardWishlist {
    flex-direction: column;
    align-items: center;
  }
  .imageFav {
    width: 5em;
    height: 5em;
    padding: 5px;
  }
  .iconesupp {
    padding-right: 5px;
    width: 18px;
    height: 18px;
  }
  p {
    font-size: 3vh;
    text-align: center;
  }
  h1 {
    font-size: 22px;
    text-align: center;
  }
}
</style>
