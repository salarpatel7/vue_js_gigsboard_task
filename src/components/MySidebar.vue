<template>
    <div :class="[collapsed ? 'w-20' : 'w-64', 'bg-white h-screen shadow-lg transition-all duration-300 mt-4 border rounded-lg ']">
      <!-- Sidebar Header (Logo and Toggle) -->
      <div class="p-4 flex justify-between items-center">
        <img v-if="!collapsed" :src="logo" alt="Logo" class="h-8" />
        <button @click="toggleSidebar" class="text-gray-500 rounded-full p-1">
          <i :class="collapsed ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></i>
        </button>
      </div>
  
      <!-- Sidebar Links -->
      <ul class="space-y-8 mt-6 ">
        <li v-for="item in sidebarItems" :key="item.name" class="flex items-center cursor-pointer hover:bg-purple-100 hover:p-3 text-gray-600 hover:text-purple-600">
          <i :class="item.icon" class="ml-4"></i>
          <span v-if="!collapsed" class="ml-4">{{ item.name }}</span>
        </li>
      </ul>

      <!-- <div class="mt-8 p-4 bg-purple-600 ">
      <p class="text-white text-semibold" v-if="!collapsed">Try Mobile App Version</p>
      <button
        v-if="!collapsed"
        class="mt-2 w-full bg-white- text-gray-400 py-2 px-4 rounded-lg hover:bg-purple-700 transition-all duration-200"
      >
        Download
      </button>
    </div> -->
    </div>

   
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  import logo from '@/assets/images/12.png';

  const emit = defineEmits(['toggle-sidebar']);
  const collapsed = ref(false);
  
  const sidebarItems = [
    { name: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { name: 'Home', icon: 'fas fa-home' },
    { name: 'Jobs', icon: 'fas fa-briefcase' },
    { name: 'Chat', icon: 'fas fa-comments' },
    { name: 'My Network', icon: 'fas fa-users' },
    { name: 'Refer a Friend', icon: 'fas fa-user-friends' },
    { name: 'Coupon', icon: 'fas fa-tag' },
    { name: 'Settings', icon: 'fas fa-cog' },
  ];
  
  const toggleSidebar = () => {
    collapsed.value = !collapsed.value;
    emit('toggle-sidebar');
  };
  </script>
  