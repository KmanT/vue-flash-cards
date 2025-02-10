<template>
  <div class="score-controls">
    <div class="score-btn-container">
      <button @click="handleCorrectScore" class="score-btn correct">Correct</button>
      <button @click="handleIncorrectScore" class="score-btn incorrect">Incorrect</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFlashCardStore } from '@/stores/flash-cards'

const fcStore = useFlashCardStore()

function handleCorrectScore() {
  const { id } = fcStore.currentCard

  fcStore.increaseCorrect(id)
  if (!fcStore.isFront) {
    fcStore.flipCard()
  }
  fcStore.moveRight()
}

function handleIncorrectScore() {
  const { id } = fcStore.currentCard

  fcStore.increaseIncorrect(id)
  if (!fcStore.isFront) {
    fcStore.flipCard()
  }
  fcStore.moveRight()
}
</script>

<style>
.score-controls {
  display: block;
  text-align: center;
}

.score-btn-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

.score-btn {
  margin: 0.25rem;
  padding: 1rem;
  min-width: 5.5rem;
  border-radius: 10%;
  border-color: aliceblue;
}

.correct {
  background-color: chartreuse;
}

.correct:hover {
  background-color: rgb(70, 138, 2);
  color: aliceblue;
}

.incorrect {
  background-color: salmon;
}

.incorrect:hover {
  background-color: rgb(160, 82, 73);
  color: aliceblue;
}
</style>
