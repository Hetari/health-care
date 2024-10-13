<script setup lang="ts">
  import {
    Popover,
    PopoverTrigger,
    PopoverContent,
  } from '@/components/ui/popover';
  import { Separator } from '@/components/ui/separator';
  import { Input } from '@/components/ui/input';
  import { computed, ref, onMounted, onUnmounted } from 'vue';
  import { useRoute } from 'vue-router';
  import router from '@/router';
  import { APP_MENU } from '@/config/app';

  const search = ref<string>('');
  const isFocused = ref<boolean>(false);
  const activeIndex = ref<number>(-1);
  const route = useRoute();
  const handleFocus = (e: FocusEvent & { isFocused: boolean }) => {
    activeIndex.value = -1;
    isFocused.value = e.isFocused;
  };

  const mappedMenu = Object.entries(APP_MENU).flatMap(([key, value]) => {
    return value.routes.map((r) => ({
      ...r,
      section: value.name,
      key: `${key}-${r.path}`,
      description: `${value.name}: ${r.description || r.title}`,
    }));
  });

  const searchList = computed(() => {
    return mappedMenu
      .filter(
        (item) =>
          item.title.toLowerCase().includes(search.value.toLowerCase()) ||
          item.description.toLowerCase().includes(search.value.toLowerCase()) ||
          item.section.toLowerCase().includes(search.value.toLowerCase()),
      )
      .map((menu) => ({
        ...menu,
        isActive: route.path === `/dashboard/${menu.path}`,
      }));
  });

  const onKeyDown = (e: KeyboardEvent) => {
    if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) {
      e.preventDefault();
      if (
        e.key === 'ArrowDown' &&
        activeIndex.value < searchList.value.length - 1
      ) {
        activeIndex.value++;
      }
      if (e.key === 'ArrowUp' && activeIndex.value > 0) {
        activeIndex.value--;
      }
      if (e.key === 'Enter') {
        const current = searchList.value[activeIndex.value];
        isFocused.value = false;
        if (!current.isActive) {
          router.push(`/dashboard/${current.path}`);
          (
            document.getElementById('globalSearchInput')
              ?.children[1] as HTMLInputElement
          ).blur();
        }
      }
    }
  };

  const handleClick = (path: string) => {
    const toRoute = `/dashboard/${path}`;
    router.push(toRoute);
  };

  const handleGlobalSearchTrigger = (e: KeyboardEvent) => {
    const input = document.getElementById('globalSearchInput')
      ?.children[1] as HTMLInputElement;
    if (
      (e.shiftKey && e.metaKey && e.key === 'g') ||
      (e.shiftKey && e.ctrlKey && e.key === 'g')
    ) {
      e.preventDefault();
      input.focus();
    }
    if (e.key === 'Escape') {
      input.blur();
    }
  };

  onMounted(() => {
    window.addEventListener('keydown', handleGlobalSearchTrigger);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleGlobalSearchTrigger);
  });
</script>

<template>
  <Popover :open="isFocused">
    <PopoverTrigger class="w-full">
      <Input
        id="globalSearchInput"
        v-model="search"
        placeholder="Search..."
        prepend-icon="Search"
        class="global-search__input w-full"
        @focus="handleFocus"
        @blur="handleFocus"
        @keydown="onKeyDown"
      ></Input>
    </PopoverTrigger>
    <PopoverContent class="custom_scroll mt-2 h-96 w-[500px]">
      <div class="pb-4">
        <h4 class="mb-2 text-lg font-semibold">Pages</h4>
        <ul>
          <li
            v-for="(menu, i) in searchList"
            :key="menu.key"
            class="mb-2 flex items-center rounded-lg border p-2"
            :class="[
              menu.isActive ? 'dark:bg-muted/40 bg-gray-100' : 'cursor-pointer',
              i === activeIndex ? 'border-primary border-2' : '',
            ]"
            @click="handleClick(menu.path)"
          >
            <div
              class="dark:bg-muted mr-4 flex h-12 w-12 items-center justify-center rounded-md bg-violet-100"
            >
              <span
                class="dark:text-foreground flex items-center text-violet-500"
                ><Icon :name="menu.icon"
              /></span>
            </div>
            <div>
              <p class="font-medium">{{ menu.title }}</p>
              <p class="text-sm text-slate-500">{{ menu.description }}</p>
            </div>
          </li>
        </ul>
      </div>
      <Separator />
      <div class="py-4">
        <h4 class="mb-2 text-lg font-semibold">In This Page</h4>
        <p class="text-muted">Or your custom search result here</p>
      </div>
    </PopoverContent>
  </Popover>
</template>
