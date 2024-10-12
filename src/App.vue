<template>
  <nav v-show="!isRouteWithoutNav">
    <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'Login' }">Login</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const routesWithoutNav = ['/login', '/register'];
  const isRouteWithoutNav = computed(() =>
    routesWithoutNav.includes(route.path),
  );
</script>

<style scoped></style>
