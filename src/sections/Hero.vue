<template>
  <!-- <div class="grid grid-cols-1 sm:grid-cols-2"> -->
  <div
    class="flex min-h-[calc(100svh-10rem)] flex-col items-center justify-center space-y-10 sm:space-y-8"
  >
    <h1
      class="max-w-2xl bg-gradient-to-b from-black to-black/60 bg-clip-text text-center text-6xl font-bold text-transparent sm:text-9xl"
    >
      Empower Your Health
    </h1>

    <!-- Hero Subtitle -->
    <p
      class="max-w-lg text-center text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl"
    >
      Simplify your medical journey by <b>Healthy.com</b>, your personal health
      management platform.
    </p>

    <!-- <div
        class="flex w-fit select-none items-center rounded-full border border-black/50 px-5 py-1"
      >
        <Wrench class="mr-2 size-4 text-black/70" />
        Created by Ebraheem Alhetari
      </div> -->
    <!-- Call to Action -->
    <div>
      <button
        id="get-start"
        class="block rounded-[1rem] bg-black px-6 py-3 font-semibold text-white drop-shadow-2xl dark:bg-white sm:text-lg"
      >
        Get Started
      </button>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup lang="ts">
  import gsap from 'gsap';
  import { onMounted } from 'vue';

  onMounted(() => {
    const getStart = document.getElementById('get-start');

    getStart?.addEventListener('mouseenter', () => {
      gsap.to(getStart, {
        borderRadius: 75,
        scale: 1.1,
        // textShadow: '0 0 8px white',
        ease: 'power2.out',
        duration: 0.5,
      });
    });

    getStart?.addEventListener('mouseleave', () => {
      gsap.to(getStart, {
        borderRadius: 16,
        scale: 1,
        // textShadow: '0 0 0px white',
        duration: 0.3,
      });
    });
  });
</script>
