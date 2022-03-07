<template>
  <div v-if="movies.length === 0" class="alert alert-info">
    <slot name="no-movies">
      Geen films om te weergeven.
    </slot>
  </div>
  <div v-else class="row">
    <div class="row">
      <div
          v-for="movie in movies"
          :key="movie.id"
          class="col-sm-12 col-md-3"
      >
        <MovieCard :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MovieCard from "./MovieCard.vue";
import Movie from "../../types/Movie";

const props = defineProps<{
  movies: Movie[]
}>()
</script>