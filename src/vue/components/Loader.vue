<template>
  <h4 v-if="loading" class="text-center">Laden...</h4>
  <slot v-else></slot>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  loading?: boolean
}>(), {
  loading: true
})
</script>