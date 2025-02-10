<template>
  <div :class="`flash-card ${fcStore.isFront ? '' : 'back'}`" @click="fcStore.flipCard()">
    <p>{{ fcStore.isFront ? frontText : backText }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useFlashCardStore } from '@/stores/flash-cards'

defineProps<{
  id: string
  frontText: string
  backText: string
}>()

const fcStore = useFlashCardStore()
</script>

<style>
.flash-card {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
  color: black;
  vertical-align: middle;
  font-size: 1.5rem;
  min-height: 10rem;
  width: 60%;
  border-radius: 0.25rem;
  margin: 1rem;
  padding: 1rem;
}

.back {
  background-color: rgb(250, 220, 180);
}
</style>
