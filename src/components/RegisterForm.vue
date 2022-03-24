<script setup lang="ts">
import { ref } from 'vue'
import { UserType } from '../views/Register.vue'

let user = ref({} as UserType)
const emit = defineEmits(['catchInfo'])
const sendInformation = () => {
  emit('catchInfo', user.value)
}
</script>

<template>
  <input 
    v-model="user.name"
    placeholder="Nome"
    class="border-[3px] border-default-purple focus:outline-none rounded-lg py-3 px-4 w-full mb-[13px] text-xs text-light-gray placeholder:text-light-gray placeholder:text-xs"
    :onblur="sendInformation"
  >
  <input 
    v-model="user.nickname"
    placeholder="Apelido"
    class="border-[3px] border-default-purple focus:outline-none rounded-lg py-3 px-4 w-full mb-3 text-xs text-light-gray placeholder:text-light-gray placeholder:text-xs"
    :onblur="sendInformation"
  >
  <input 
    v-model="user.birthday"
    placeholder="Dia do aniversário"
    class="border-[3px] border-default-purple focus:outline-none rounded-lg py-3 px-4 w-full mb-[13px] text-xs text-light-gray placeholder:text-light-gray placeholder:text-xs"
    :onblur="sendInformation"
  >
  <input 
    v-model="user.email"
    type="email"
    placeholder="E-mail"
    class="border-[3px] border-default-purple focus:outline-none rounded-lg py-3 px-4 w-full mb-3 text-xs text-light-gray placeholder:text-light-gray placeholder:text-xs"
    :onblur="sendInformation"
  >
  <input 
    v-model="user.password"
    type="password"
    placeholder="Senha"
    class="border-[3px] border-default-purple focus:outline-none rounded-lg py-3 px-4 w-full mb-3 text-xs text-light-gray placeholder:text-light-gray placeholder:text-xs"
    :onblur="sendInformation"
  >
  <input 
    v-model="user.passwordConfirmation"
    type="password"
    placeholder="Confirmação da senha"
    class="border-[3px] border-default-purple focus:outline-none rounded-lg py-3 px-4 w-full mb-2 text-xs text-light-gray placeholder:text-light-gray placeholder:text-xs"
    :onblur="sendInformation"
  >
</template>