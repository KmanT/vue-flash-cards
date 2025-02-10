<template>
  <main>
    <h1>Vue Flash Cards</h1>
    <h2 v-if="fcStore.hasAnsweredAll">You answered all of the questions!</h2>
    <CurrentScore />
    <FlashCardContainer />
    <ScoreControls />
    <EndQuizModal />
  </main>
</template>

<script setup lang="ts">
import FlashCardContainer from '@/components/FlashCardContainer.vue'
import CurrentScore from '@/components/CurrentScore.vue'
import ScoreControls from '@/components/ScoreControls.vue'
import { useFlashCardStore } from '@/stores/flash-cards'
import EndQuizModal from '@/components/EndQuizModal.vue'

const fcStore = useFlashCardStore()
</script>
