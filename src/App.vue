<template>
  <nav v-show="!isRouteWithoutNav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
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
