<template>
  <Modal v-if="fcStore.hasAnsweredAll" title="Quiz Over">
    <QuizResultsList />
    <button @click="fcStore.resetCardsAndScore()" class="reset">Reset Quiz</button>
  </Modal>
</template>

<script lang="ts" setup>
import { useFlashCardStore } from '@/stores/flash-cards'
import Modal from './Modal.vue'
import QuizResultsList from './QuizResultsList.vue'

const fcStore = useFlashCardStore()
</script>
