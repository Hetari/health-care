<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <Label class="sr-only" for="email"> Email </Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            autocapitalize="none"
            autocomplete="email"
            autocorrect="off"
            :disabled="isLoading"
          />
        </div>

        <div class="grid gap-1">
          <Label class="sr-only" for="password"> Password </Label>
          <Input
            id="password"
            placeholder="password"
            type="password"
            autocapitalize="none"
            autocomplete="password"
            autocorrect="off"
            current-password
            :disabled="isLoading"
          />
        </div>

        <Button :disabled="isLoading"> Log In</Button>
      </div>
    </form>
    <!-- <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background text-muted-foreground px-2">
          Or continue with
        </span>
      </div>
    </div>
    <Button variant="outline" type="button" :disabled="isLoading">
      <LucideSpinner v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
      <GitHubLogo v-else class="mr-2 h-4 w-4" />
      GitHub
    </Button> -->
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import { cn } from '../lib/utils';

  import { Button } from './ui/button';
  import { Input } from './ui/input';
  import { Label } from './ui/label';

  const isLoading = ref(false);
  async function onSubmit(event: Event) {
    event.preventDefault();
    isLoading.value = true;

    setTimeout(() => {
      isLoading.value = false;
      alert('Signed in!');
    }, 3000);
  }
</script>
