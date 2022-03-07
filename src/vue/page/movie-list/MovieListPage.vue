<template>
  <div>
    <MovieCardList v-if="initialized" :movies="movies" />
    <h4 v-if="loading">Laden...</h4>
    <div class="d-grid gap-2 pt-3">
      <button class="btn btn-lg btn-primary btn-block" @click="loadMoreMovies">
        Load more
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MovieApiClient from "../../../api/MovieApiClient";
import Movie from "../../../types/Movie";
import { onMounted, Ref, ref } from "vue";
import MovieCardList from "../../components/MovieCardList.vue";

let initialized = ref(false);
let loading = ref(true);
let movies: Ref<Movie[]> = ref([]);
let page = ref(1);

onMounted(async () => {
  movies.value = await fetchMovies()
  initialized.value = true;
});

async function fetchMovies(): Promise<Movie[]> {
  loading.value = true;
  const response = await MovieApiClient.getTopRatedMovies(page.value);
  loading.value = false;

  return response.results;
}

async function loadMoreMovies(): Promise<void> {
  page.value += 1;

  const moreMovies = await fetchMovies();

  movies.value = movies.value.concat(...moreMovies);
}
</script>