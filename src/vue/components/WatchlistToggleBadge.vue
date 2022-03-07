<template>
  <div
      v-if="watchList"
      class="badge bg-dark text-white position-absolute"
      style="top: 0.5rem; right: 0.5rem; cursor: pointer"
      @click="toggleWatchList"
  >
      <span v-if="inWatchlist">
        x Remove from watchlist
      </span>
      <span v-else>
        + Add to watchlist
      </span>
  </div>
</template>

<script lang="ts" setup>
import Movie from "../../types/Movie";
import useWatchlist from "../hook/useWatchlist";
import { computed } from "vue";

const props = defineProps<{
  movie: Movie
}>()

const watchList = useWatchlist();
const inWatchlist = computed(() => watchList.getWatchListMovies().findIndex(it => it.id === props.movie.id) !== -1)

function toggleWatchList(): void {
  if (inWatchlist.value) {
    watchList.removeFromWatchList(props.movie);
  } else {
    watchList.addToWatchList(props.movie);
  }
}
</script>