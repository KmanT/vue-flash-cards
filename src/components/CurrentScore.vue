<template>
  <div class="current-score">
    Correct: {{ fcStore.correctCount }} | Wrong {{ fcStore.incorrectCount }}
  </div>
</template>

<script lang="ts" setup>
import { useFlashCardStore } from '@/stores/flash-cards'

const fcStore = useFlashCardStore()
</script>
