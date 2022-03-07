<template>
  <div class="card">
   <WatchlistToggleBadge :movie="movie" />
    <img
        class="card-img-top"
        :src="getPosterHref(movie.poster_path, 'w342')"
        alt="Movie poster"
    >
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <p class="card-text">{{ movie.overview}} </p>
      <a href="#" class="btn btn-primary">Read more...</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Movie from "../../types/Movie";
import getPosterHref from "../../poster/getPosterHref";
import useWatchlist from "../hook/useWatchlist";
import { computed } from "vue";
import WatchlistToggleBadge from "./WatchlistToggleBadge.vue";

const props = defineProps<{
  movie: Movie
}>()
</script>