<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div class="flex w-1/2 flex-col items-center">
      <h2 class="text-center text-8xl font-bold">404</h2>
      <h3 class="my-2 text-center text-2xl font-medium">Not Found</h3>
      <p class="text-foreground/30 text-center text-sm">
        The page you're trying to access <br />
        could not be found
      </p>
      <RouterLink to="/dashboard/home">
        <Button class="mt-4" variant="outline" prepend-icon="ArrowLeft"
          >Back to Home</Button
        >
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Button } from '@/components/ui/button';
</script>
