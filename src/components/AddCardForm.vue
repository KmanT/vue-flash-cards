<template>
  <form @submit.prevent="handleSubmit">
    <label for="front-text">Question</label>
    <textarea v-model="frontText" name="frontText" id="front-text" />
    <label for="front-text">Answer</label>
    <textarea v-model="backText" name="backText" id="back-text" />
    <button class="add-btn">Add card</button>
  </form>
</template>

<script lang="ts" setup>
import { useFlashCardStore } from '@/stores/flash-cards'
import { ref } from 'vue'

const fcStore = useFlashCardStore()

const frontText = ref('')
const backText = ref('')

function handleSubmit() {
  fcStore.addCard(frontText.value, backText.value)
  fcStore.resetCardsAndScore()

  frontText.value = ''
  backText.value = ''
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
}

form * {
  margin-bottom: 1rem;
}

textarea {
  width: 80%;
  field-sizing: content;
  min-height: 3rem;
}

.add-btn {
  width: 6rem;
  height: 2rem;
}
</style>
