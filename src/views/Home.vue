<template>
  <svg
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 -z-50 size-full fill-neutral-400/80"
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
  </main>
</template>

<script setup lang="ts">
  import NavBar from '@/components/NavBar.vue';
  import Hero from '@/sections/Hero.vue';
  import { ref } from 'vue';
  // import gsap from 'gsap';

  const x = ref(-100);
  const y = ref(-100);

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
