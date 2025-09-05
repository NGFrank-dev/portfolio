<template>
  <header class="bg-white shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <div class="flex items-center">
            <!-- Placeholder pour le logo - remplacez par votre logo -->
            <div class="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold">
              <img src="../../public/logo.png" alt="">
            </div>
          </div>
        </div>

        <!-- Menu navigation desktop -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a
              v-for="item in menuItems"
              :key="item.name"
              href="#"
              class="text-[#1A7ABE] hover:text-[#203C79] hover:text-[16px]  px-3 py-2 text-sm font-medium transition-colors duration-500 p-3 hover:border-b hover:border-[#1A7ABE]"
              :class="{ 'text-[#203C79]': item.active }"
            >
              {{ item.name }}
            </a>
          </div>
        </div>

        <!-- Bouton contact desktop -->
        <div class="hidden md:block">
          <button class="bg-transparent border-2 border-[#1A7ABE] text-[#203C79] hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-lg px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200">
            Me contacter
          </button>
        </div>

        <!-- Menu hamburger mobile -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span class="sr-only">Ouvrir le menu</span>
            <!-- Icon hamburger -->
            <svg
              :class="{ 'hidden': isMobileMenuOpen, 'block': !isMobileMenuOpen }"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon close -->
            <svg
              :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Menu mobile -->
      <div
        :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }"
        class="md:hidden"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          <a
            v-for="item in menuItems"
            :key="item.name"
            href="#"
            class="text-[#1A7ABE] hover:text-[#203C79] hover:text-[16px] block px-3 py-2 text-base font-medium transition-colors duration-600 p-3 hover:border-b hover:border-[#1A7ABE]"
            :class="{ 'text-[#203C79]': item.active }"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </a>
          <div class="pt-4">
            <button class="w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200">
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>

</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Header',
  setup() {
    const isMobileMenuOpen = ref(false)
    
    const menuItems = ref([
      { name: 'Profil', active: false },
      { name: 'Expériences', active: false },
      { name: 'Réalisations', active: false },
      { name: 'Formations', active: false },
      { name: 'Compétences', active: false }
    ])

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false
    }

    return {
      isMobileMenuOpen,
      menuItems,
      toggleMobileMenu,
      closeMobileMenu
    }
  }
}
</script>