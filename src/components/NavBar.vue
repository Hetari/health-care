<template>
  <div
    :class="$attrs.class"
    class="sticky top-0 z-50 overflow-x-clip lg:relative"
  >
    <div
      class="mx-auto flex w-full max-w-[1440px] justify-between justify-items-center py-6"
    >
      <div class="relative top-3 flex items-start text-lg">
        <RouterLink class="flex font-semibold" :to="{ name: 'Home' }"
          >Healthy.com
          <span class="text-xs">&copy;</span>
        </RouterLink>
      </div>

      <nav
        id="nav"
        aria-role="Main"
        aria-label="Main Navigation"
        role="navigation"
        class="relative z-0 flex justify-between rounded-full border-2 border-black bg-white text-lg uppercase leading-[22px] dark:border-slate-700 dark:bg-slate-950"
      >
        <div class="relative">
          <ul class="flex">
            <li
              class="flex items-center border border-transparent"
              v-for="(link, index) in links"
              :key="index"
            >
              <a
                class="flex items-start px-7 py-3 text-white mix-blend-difference"
                :href="link.name"
              >
                {{ link.label }}
              </a>
            </li>

            <li
              id="nav-pointer"
              class="absolute -z-10 rounded-full bg-black opacity-0"
            />
          </ul>
        </div>
      </nav>

      <div class="">
        <button
          class="h-full w-full rounded-full bg-black px-7 py-3 text-white"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  //   import { Button } from './ui/button';
  import gsap from 'gsap';
  import { onMounted, ref } from 'vue';

  const links = ref([
    { name: '#app', label: 'Home' },
    // { name: 'Home', label: 'About me' },
    { name: '#pages', label: 'Pages' },
  ]);

  onMounted(() => {
    const listItems: HTMLElement[] = gsap.utils.toArray('#nav li');
    const navPointer = document.getElementById('nav-pointer');

    listItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        gsap.set(navPointer, {
          width: item.offsetWidth,
          height: item.offsetHeight,
        });

        gsap.to(navPointer, {
          x: item.offsetLeft,
          opacity: 1,
          ease: 'power2.out',
          //   duration: 0.3,
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(navPointer, {
          opacity: 0,
          ease: 'power4.out',
        });
      });
    });
  });
</script>
