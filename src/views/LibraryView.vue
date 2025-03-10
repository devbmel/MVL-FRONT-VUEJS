<script setup>
import { ref } from 'vue'
import FirstModal from '@/components/FirstModal.vue'

const showModal = ref(false)
</script>

<template>
  <main>
    <button id="show-modal" @click="showModal = true">Ajouter un livre</button>
    <FirstModal v-model:show="showModal" />

    <div class="container">
      <section class="filter-bar">
        <div class="filter-options">
          <select id="favorite-filter">
            <option value="">Filtrer par favoris</option>
            <option value="oui">Oui</option>
            <option value="non">Non</option>
          </select>

          <select id="genre-filter">
            <option value="">Filtrer par genre</option>
            <option value="fantasy">Fantasy</option>
            <option value="sf">Science fiction</option>
            <option value="classique">Classiques</option>
          </select>

          <select id="rating-filter">
            <option value="">Filtrer par note</option>
            <option value="1">1 étoile</option>
            <option value="2">2 étoiles</option>
            <option value="3">3 étoiles</option>
            <option value="4">4 étoiles</option>
            <option value="5">5 étoiles</option>
          </select>

          <select id="status-filter">
            <option value="">Filtrer par statut</option>
            <option value="Lus">Lus</option>
            <option value="Non Lus">Non lus</option>
            <option value=""></option>
          </select>
        </div>

        <input type="text" class="search" placeholder="Rechercher..." />
      </section>

      <!-- <section id="bibliotheque">
        <div class="cardadd">
          <h3>Ajouter un nouveau livre</h3>

          <button id="openModalBtn">+</button>
          <div id="modal" class="modal">
            <div class="modal-content">
              <span id="closeBtn" class="close">&times;</span>
              <form id="formAddBook">
                <label for="addTitle">Titre du livre</label>
                <input type="text" id="addTitle" name="addTittle" required />

                <button id="btnAddBook" type="submit">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </section> -->
    </div>
  </main>
</template>

<style>
modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  position: relative;
  margin: 15% auto;
  padding: 20px;
  width: 80%;
  background-color: white;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 80px;
}

.filter-bar {
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  background-color: #e2d6cc;
  border: solid 2px;
}
.filter-bar .search {
  width: 30%;
}

#bibliotheque {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}

#resultsList {
  list-style: none;
  padding: 0;
}

#resultsList li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

#resultsList li:hover {
  background-color: #f0f0f0;
}

/* Style pour la fenêtre modale (cachée par défaut) */
.modal {
  display: none; /* C'est caché au départ */
  position: fixed;
  z-index: 1; /* Assurer que la modale est au-dessus du contenu */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

/* Contenu de la modale */
.modal-content {
  background-color: #e2d6cc;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* Bouton de fermeture (X) */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* Formulaire */
form {
  display: flex;
  flex-direction: column;
}

form input {
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#btnAddBook {
  background-color: #a27b5c;
  padding: 10px;
  color: #f6f2ef;
  border: solid 1px #392b20;
  border-radius: 10px;
  height: 40px;
  width: 130px;
  vertical-align: middle;
  cursor: pointer;
}
#btnAddBook:hover {
  background-color: #81624a;
}

#btnAddBook:hover {
  background-color: #a27b5c;
  padding: 10px;
  color: #f6f2ef;
  border: solid 1px #392b20;
  border-radius: 10px;
  height: 40px;
  width: 130px;
  vertical-align: middle;
  cursor: pointer;
}
#btnAddBook:hover:hover {
  background-color: #81624a;
}

@media (max-width: 600px) {
  #bibliotheque {
    grid-template-columns: 1fr;
  }
}
</style>
