<template>
  <div class="flex h-screen bg-[#f3f4f6]">
    <!-- Sidebar -->
    <MySidebar :collapsed="collapsed" @toggle-sidebar="toggleSidebar" />

    <!-- Main Content Area -->
    <div class="flex flex-col flex-1">
      <!-- Navbar -->
      <MyNavbar :collapsed="collapsed" />

      <!-- Page Content -->
      <div class="flex-1 p-6 overflow-y-auto bg-[#f3f4f6]">
        <MyHome />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import MyNavbar from './components/MyNavbar.vue';
import MySidebar from './components/MySidebar.vue';
import MyHome from './views/MyHome.vue';

export default {
  name: 'App',
  components: {
    MyNavbar,
    MySidebar,
    MyHome
  },
  setup() {
    const collapsed = ref(false);

    const toggleSidebar = () => {
      collapsed.value = !collapsed.value;
    };

    return { collapsed, toggleSidebar };
  }
}
</script>

<style>
/* Ensure that the layout adjusts based on the sidebar's width */
.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}
</style>
