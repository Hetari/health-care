<script setup lang="ts">
  import DashboardSidebar from '@/components/core/sidebar/DashboardSidebar.vue';
  import DashboardNavbar from '@/components/core/DashboardNavbar.vue';
  import { useAppStore } from '@/stores/app';

  const store = useAppStore();
</script>

<template>
  <div>
    <DashboardSidebar />
    <div
      class="app-container dashboard-main relative"
      :style="`left: ${store.wrapperLeftOffset}px; width: calc(100% - ${store.wrapperLeftOffset}px)`"
    >
      <DashboardNavbar />
      <div class="m-auto mt-[64px] max-w-[1440px] p-2 lg:p-6">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>
