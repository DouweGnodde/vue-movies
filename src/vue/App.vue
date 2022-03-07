<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import 'bootstrap/dist/css/bootstrap.css';
import DefaultLayout from "./layouts/default/DefaultLayout.vue";

</script>

<template>
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
</template>

