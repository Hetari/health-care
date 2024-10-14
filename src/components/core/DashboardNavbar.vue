<script setup lang="ts">
  import GlobalSearchPopover from '@/components/core/GlobalSearchPopover.vue';
  import { Avatar, AvatarImage } from '@/components/ui/avatar';
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu';
  import Breadcrumb from '@/components/ui/Breadcrumb.vue';
  import { LogOut, User, Bell, Sun, MoonStar, Menu } from 'lucide-vue-next';
  import { Button } from '@/components/ui/button';
  import { useAppStore } from '@/stores/app';
  import router from '@/router';

  const store = useAppStore();

  const toggleMode = () => {
    store.toggleTheme();
  };
</script>

<template>
  <nav
    class="fixed top-0 z-40 flex h-[64px] items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-lg"
    :style="{ width: store.navWidth }"
  >
    <div class="hidden w-24 lg:block">
      <Breadcrumb />
    </div>
    <div class="hidden w-2/5 lg:block">
      <GlobalSearchPopover />
    </div>
    <Button
      variant="outline"
      class="block h-8 w-8 p-[6px] transition-all duration-200 lg:hidden"
      :class="store.sidebarExpanded ? 'bg-transparent' : 'dark:bg-white'"
      @click="store.toggleSidebar()"
    >
      <Menu class="text-black transition-all duration-500" />
    </Button>
    <div class="flex items-center">
      <Button
        @click.prevent="router.push({ name: 'Notifications' })"
        variant="outline"
        class="h-8 w-8 border-0 p-[6px]"
      >
        <Bell />
      </Button>

      <Button
        variant="outline"
        class="ml-2 h-8 w-8 border-0 p-[6px]"
        @click="toggleMode"
      >
        <Sun v-if="store.isDark" />
        <MoonStar v-else />
      </Button>
      <div class="mx-2 h-[24px] w-[1px] border-x-[1px] border-gray-300"></div>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button
            variant="outline"
            class="flex w-full max-w-[200px] items-center justify-start border-0"
          >
            <Avatar class="h-8 w-8">
              <AvatarImage src="https://github.com/hetari.png"></AvatarImage>
            </Avatar>
            <span
              class="ml-2 hidden flex-col items-start justify-start md:flex"
            >
              <p class="mb-0">Ebraheem Alhetari</p>

              <small class="text-xs font-light text-slate-400"
                >hetari4all@email.com</small
              >
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="relative mr-4 w-56">
          <DropdownMenuLabel>John Doe</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User class="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut class="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </nav>
</template>
