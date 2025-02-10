<template>
  <teleport to="#modals">
    <div class="modal-screen">
      <div class="modal">
        <h2>{{ props.title }}</h2>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: 'No title given',
  },
})
</script>

<style>
.modal-screen {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: aliceblue;
  color: black;
  padding: 5rem;
  width: 80%;
}
</style>
