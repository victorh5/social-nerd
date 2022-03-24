<script setup lang="ts">
import { ref } from 'vue'
import Header from '../components/Header.vue'
import RegisterForm from '../components/RegisterForm.vue'
import RegisterActions from '../components/RegisterActions.vue'

export type UserType = {
  name?: string;
  nickname?: string;
  birthday?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
}
let userInformation = ref({} as UserType)
const userRegistrationInfo = (data: UserType) => {
  userInformation.value = data
}
</script>

<template>
  <Header />
  <div class="container mx-auto px-8">
    <img src="../assets/astronauta-register.svg" alt="Astronauta Página Registro" class="mx-auto">
    <p class="text-center mb-4 text-description-gray font-semibold text-xs">Crie já a sua conta e acesse um novo mundo</p>
    <RegisterForm @catchInfo="userRegistrationInfo" />
    <RegisterActions :user-information="userInformation" />
  </div>
</template>