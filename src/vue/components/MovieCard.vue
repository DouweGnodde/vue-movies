<template>
  <div class="card">
    <div
        v-if="watchList"
        class="badge bg-dark text-white position-absolute"
        style="top: 0.5rem; right: 0.5rem; cursor: pointer"
        @click="toggleWatchList"
    >
      <span v-if="watchList.watchListContains(movie)">
        x Remove from watchlist
      </span>
      <span v-else>
        + Add to watchlist
      </span>

    </div>
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

const props = defineProps<{
  movie: Movie
}>()

const watchList = useWatchlist();

function toggleWatchList(): void {
  if (watchList.watchListContains(props.movie)) {
    watchList.removeFromWatchList(props.movie);
  } else {
    watchList.addToWatchList(props.movie);
  }
}
</script>