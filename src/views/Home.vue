<template>
  <svg
    aria-hidden="true"
    class="pointer-events-none sticky top-0 -z-50 -mb-[100vh] size-full h-svh fill-neutral-400/80"
  >
    <defs>
      <pattern
        id="dotPattern"
        :width="20"
        :height="20"
        patternUnits="userSpaceOnUse"
        patternContentUnits="userSpaceOnUse"
        :x="x"
        :y="y"
      >
        <circle id="pattern-circle" :cx="1" :cy="1" :r="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth="0" fill="url(#dotPattern)" />
  </svg>

  <NavBar class="px-[7.5%] sm:px-[10%] lg:px-[15%] lg:py-0" />
  <main class="px-[7.5%] sm:px-[10%] lg:px-[15%] lg:py-0">
    <Hero />
    <AboutUs />
  </main>
</template>

<script setup lang="ts">
  import NavBar from '@/components/NavBar.vue';
  import Hero from '@/sections/Hero.vue';
  import AboutUs from '@/sections/AboutUs.vue';
  import { ref } from 'vue';
  // import gsap from 'gsap';

  const x = ref(0);
  const y = ref(0);

  // onMounted(() => {
  //   const angle = ref(0);
  //   const radius = 20;

  //   gsap.to(angle, {
  //     value: 360,
  //     duration: 25,
  //     ease: 'linear',
  //     repeat: -1,
  //     onUpdate: () => {
  //       const radian = (angle.value * Math.PI) / 180;

  //       x.value = Math.cos(radian) * radius;
  //       y.value = Math.sin(radian) * radius;
  //     },
  //   });
  // });
</script>
