<template>
  <div class="quiz-results">
    <article v-for="card in fcStore.flashCards" :key="card.id">
      <QuizAnswer
        :front-text="card.frontText"
        :back-text="card.backText"
        :answered="card.answered"
      />
    </article>
  </div>
</template>

<script setup lang="ts">
import { useFlashCardStore } from '@/stores/flash-cards'
import QuizAnswer from './QuizAnswer.vue'

const fcStore = useFlashCardStore()
</script>
