<template>
  <img
      class="card-img-top"
      :src="`https://image.tmdb.org/t/p/${size}/${movie.poster_path}`"
      alt="Movie poster"
      :width="width"
      :height="height"
  >
</template>

<script lang="ts" setup>
import PosterSize from "../../types/PosterSize";
import Movie from "../../types/Movie";

const props = defineProps<{
  movie: Movie,
  size: PosterSize,
  width?: string,
  height?: string
}>();
</script>