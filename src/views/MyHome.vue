<template>
  <div class="bg-[#f3f4f6] h-screen p-4 overflow-x-hidden">
    <div class="bg-white p-2 border rounded-lg flex justify-between items-center mb-4">
      <!-- Tab buttons and search bar -->
      <div class="flex space-x-4">
        <button
          @click="currentTab = 'Jobs'"
          :class="['cursor-pointer p-2 px-8 border rounded font-semibold', currentTab === 'Jobs' ? 'bg-purple-100 text-purple-600' : 'border-purple-600 text-gray-500']"
        >
          Jobs
        </button>
        <button
          @click="currentTab = 'Contracts'"
          :class="['cursor-pointer p-2 px-8 border rounded font-semibold', currentTab === 'Contracts' ? 'bg-purple-100 text-purple-600' : 'border-purple-600 text-gray-500']"
        >
          Contracts
        </button>
        <button
          @click="currentTab = 'Projects'"
          :class="['cursor-pointer p-2 px-8 border rounded font-semibold', currentTab === 'Projects' ? 'bg-purple-100 text-purple-600' : 'border-purple-600 text-gray-500']"
        >
          Projects
        </button>
      </div>
      <!-- Search Field -->
      <div class="flex-grow ml-8 flex justify-end">
        <div class="relative w-1/2">
          <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search..."
            class="w-full pl-10 p-2 border border-gray-400 rounded"
          />
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div v-if="currentTab === 'Projects'" class="flex space-x-4">
      <!-- In Planning -->
      <div class="w-1/3 bg-purple-50 p-4 rounded-xl shadow-lg">
        <h4 class="text-xl font-semibold mb-4">In Planning</h4>
        <draggable v-model="inPlanning" group="projects" class="min-h-[200px]">
          <template #item="{ element }">
            <div
              class="bg-white rounded-xl p-4 mb-2 shadow border border-gray-200"
            >
              <div class="flex justify-between items-center mb-2">
                <span class="text-xs text-gray-500">{{ element.id }}</span>
                <span class="text-xs bg-gray-200 text-gray-500 rounded-full px-2 py-1">{{ element.status }}</span>
              </div>
              <h4 class="text-md font-semibold mb-2">{{ element.title }}</h4>
              <div class="text-sm text-gray-600">
                <p>Industry vertical: <span class="font-semibold">{{ element.industry }}</span></p>
                <p>Type: <span class="font-semibold">{{ element.type }}</span></p>
                <p>Requirements count: <span class="font-semibold">{{ element.requirementsCount }}</span></p>
              </div>
              <div class="mt-4 text-xs text-gray-500">
                <p>Published Date: {{ element.publishedDate }}</p>
                <p>Start Date: {{ element.startDate }}</p>
              </div>
            </div>
          </template>
        </draggable>
      </div>

      <!-- In Execution -->
      <div class="w-1/3 bg-purple-50 p-4 rounded-xl shadow-lg">
        <h4 class="text-xl font-semibold mb-4">In Execution</h4>
        <draggable v-model="inExecution" group="projects" class="min-h-[200px]">
          <template #item="{ element }">
            <div
              class="bg-white rounded-xl p-4 mb-2 shadow border border-gray-200"
            >
              <div class="flex justify-between items-center mb-2">
                <span class="text-xs text-gray-500">{{ element.id }}</span>
                <span class="text-xs bg-green-200 text-green-600 rounded-full px-2 py-1">{{ element.status }}</span>
              </div>
              <h4 class="text-md font-semibold mb-2">{{ element.title }}</h4>
              <div class="text-sm text-gray-600">
                <p>Industry vertical: <span class="font-semibold">{{ element.industry }}</span></p>
                <p>Type: <span class="font-semibold">{{ element.type }}</span></p>
                <p>Requirements count: <span class="font-semibold">{{ element.requirementsCount }}</span></p>
              </div>
              <div class="mt-4 text-xs text-gray-500">
                <p>Published Date: {{ element.publishedDate }}</p>
                <p>Start Date: {{ element.startDate }}</p>
              </div>
            </div>
          </template>
        </draggable>
      </div>

      <!-- Completed -->
      <div class="w-1/3 bg-purple-50 p-4 rounded-xl shadow-lg">
        <h4 class="text-xl font-semibold mb-4">Completed</h4>
        <draggable v-model="completed" group="projects" class="min-h-[200px]">
          <template #item="{ element }">
            <div
              class="bg-white rounded-xl p-4 mb-2 shadow border border-gray-200"
            >
              <div class="flex justify-between items-center mb-2">
                <span class="text-xs text-gray-500">{{ element.id }}</span>
                <span class="text-xs bg-green-200 text-green-600 rounded-full px-2 py-1">{{ element.status }}</span>
              </div>
              <h4 class="text-md font-semibold mb-2">{{ element.title }}</h4>
              <div class="text-sm text-gray-600">
                <p>Industry vertical: <span class="font-semibold">{{ element.industry }}</span></p>
                <p>Type: <span class="font-semibold">{{ element.type }}</span></p>
                <p>Requirements count: <span class="font-semibold">{{ element.requirementsCount }}</span></p>
              </div>
              <div class="mt-4 text-xs text-gray-500">
                <p>Published Date: {{ element.publishedDate }}</p>
                <p>Start Date: {{ element.startDate }}</p>
              </div>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable'; // Import draggable

const currentTab = ref('Projects');
const searchQuery = ref('');

const inPlanning = ref([
  {
    id: '#CON27148',
    title: 'CMS web application for Event Management Company',
    industry: 'Ecommerce',
    type: 'Small Job',
    requirementsCount: 1,
    publishedDate: '2024-05-28',
    startDate: '2024-05-28',
    status: 'Draft'
  }
]);

const inExecution = ref([
  {
    id: '#CON27148',
    title: 'Android App Development',
    industry: 'Ecommerce',
    type: 'Small Job',
    requirementsCount: 1,
    publishedDate: '2024-05-28',
    startDate: '2024-05-28',
    status: 'Active'
  }
]);

const completed = ref([
  {
    id: '#CON27148',
    title: 'Web App Development',
    industry: 'Ecommerce',
    type: 'Small Job',
    requirementsCount: 1,
    publishedDate: '2024-05-28',
    startDate: '2024-05-28',
    status: 'Completed'
  }
]);
</script>
