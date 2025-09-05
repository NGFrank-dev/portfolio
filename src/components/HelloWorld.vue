<template>
  <section class="min-h-screen bg-gray-50 flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Contenu texte -->
        <div class="text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#203C79] mb-2">
            Frank Durand
          </h1>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#203C79] mb-6">
            SOKOHEN NG.
          </h2>
          
          <h3 class="text-xl md:text-2xl text-blue-500 font-medium mb-8">
            Développeur Front End & Designer
          </h3>
          
          <p class="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Titulaire d'une licence en Génie Logiciel, je suis passionné 
            par le design et le développement web. J'allie créativité 
            et compétences techniques pour créer des interfaces modernes, 
            ergonomiques et adaptées aux besoins des utilisateurs.
          </p>
          
          <button class="bg-[#203C79] hover:bg-blue-700 hover:scale-105 hover:shadow-lg 
               transition duration-300 ease-in-out text-white font-medium px-8 py-3 rounded-lg">
            Voir mes projets
          </button>
        </div>

        <!-- Avatar avec cercles -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative w-80 h-80 md:w-96 md:h-96">
            <!-- Cercles décoratifs -->
            <div class="absolute inset-0">
              <svg viewBox="0 0 400 400" class="w-full h-full">
                <!-- Cercle extérieur -->
                <circle 
                  cx="200" 
                  cy="200" 
                  r="140" 
                  fill="none" 
                  stroke="#203C79" 
                  stroke-width="1"
                  opacity="0.4"
                />
                <!-- Forme en croissant -->
                <path 
                  d="M 200,20 A 180,180 0 0,1 200,380 A 140,140 0 0,0 200,60 Z" 
                  fill="#4f46e5"
                  opacity="0.8"
                />
                <!-- Cercle central blanc -->
                <circle 
                  cx="200" 
                  cy="200" 
                  r="120" 
                  fill="white"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
              </svg>
            </div>
            
            <!-- Avatar/Icône utilisateur -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-24 h-24 text-gray-400">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HeroSection',
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
  },
}
</script>

<style scoped>
/* Styles additionnels si nécessaire */
</style>