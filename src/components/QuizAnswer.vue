<template>
  <div class="quiz-answer">
    <div class="question">
      {{ frontText }}
    </div>
    <div class="answer">
      {{ backText }}
    </div>
    <div class="result">
      {{ answered }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  frontText: string
  backText: string
  answered: boolean | 'correct' | 'incorrect'
}>()
</script>

<style>
.quiz-answer {
  display: flex;
  margin-bottom: 0.5rem;
  border-bottom: black solid;
}

.quiz-answer * {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.question {
  width: 30%;
}

.answer {
  width: 50%;
}

.result {
  width: 15%;
}
</style>
