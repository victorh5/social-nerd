<script setup lang="ts">
import Header from '../components/Header.vue'
import RegisterForm from '../components/RegisterForm.vue'
import RegisterActions from '../components/RegisterActions.vue'
</script>

<template>
  <Header />
  <div class="container mx-auto px-8">
    <img src="../assets/astronauta-register.svg" alt="Astronauta Página Registro">
    <p>Crie já a sua conta e acesse um novo mundo</p>
    <RegisterForm />
    <RegisterActions />
  </div>
</template>