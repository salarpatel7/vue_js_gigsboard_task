<template>
  <div :class="[collapsed ? 'w-20' : 'w-64', 'bg-white h-screen shadow-lg transition-all duration-300 mt-4 border rounded-lg relative']">
    <!-- Sidebar Header (Logo and Toggle) -->
    <div class="p-4 flex justify-between items-center">
      <img v-if="!collapsed" :src="logo" alt="Logo" class="h-8" />
      <!-- Sidebar Toggle Button -->
      <button @click="toggleSidebar"
        class="text-gray-500 border rounded-full px-2 shadow-md absolute -right-4 top-20 transform -translate-y-1/2 bg-white">
        <i :class="collapsed ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></i>
      </button>
    </div>

    <!-- Sidebar Links -->
    <ul class="space-y-8 mt-6 px-4">
      <li v-for="item in sidebarItems" :key="item.name" 
          @click="setActive(item.name)"
          :class="['flex items-center cursor-pointer  hover:bg-purple-100 hover:p- text-gray-600 hover:text-purple-600  rounded-md p-2', 
                   activeItem === item.name ? 'bg-purple-100 p-3 text-purple-600' : '']">
        <i :class="item.icon" class="ml-4"></i>
        <span v-if="!collapsed" class="ml-4">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>



   

  
<script setup>
import { ref, defineEmits } from 'vue';
import logo from '@/assets/images/12.png';

const emit = defineEmits(['toggle-sidebar']);
const collapsed = ref(false);
const activeItem = ref('Jobs'); // Set 'Jobs' as the default active item

const sidebarItems = [
  { name: 'Dashboard', icon: 'fas fa-tachometer-alt' },
  { name: 'Home', icon: 'fas fa-home' },
  { name: 'Jobs', icon: 'fas fa-briefcase' }, // Default active item
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

// Function to set the active item
const setActive = (itemName) => {
  activeItem.value = itemName;
};
</script>

  