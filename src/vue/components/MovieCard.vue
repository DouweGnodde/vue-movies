<template>
  <div class="card">
     <WatchlistToggleBadge :movie="movie" />
     <MoviePoster :url="movie.poster_path" size="w342"  />
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">{{ movie.overview}} </p>
        <a href="#" class="btn btn-primary">Read more...</a>
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
</script>