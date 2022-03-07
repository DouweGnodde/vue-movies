<template>
  <div>
    <h5 class="text-center">
      Go to <router-link to="/movies">movies</router-link>
    </h5>
    <MovieCardList :movies="watchList.getWatchList()">
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