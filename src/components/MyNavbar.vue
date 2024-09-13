<template>
  <nav :class="[' mt-4 bg-white p-4  rounded-lg mr-8', { 'ml-20': collapsed, 'ml-10': !collapsed }]">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <i class="fas fa-search text-gray-500"></i>
        <input type="text" placeholder="Search..." class="focus:outline-none text-gray-600 bg-transparent placeholder-gray-400" />
      </div>

      <div class="flex items-center space-x-4">
        <div class="bg-purple-100 text-purple-600 px-2 py-1 rounded-md text-sm font-medium">
          Complete your profile
          <button class="text-purple px-4 py-2 rounded-md font-bold underline">Lets Go</button>
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <div class="bg-gray-100 flex items-center px-2 py-1 rounded-md">
          <button class="px-4 py-2 rounded-md"><i class="fas fa-bars"></i></button>
          <span>Board</span>
        </div>
      </div>

      <div class="bg-gray-100 flex items-center space-x-4 px-2 py-1 rounded-md">
        <button class="text-gray-600 px-4 py-2 hover:text-purple-600">
          <i class="fas fa-bell"></i>
        </button>
        <div class="w-px h-6 bg-gray-300"></div>
        <button class="text-gray-600 px-4 py-2 hover:text-purple-600">
          <i class="fas fa-question-circle"></i>
        </button>
        <div class="w-px h-6 bg-gray-300"></div>
        <button class="text-gray-600 px-4 py-2 hover:text-purple-600">
          <i class="fas fa-cog"></i>
        </button>
      </div>

      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2">
          <img :src="profileimg" alt="Profile" class="h-8 w-8 rounded-full" />
          <div class="flex flex-col">
            <span class="text-gray-600">Aman</span>
            <span class="text-sm text-gray-400">Customer</span>
          </div>
          <i class="fas fa-chevron-up text-white border rounded-full p-1 border-purple-600 bg-purple-600 cursor-pointer"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import profileimg from '@/assets/images/profileIMG.jpg'

// const props = defineProps(['collapsed']);
</script>

<style scoped>
/* You can add any specific styling if needed */
</style>
