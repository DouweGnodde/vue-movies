<template>
  <div class="card">
     <WatchlistToggleBadge :movie="movie" />
     <MoviePoster :movie="movie" size="w342"  />
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <a class="btn btn-link ps-0" @click="emit('read-more')">Read more...</a>
      </div>
  </div>
</template>

<script lang="ts" setup>
import Movie from "../../types/Movie";
import WatchlistToggleBadge from "./WatchlistToggleBadge.vue";
import MoviePoster from "./MoviePoster.vue";

const props = defineProps<{
  movie: Movie
}>()

const emit = defineEmits(['read-more'])
</script>