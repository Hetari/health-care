<template>
  <nav class="flex h-10 gap-10 px-10" v-show="!isRouteWithoutNav">
    <router-link
      v-for="route in $router.options.routes"
      :key="route.path"
      :to="{ name: route.name }"
      >{{ route.name }}</router-link
    >
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { base } from './routes';
  const route = useRoute();
  const routesWithoutNav = ['/login', '/register'].map((r) => base + r);

  const isRouteWithoutNav = computed(() =>
    routesWithoutNav.includes(route.path),
  );
</script>

<style scoped></style>
