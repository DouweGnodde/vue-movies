<template>
  <WatchListProvider>
    <DefaultNavBar />
    <DefaultHeader />
    <DefaultPageContent>
      <slot></slot>
    </DefaultPageContent>
    <DefaultFooter />
  </WatchListProvider>
</template>

<script lang="ts" setup>
import DefaultNavBar from "./components/DefaultNavBar.vue";
import DefaultHeader from "./components/DefaultHeader.vue";
import DefaultPageContent from "./components/DefaultPageContent.vue";
import DefaultFooter from "./components/DefaultFooter.vue";
import WatchListProvider from "../../components/WatchListProvider.vue";
</script>