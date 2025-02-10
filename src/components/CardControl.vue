<template>
  <div>
    <img
      :alt="'Vue logo pointing ' + direction"
      class="card-control"
      :src="direction === 'left' ? lArrowImageUrl : rArrowImageUrl"
      width="50"
      height="50"
    />
  </div>
</template>

<script lang="ts" setup>
import lArrowImageUrl from '@/assets/l-arrow.svg'
import rArrowImageUrl from '@/assets/r-arrow.svg'

defineProps<{
  direction: 'left' | 'right'
}>()
</script>
