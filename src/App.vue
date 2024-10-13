<template>
  <!-- <nav class="flex h-10 gap-10 px-10" v-show="!isRouteWithoutNav">
    <router-link
      v-for="route in $router.options.routes"
      :key="route.path"
      :to="{ name: route.name }"
      >{{ route.name }}</router-link
    >
  </nav> -->

  <ScrollArea class="h-screen">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <ScrollBar class="z-50" />
  </ScrollArea>
</template>

<script setup lang="ts">
  import { computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { base } from './router';
  import { useAppStore } from './stores/app';
  const route = useRoute();
  const routesWithoutNav = ['Login', 'Register', 'not-found'];

  const isRouteWithoutNav = computed(() =>
    routesWithoutNav.includes(route.name as string),
  );

  onMounted(() => {
    useAppStore().initTheme();
  });
</script>

<style scoped></style>
