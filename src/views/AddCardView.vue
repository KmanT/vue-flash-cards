<template>
  <div class="add-card">
    <h1>Add Card</h1>
    <AddCardForm />
  </div>
</template>

<script lang="ts" setup>
import AddCardForm from '@/components/AddCardForm.vue'
</script>

<style>
.add-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
