<template>
  <div>
    <h4 class="text-center mb-3">
      Go to <router-link to="/movies">movies</router-link>
    </h4>
    <MovieCardList :movies="watchList.getWatchListMovies()">
      <template #no-movies>
        There are no movies in your watchlist.
      </template>
    </MovieCardList>
  </div>
</template>

<script lang="ts" setup>
import MovieCardList from "../../components/MovieCardList.vue";
import useWatchlist from "../../hook/useWatchlist";

const watchList = useWatchlist();
</script>