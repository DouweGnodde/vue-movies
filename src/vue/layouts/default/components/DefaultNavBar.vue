<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <router-link class="navbar-brand" to="/">
        <span style="color: #42b883; font-weight: 400">Vue</span> Movies
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item">
            <router-link to="/movies">Movies</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <router-link to="/watch-list" class="btn btn-outline-dark">
            <i class="bi-cart-fill me-1"></i>
            Watchlist
            <span class="badge bg-dark text-white ms-1 rounded-pill">
              {{ watchList.getWatchListMovies().length }}
            </span>
          </router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import useWatchlist from "../../../hook/useWatchlist";

const watchList = useWatchlist();
</script>