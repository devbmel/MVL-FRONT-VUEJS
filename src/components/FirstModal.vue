<script setup>
import { ref, reactive } from 'vue'
import BookServices from '../services/bookServices.js'

defineProps(['show'])
const emit = defineEmits(['update:show'])
let bookList = reactive([])
async function getBooks() {
  emit('update:show', false)
  bookList = await BookServices.displayBookResult(title.value.trim())
  console.log(bookList)
}

const title = ref('')
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <h2>Entrez un titre de livre:</h2>
        </div>

        <input v-model="title" @keyup.enter="getBooks" />
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-input {
  margin: 20px 0;
}
</style>
