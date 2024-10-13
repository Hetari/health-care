<script setup lang="ts">
  import { Toggle } from '@/components/ui/toggle';
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from '@/components/ui/tooltip';
  import { Button } from '@/components/ui/button';
  import { ScrollArea } from '@/components/ui/scroll-area';
  import router, { base } from '@/router';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { APP_MENU } from '@/config/app';
  import { ArrowLeftToLine } from 'lucide-vue-next';
  import { useAppStore } from '@/stores/app';

  const route = useRoute();

  const menus = computed(() =>
    Object.entries(APP_MENU).map(([key, value]) => ({
      key,
      name: value.name,
      routes: value.routes.map((r) => ({
        ...r,
        active: `/dashboard/${r.path}` === route.path,
      })),
    })),
  );

  const handleNavigate = (path: string) => {
    router.push(path);
    if (window.innerWidth < 1025) {
      store.toggleSidebar();
    }
  };

  const store = useAppStore();

  const toggleSidebar = () => {
    store.toggleSidebar();
  };
</script>

<template>
  <div
    class="sidebar duration-400 bg-background fixed h-screen overflow-hidden border-r-[1px] transition-all"
    :style="{ width: `${store.wrapperWidth}px` }"
  >
    <div class="relative flex h-full flex-col justify-between">
      <div>
        <div class="h-[64px]">
          <div
            class="fixed z-10 flex h-[64px] items-center justify-between border-b-[1px] px-4"
            :style="{ width: `${store.sidebarExpanded ? 280 : 64}px` }"
          >
            <transition name="fade">
              <h2
                v-show="store.sidebarExpanded"
                class="flex items-center text-2xl font-semibold"
              >
                <span class="text-foreground">
                  <span class="mr-0 flex items-center justify-center">
                    <Icon name="Boxes" />
                  </span>
                </span>
                Health Care
              </h2>
            </transition>
            <Button
              variant="outline"
              class="h-8 w-8 p-[6px] transition-all duration-200"
              :class="
                store.sidebarExpanded ? 'bg-transparent' : 'dark:bg-white'
              "
              @click="toggleSidebar"
            >
              <ArrowLeftToLine
                class="transition-all duration-500"
                :class="!store.sidebarExpanded && 'rotate-180 text-black'"
              />
            </Button>
          </div>
        </div>
        <ScrollArea style="height: calc(100vh - 64px)">
          <div
            v-for="menu in menus"
            :key="menu.key"
            class="border-b-[1px] transition-all"
            :class="store.sidebarExpanded ? 'p-4' : 'p-2'"
          >
            <p
              v-show="store.sidebarExpanded"
              class="mb-2 text-xs font-light uppercase tracking-widest text-gray-400 transition-all delay-100 duration-300"
              :class="
                store.sidebarExpanded
                  ? 'visible opacity-100'
                  : 'invisible opacity-0'
              "
            >
              {{ menu.name }}
            </p>
            <ul>
              <li
                v-for="child in menu.routes"
                :key="`${menu.key}-${child.path}`"
                class="mb-1 flex items-center rounded-md"
              >
                <TooltipProvider :disable-hoverable-content="true">
                  <Tooltip :delay-duration="0">
                    <TooltipTrigger class="w-full">
                      <Toggle
                        class="w-full justify-start overflow-x-hidden duration-150"
                        :pressed="child.active"
                        @click="handleNavigate(child.path)"
                      >
                        <span
                          class="flex items-center"
                          :class="store.sidebarExpanded ? 'mr-4' : 'm-0'"
                        >
                          <Icon :name="child.icon" />
                        </span>
                        <transition name="fade" :duration="300">
                          <span v-show="store.sidebarExpand">{{
                            child.title
                          }}</span>
                        </transition>
                      </Toggle>
                    </TooltipTrigger>
                    <template v-if="!store.sidebarExpanded">
                      <TooltipContent side="right">
                        <p class="text-sm">{{ child.title }}</p>
                      </TooltipContent>
                    </template>
                  </Tooltip>
                </TooltipProvider>
              </li>
            </ul>
          </div>
          <div
            class="border-b-[1px] transition-all"
            :class="store.sidebarExpanded ? 'p-4' : 'p-2'"
          >
            <p
              v-show="store.sidebarExpanded"
              class="mb-2 text-xs font-light uppercase tracking-widest text-gray-400 transition-all delay-100 duration-300"
              :class="
                store.sidebarExpanded
                  ? 'visible opacity-100'
                  : 'invisible opacity-0'
              "
            >
              Misc
            </p>
            <ul>
              <li class="mb-1 flex items-center rounded-md">
                <TooltipProvider :disable-hoverable-content="true">
                  <Tooltip :delay-duration="0">
                    <TooltipTrigger class="w-full">
                      <Toggle
                        class="w-full justify-start overflow-x-hidden duration-150"
                        @click="handleNavigate(`${base}/not-found`)"
                      >
                        <span
                          class="flex items-center"
                          :class="store.sidebarExpanded ? 'mr-4' : 'm-0'"
                        >
                          <Icon name="AlertTriangle" />
                        </span>
                        <transition name="fade" :duration="300">
                          <span v-show="store.sidebarExpand">404 Page</span>
                        </transition>
                      </Toggle>
                    </TooltipTrigger>
                    <template v-if="!store.sidebarExpanded">
                      <TooltipContent side="right">
                        <p class="text-sm">404 Page</p>
                      </TooltipContent>
                    </template>
                  </Tooltip>
                </TooltipProvider>
              </li>
              <li class="mb-1 flex items-center rounded-md">
                <TooltipProvider :disable-hoverable-content="true">
                  <Tooltip :delay-duration="0">
                    <TooltipTrigger class="w-full">
                      <Toggle
                        class="w-full justify-start overflow-x-hidden duration-150"
                        @click="$router.push(`${base}/login`)"
                      >
                        <span
                          class="flex items-center"
                          :class="store.sidebarExpanded ? 'mr-4' : 'm-0'"
                        >
                          <Icon name="LogIn" />
                        </span>
                        <transition name="fade" :duration="300">
                          <span v-show="store.sidebarExpand">Login</span>
                        </transition>
                      </Toggle>
                    </TooltipTrigger>
                    <template v-if="!store.sidebarExpanded">
                      <TooltipContent side="right" class="bg-white">
                        <p class="text-sm">Login</p>
                      </TooltipContent>
                    </template>
                  </Tooltip>
                </TooltipProvider>
              </li>
            </ul>
          </div>
        </ScrollArea>
      </div>

      <div
        class="duration-400 border-t-[1px] py-4 transition-all"
        :class="store.sidebarExpanded ? 'opacity-100' : 'opacity-0'"
      >
        <p class="text-foreground/50 text-center text-xs">
          &copy; {{ new Date().getFullYear() }} Hetari - All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>
