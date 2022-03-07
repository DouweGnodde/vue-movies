<template>
  <img
      class="card-img-top"
      :src="posterHref"
      alt="Movie poster"
  >
</template>

<script lang="ts" setup>
import PosterSize from "../../types/PosterSize";
import { computed } from "vue";

const props = defineProps<{
  url: string,
  size: PosterSize,
}>();

const posterHref = computed(() => `https://image.tmdb.org/t/p/${props.size}/${props.url}`)
</script>