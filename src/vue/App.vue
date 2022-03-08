<template>
  <WatchListProvider>
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </WatchListProvider>
</template>

<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.css';
import DefaultLayout from "./layouts/default/DefaultLayout.vue";
import WatchListProvider from "./components/WatchListProvider.vue";

</script>
