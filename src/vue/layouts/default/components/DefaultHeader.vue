<template>
  <header class="bg-dark py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="text-center text-white">
        <h1 class="display-4 fw-bolder">{{ route.meta?.title || 'Vue Movies' }}</h1>
        <p class="lead fw-normal text-white-50 mb-0">Your source of quality movies</p>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();

</script>