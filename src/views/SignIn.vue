<script setup lang="ts">
import { ref } from 'vue';
import Header from '../components/Header.vue'

type SignIn = {
  email: string;
  password: string;
}

const form = ref({} as SignIn)

</script>

<template>
  <Header />
  <div class="container mx-auto px-8">

    <img src="../assets/login-astronaut.svg" alt="Astronauta Sentado" class="block mx-auto pt-5">

    <div class="font-semibold text-center pt-10">
      <h1 class="text-xl text-[#323232]">Bem-vindo de volta!</h1>
      <p class="text-description-gray text-xs mt-2">Acesse sua conta</p>
    </div>

    <div class="pt-5">
      <input 
        v-model="form.email"
        placeholder="E-mail"
        maxlength="25"
        class="border-[3px] border-default-purple focus:outline-none rounded-lg py-3 px-4 w-full mb-3 text-xs text-light-gray placeholder:text-light-gray placeholder:text-xs"
      >
      <input 
        v-model="form.password"
        placeholder="Senha"
        class="border-[3px] border-default-purple focus:outline-none rounded-lg py-3 px-4 w-full mb-[13px] text-xs text-light-gray placeholder:text-light-gray placeholder:text-xs"
      >
    </div>

    <div class="pb-8 text-white font-semibold text-xs">
      <button class="block rounded-lg bg-default-purple w-full py-2.5 mb-2.5" @click="">Entrar</button>
      <button class="block rounded-lg bg-default-gray w-full py-2.5" @click="">Cadastre-se</button>
    </div>
  </div>
</template>