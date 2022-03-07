<template>
<div>
  <slot></slot>
</div>
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

function watchListContains(movie: Movie): boolean {
  return watchList.value.filter(it => it.id === movie.id).length > 0;
}

function getWatchList(): Movie[] {
  return watchList.value;
}

function removeFromWatchList(movie: Movie) {
  const index = watchList.value.indexOf(movie);

  if (index !== -1) {
    watchList.value.splice(index, 1);
  }
}

function addToWatchList(movie: Movie) {
  watchList.value.push(movie);
}

provide('watchListContext', {
  watchListContains,
  removeFromWatchList,
  getWatchList,
  addToWatchList
} as WatchListContext)
</script>