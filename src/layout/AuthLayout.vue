<template>
  <div
    class="container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0"
  >
    <slot name="header">
      <p class="absolute right-4 top-4 md:right-8 md:top-8">
        <span class="text-gray-500"> Don't have an account? </span>
        <RouterLink :to="{ name: 'Register' }"> Register </RouterLink>
      </p>
    </slot>

    <div
      class="bg-muted relative hidden h-full flex-col p-10 text-white dark:border-r lg:flex"
    >
      <img
        class="absolute inset-0 size-full object-cover object-right brightness-[0.8]"
        :src="img"
        alt="background"
      />
      <div
        class="relative z-20 flex select-none items-center text-lg font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="mr-2 h-6 w-6"
        >
          <path
            d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
          />
        </svg>
        Ebraheem Alhetari
      </div>
      <div class="relative z-20 mt-auto">
        <!-- <blockquote class="space-y-2">
          <p class="text-lg">
            &ldquo;This library has saved me countless hours of work and helped
            me deliver stunning designs to my clients faster than ever
            before.&rdquo;
          </p>
          <footer class="text-sm">Sofia Davis</footer>
        </blockquote> -->
      </div>
    </div>

    <div class="lg:p-8">
      <div
        class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
      >
        <div class="flex flex-col space-y-2 text-center">
          <h1 class="text-2xl font-semibold tracking-tight">
            <slot name="formName">Login</slot>
          </h1>
        </div>

        <slot name="form">
          <UserAuthForm />
        </slot>

        <p class="text-muted-foreground px-8 text-center text-sm">
          By clicking continue, you agree to our
          <a
            href="/terms"
            class="hover:text-primary underline underline-offset-4"
          >
            Terms of Service
          </a>
          and
          <a
            href="/privacy"
            class="hover:text-primary underline underline-offset-4"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import UserAuthForm from '@/components/LoginAuthForm.vue';
  import { ref } from 'vue';
  import { bg1 } from '@/assets/images';
  const img = ref(bg1);
</script>
