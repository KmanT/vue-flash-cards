<template>
  <div class="card-container">
    <CardControl direction="left" @click="handleMoveLeft()" />
    <FlashCard
      :id="fcStore.currentCard.id"
      :front-text="fcStore.currentCard.frontText"
      :back-text="fcStore.currentCard.backText"
    />
    <CardControl direction="right" @click="handleMoveRight()" />
  </div>
</template>

<script lang="ts" setup>
import { useFlashCardStore } from '@/stores/flash-cards'
import CardControl from './CardControl.vue'
import FlashCard from './FlashCard.vue'

const fcStore = useFlashCardStore()

function handleMoveLeft() {
  if (!fcStore.isFront) {
    fcStore.flipCard()
  }
  fcStore.moveLeft()
}

function handleMoveRight() {
  if (!fcStore.isFront) {
    fcStore.flipCard()
  }
  fcStore.moveRight()
}
</script>

<style>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
