<script setup>
import Header from './components/Header.vue';
import HelloWorld from './components/HelloWorld.vue'
import CompetencesSection from './components/CompetencesSection.vue';
import Realisation from './components/Realisation.vue';

</script>

<template>
  <header>
    <Header msg="" />
  </header>

  <main>
    <HelloWorld msg="" /> 
    <CompetencesSection msg=""/>
    <Realisation msg=""/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

</style>
