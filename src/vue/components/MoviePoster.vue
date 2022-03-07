<template>
  <img
      class="card-img-top"
      :src="`https://image.tmdb.org/t/p/${size}/${url}`"
      alt="Movie poster"
      :width="width"
      :height="height"
  >
</template>

<script lang="ts" setup>
import PosterSize from "../../types/PosterSize";

const props = defineProps<{
  url: string,
  size: PosterSize,
  width?: string,
  height?: string
}>();
</script>