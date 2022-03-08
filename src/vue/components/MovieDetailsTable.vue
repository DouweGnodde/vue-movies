<template>
  <table class="table">
    <tbody>
    <tr>
      <td>Release date</td>
      <td>{{ movieDetails.release_date }}</td>
    </tr>
    <tr v-if="movieDetails.vote_average">
      <td>Rating</td>
      <td>{{ movieDetails.vote_average }} / 10 ({{ movieDetails.vote_count }} votes)</td>
    </tr>
    <tr v-if="movieDetails.genres.length > 0">
      <td>Genres</td>
      <td>
        <div
            v-for="genre in movieDetails.genres"
            :key="genre.id"
            class="badge bg-dark"
            style="margin-right: 0.3rem"
        >
          {{ genre.name }}
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import MovieDetails from "../../types/MovieDetails";

const props = defineProps<{
  movieDetails: MovieDetails
}>()
</script>