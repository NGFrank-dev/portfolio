<template>
    <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Titre de section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-[#203C79] mb-4">COMPÉTENCES</h2>
        <div class="w-32 h-0.5 bg-blue-500 mx-auto"></div>
      </div>

      <!-- Grid des compétences -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- Développement Front End (Slider) -->
        <div class="bg-gray-50 border-2 border-blue-200 rounded-xl p-8 text-center">
          <h3 class="text-xl md:text-2xl font-bold text-blue-600 mb-2">
            {{ currentSlide.title }}
          </h3>
          <h4 class="text-lg text-gray-600 mb-6">{{ currentSlide.subtitle }}</h4>
          <p class="text-lg text-gray-600 mb-6">{{ currentSlide.description }}</p>
          
          <!-- Placeholder pour image -->
          <div class="bg-[#fff] h-48 rounded-lg mb-6 flex items-center justify-center">
            <img :src="currentSlide.image" :alt="currentSlide.title" class="w-399 h-48 object-cover rounded-lg mb-6">
          </div>
          
          <!-- Indicateurs de slide -->
          <div class="flex justify-center space-x-2">
            <div 
              v-for="(slide, index) in slides" 
              :key="index"
              class="w-3 h-3 rounded-full cursor-pointer transition-colors"
              :class="currentSlideIndex === index ? 'bg-blue-500' : 'bg-gray-300'"
              @click="goToSlide(index)"
            ></div>
          </div>
        </div>

        <!-- Design UI/UX -->
        <div class="bg-gradient-to-r from-[#1A7AC0] via-[#1A7ABE] to-[#203C79] text-white rounded-xl p-8 text-center ">
          <h3 class="text-xl md:text-2xl font-bold mb-6 mt-[30px]">Design UI/UX</h3>
          
          <div class="mb-6">
            <p class="text-sm mb-4 text-center ">
              Conception d'interfaces utilisateur modernes et intuitives avec Figma.
              Expérience en prototypage et en design collaboratif sur Figma.
            </p>
            <p class="text-xs">
              Réalisation de supports visuels professionnels (flyers, présentations, réseaux sociaux) avec Canva.
              Maîtrise de Canva pour la création rapide de contenus graphiques adaptés à différents formats.
            </p>
            <div class="flex justify-between items-center">
            <div class=" w-16 h-16 rounded-lg flex items-center justify-center">
              <img src="../../public/canva.png" alt="">
            </div>
            <div class="bg-white w-16 h-16 rounded-lg flex items-center justify-center">
              <img src="../../public/figma.png" alt="">
            </div>
          </div>
          </div>

          <!-- Placeholder pour logos -->
          
        </div>
      </div>

      <!-- Deuxième rangée -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Outils Bureautique -->
        <div class="bg-gradient-to-r from-[#1A7AC0] via-[#1A7ABE] to-[#203C79] text-white rounded-xl p-8">
          <h3 class="text-xl md:text-2xl font-bold mb-4">Outils Bureautique</h3>
          <p class="text-sm mb-6">
            Compétent dans l'utilisation des logiciels bureautiques pour assurer efficacité et organisation dans le travail.
          </p>
          
          <!-- Placeholder pour image -->
          <div class=" h-32 rounded-lg flex items-center justify-center">
            <img src="../../public/office.png" alt="" class="w-209 h-170">
          </div>
        </div>

        <!-- Analyse de données -->
        <div class="bg-blue-600 text-white rounded-xl p-8">
          <h3 class="text-xl md:text-2xl font-bold mb-4">Analyse de données</h3>
          <p class="text-sm mb-6">
            Bonne maîtrise des concepts UML pour l'analyse fonctionnelle et technique des projets logiciels.
          </p>
          
          <!-- Placeholder pour image -->
          <div class=" h-32 rounded-lg flex items-center justify-center">
            <img src="../../public/uml.png" alt="" class="w-209 h-70">
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'CompetencesSection',
  setup() {
    const currentSlideIndex = ref(0)
    let slideInterval = null

    const slides = ref([
      {
        title: 'Développement D’application',
        subtitle: 'Front End',
        description: '',
        image: '../../public/5.png'
      },
      {
        title: 'HTML & CSS',
        subtitle: '',
        description: 'Compétence en intégration web avec HTML/CSS pour transformer des maquettes en interfaces fonctionnelles.',
        image: '../../public/6.png'
      },
      {
        title: 'JAVASCRIPT',
        subtitle: 'Bonne maîtrise de JavaScript pour dynamiser les pages web et améliorer l’expérience utilisateur.',
        description: '',
        image: '../../public/1.png'
      },
      {
        title: 'FRAMEWORK',
        subtitle: 'Développement d’interfaces dynamiques et modulaires avec React, React Native, Vue.',
        description: '',
        image: '../../public/7.jpg'
      }
    ])

    const currentSlide = ref(slides.value[0])

    const nextSlide = () => {
      currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length
      currentSlide.value = slides.value[currentSlideIndex.value]
    }

    const goToSlide = (index) => {
      currentSlideIndex.value = index
      currentSlide.value = slides.value[index]
      
      if (slideInterval) {
        clearInterval(slideInterval)
        startSlideshow()
      }
    }

    const startSlideshow = () => {
      slideInterval = setInterval(nextSlide, 7000)
    }

    onMounted(() => {
      startSlideshow()
    })

    onUnmounted(() => {
      if (slideInterval) {
        clearInterval(slideInterval)
      }
    })

    return {
      currentSlide,
      currentSlideIndex,
      slides,
      goToSlide
    }
  }
}
</script>

<style scoped>

</style>