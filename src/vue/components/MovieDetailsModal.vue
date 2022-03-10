<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog" v-if="movie">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ movie.title }}</h5>
          <button type="button" class="btn-close" @click="close" />
        </div>
        <div class="modal-body">
          <Loader :loading="loading">
            <template v-if="movieDetails">
              <MoviePoster :movie="movie" size="original"  />
              <div class="mb-2 text-center" v-if="movieDetails.tagline">
                <i>{{ movieDetails.tagline }}</i>
              </div>
              <b>Overview</b>
              <p>{{ movie.overview }}</p>
              <MovieDetailsTable :movie-details="movieDetails" />
            </template>
          </Loader>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="close">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Movie from "../../types/Movie";
import MoviePoster from "./MoviePoster.vue";
import { ref } from "vue";
import MovieDetails from "../../types/MovieDetails";
import MovieApiClient from "../../api/MovieApiClient";
import Loader from "./Loader.vue";
import { closeModal, openModal } from "../../util/modal";
import MovieDetailsTable from "./MovieDetailsTable.vue";

const movie = ref<Movie|null>(null);
const movieDetails = ref<MovieDetails|null>(null);
const loading = ref(false);

const modal = ref<HTMLDivElement|null>(null);

async function open(movieVal: Movie): Promise<void> {
  movie.value = movieVal;

  const modalDiv = modal.value;

  if (!modalDiv) {
    return;
  }

  loading.value = true;
  openModal(modalDiv);

  movieDetails.value = await MovieApiClient.getMovieDetails(movieVal.id);
  loading.value = false;
}

function close(): void {
  const modalDiv = modal.value;

  if (!modalDiv) {
    return;
  }

  closeModal(modalDiv);
}

defineExpose({
  close,
  open
})

</script>