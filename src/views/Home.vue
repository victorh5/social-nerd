<script setup lang="ts">
import Header from '../components/Header.vue'
import router from '../router'

function register() {
  router.push({name: 'Register'})
}
function login() {
  console.log('Está clicando no botão de entrar')
}
</script>

<template>
  <Header />
  <div class="container mx-auto px-8">

    <div class="flex justify-between relative top-[50px]">
      <img src="../assets/astronauta-jab.svg" alt="Astronauta Jab">
      <img src="../assets/dois-astronautas.svg" alt="Dois Astronautas">
    </div>
    <img src="../assets/astronauta-sentado.svg" alt="Astronauta Sentado" class="block mx-auto">

    <div class="font-semibold text-center">
      <h1 class="text-xl text-[#323232]">Bem-vindo(a) ao SOCIALNERD</h1>
      <p class="text-[#808080] text-xs mt-2">Junte-se a mais de 100 milhões de pessoas que usam o SOCIALNERD para conversar com seus amigos e comunidade</p>
    </div>

    <div class="mt-16 text-white font-semibold text-xs">
      <button class="block rounded-lg bg-default-purple w-full py-2.5 mb-2.5" @click="register">Cadastre-se</button>
      <button class="block rounded-lg bg-default-gray w-full py-2.5" @click="login">Entrar</button>
    </div>
  </div>
</template>