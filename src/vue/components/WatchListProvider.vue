<template>
  <div><slot></slot></div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, effect, provide } from "vue";
import Movie from "../../types/Movie";
import WatchListContext from "../../types/WatchListContext";

const LOCAL_STORAGE_KEY = 'vueMovies-watchlist';

const watchList = ref<Movie[]>([]);

loadExistingWatchList();

function loadExistingWatchList() {
  const existingWatchList = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (existingWatchList) {
    watchList.value = JSON.parse(existingWatchList);
  }
}

effect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(watchList.value));
})

function getWatchListMovies(): Movie[] {
  return watchList.value;
}

function removeFromWatchList(movie: Movie) {
  const index = watchList.value.findIndex(it => it.id === movie.id);

  if (index !== -1) {
    watchList.value.splice(index, 1);
  }
}

function addToWatchList(movie: Movie) {
  watchList.value.push(movie);
}

provide('watchListContext', {
  removeFromWatchList,
  getWatchListMovies,
  addToWatchList
} as WatchListContext)
</script>