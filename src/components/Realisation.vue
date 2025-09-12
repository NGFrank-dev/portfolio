<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Titre de section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-[#203C79] mb-4">RÉALISATIONS</h2>
        <div class="w-32 h-0.5 bg-blue-500 mx-auto"></div>
      </div>

      <div class="space-y-8">
        <!-- Slider 1: Portail Universitaire -->
        <div class="relative">
          <div class="overflow-hidden rounded-xl">
            <div 
              class="flex transition-transform duration-500 ease-in-out" 
              :style="{ transform: `translateX(-${currentSlidePortail * 100}%)` }"
            >
              <!-- Slide 1 du Portail -->
              <div class="w-full flex-shrink-0">
                <div class="bg-gradient-to-r from-[#1A7ABE] to-blue-500 p-8 text-white">
                  <h3 class="text-2xl md:text-3xl font-bold text-center mb-6">
                    PORTAIL UNIVERSITAIRE
                  </h3>
                  
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <p class="text-sm md:text-base leading-relaxed mb-6">
                        Développement d'un portail web universitaire permettant aux étudiants et enseignants 
                        d'accéder à diverses informations et services académiques. L'interface 
                        a été conçue pour être simple, moderne et responsive afin de faciliter l'accès sur 
                        ordinateur comme sur mobile.
                      </p>
                      <button class="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-[#203C79] hover:text-white hover:scale-105 hover:shadow-lg  transition-colors duration-300">
                        Voir en ligne
                      </button>
                    </div>
                    
                    <div class="bg-blue-400/30 h-48 md:h-64 rounded-lg flex items-center justify-center">
                      <img src="../../public/U1.png" alt="" class="h-48 md:h-64 rounded-lg ">
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide 2 du Portail (détails techniques) -->
              <div class="w-full flex-shrink-0">
                <div class="bg-gradient-to-r from-[#1A7ABE] to-blue-600 p-8 text-white">
                  <h3 class="text-2xl md:text-3xl font-bold text-center mb-6">
                    PORTAIL - DÉTAILS TECHNIQUES
                  </h3>
                  
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <ul class="text-sm md:text-base space-y-3 mb-6">
                        <li>• Technologies: Vue.js, PHP, MySQL</li>
                        <li>• Design responsive et moderne</li>
                        <li>• Système d'authentification sécurisé</li>
                        <li>• Interface administrateur</li>
                        <li>• Gestion des notes et emplois du temps</li>
                      </ul>
                      <button class="bg-white text-blue-600 hover:bg-[#203C79] hover:scale-105 hover:shadow-lg px-6 py-2 rounded-lg font-medium hover:text-white transition-colors">
                        Code source
                      </button>
                    </div>
                    
                    <div class="bg-blue-500/30 h-48 md:h-64 rounded-lg flex items-center justify-center">
                      <img src="../../public/U4.png" alt="" class="h-48 md:h-64 rounded-lg ">
                    </div>
                  </div>
                </div>
              </div>

               <!-- Slide 3 image du projet -->
              <div class="w-full flex-shrink-0">
                <div class="bg-gradient-to-r from-[#1A7ABE] to-blue-600 p-8 text-white">
                  <h3 class="text-2xl md:text-3xl font-bold text-center mb-6">
                    QUELQUE IMAGES
                  </h3>
                  
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div class="bg-blue-500/30 h-48 md:h-64 rounded-lg flex items-center justify-center">
                      <img src="../../public/U5.png" alt="" class="h-48 md:h-64 rounded-lg ">
                    </div>
                    
                    <div class="bg-blue-500/30 h-48 md:h-64 rounded-lg flex items-center justify-center">
                      <img src="../../public/U6.png" alt="" class="h-48 md:h-64 rounded-lg ">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contrôles Portail -->
          <div class="flex justify-center items-center mt-4 space-x-4">
            <button 
              @click="prevSlidePortail"
              :disabled="currentSlidePortail === 0"
              class="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div class="flex space-x-2">
              <div
                v-for="index in 3"
                :key="index"
                @click="goToSlidePortail(index - 1)"
                class="w-2 h-2 rounded-full cursor-pointer transition-colors"
                :class="currentSlidePortail === (index - 1) ? 'bg-blue-600' : 'bg-gray-300'"
              ></div>
            </div>

            <button 
              @click="nextSlidePortail"
              :disabled="currentSlidePortail === 2"
              class="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Slider 2: Application DA VINCI -->
        <div class="relative">
          <div class="overflow-hidden rounded-xl">
            <div 
              class="flex transition-transform duration-500 ease-in-out" 
              :style="{ transform: `translateX(-${currentSlideDaVinci * 100}%)` }"
            >
              <!-- Slide 1 de DA VINCI -->
              <div class="w-full flex-shrink-0">
                <div class="bg-white border-2 border-blue-200 p-8">
                  <h3 class="text-xl md:text-2xl font-bold text-blue-600 text-center mb-6">
                    Application de prestation de service développer à DA VINCI
                  </h3>
                  
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="bg-gray-100 h-32 md:h-48 rounded-lg flex items-center justify-center">
                      <img src="../../public/5.png" alt="" class="h-32 md:h-48 rounded-lg">
                    </div>
                    <div class="bg-gray-100 h-32 md:h-48 rounded-lg flex items-center justify-center">
                      <img src="" alt="" class="h-32 md:h-48 rounded-lg">
                    </div>
                    <div class="bg-gray-100 h-32 md:h-48 rounded-lg flex items-center justify-center">
                      <img src="" alt="" class="h-32 md:h-48 rounded-lg">
                    </div>
                  </div>
                  
                  <div class="text-center mt-6">
                    <button class="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors">
                      Voir en ligne
                    </button>
                  </div>
                </div>
              </div>

              <!-- Slide 2 de DA VINCI (fonctionnalités) -->
              <div class="w-full flex-shrink-0">
                <div class="bg-white border-2 border-green-200 p-8">
                  <h3 class="text-xl md:text-2xl font-bold text-green-600 text-center mb-6">
                    DA VINCI - FONCTIONNALITÉS
                  </h3>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <ul class="text-gray-700 space-y-3 mb-6">
                        <li>• Système de réservation en temps réel</li>
                        <li>• Gestion des prestataires et clients</li>
                        <li>• Paiement en ligne sécurisé</li>
                        <li>• Notifications push</li>
                        <li>• Système d'évaluation</li>
                        <li>• Géolocalisation des services</li>
                      </ul>
                      <button class="border-2 border-green-600 text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-green-600 hover:text-white transition-colors">
                        Documentation
                      </button>
                    </div>
                    
                    <div class="bg-gray-100 h-48 md:h-64 rounded-lg flex items-center justify-center">
                      <span class="text-gray-500 text-sm">Diagrammes fonctionnels</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide 3 de DA VINCI (stack technique) -->
              <div class="w-full flex-shrink-0">
                <div class="bg-gradient-to-r from-purple-600 to-purple-500 p-8 text-white">
                  <h3 class="text-xl md:text-2xl font-bold text-center mb-6">
                    DA VINCI - STACK TECHNIQUE
                  </h3>
                  
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div class="bg-white/20 p-4 rounded-lg text-center">
                      <span class="text-sm font-medium">React Native</span>
                    </div>
                    <div class="bg-white/20 p-4 rounded-lg text-center">
                      <span class="text-sm font-medium">Node.js</span>
                    </div>
                    <div class="bg-white/20 p-4 rounded-lg text-center">
                      <span class="text-sm font-medium">MongoDB</span>
                    </div>
                    <div class="bg-white/20 p-4 rounded-lg text-center">
                      <span class="text-sm font-medium">AWS</span>
                    </div>
                  </div>
                  
                  <div class="text-center">
                    <button class="bg-white text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Voir le code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contrôles DA VINCI -->
          <div class="flex justify-center items-center mt-4 space-x-4">
            <button 
              @click="prevSlideDaVinci"
              :disabled="currentSlideDaVinci === 0"
              class="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div class="flex space-x-2">
              <div
                v-for="index in 3"
                :key="index"
                @click="goToSlideDaVinci(index - 1)"
                class="w-2 h-2 rounded-full cursor-pointer transition-colors"
                :class="currentSlideDaVinci === (index - 1) ? 'bg-blue-600' : 'bg-gray-300'"
              ></div>
            </div>

            <button 
              @click="nextSlideDaVinci"
              :disabled="currentSlideDaVinci === 2"
              class="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'RealisationsSection',
  setup() {
    // Slider Portail Universitaire
    const currentSlidePortail = ref(0)

    const nextSlidePortail = () => {
      if (currentSlidePortail.value < 2) {
        currentSlidePortail.value++
      }
    }

    const prevSlidePortail = () => {
      if (currentSlidePortail.value > 0) {
        currentSlidePortail.value--
      }
    }

    const goToSlidePortail = (index) => {
      currentSlidePortail.value = index
    }

    // Slider Application DA VINCI
    const currentSlideDaVinci = ref(0)

    const nextSlideDaVinci = () => {
      if (currentSlideDaVinci.value < 2) {
        currentSlideDaVinci.value++
      }
    }

    const prevSlideDaVinci = () => {
      if (currentSlideDaVinci.value > 0) {
        currentSlideDaVinci.value--
      }
    }

    const goToSlideDaVinci = (index) => {
      currentSlideDaVinci.value = index
    }

    return {
      // Portail Universitaire
      currentSlidePortail,
      nextSlidePortail,
      prevSlidePortail,
      goToSlidePortail,
      
      // Application DA VINCI
      currentSlideDaVinci,
      nextSlideDaVinci,
      prevSlideDaVinci,
      goToSlideDaVinci
    }
  }
}
</script>