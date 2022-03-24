<script setup lang="ts">
import { PropType } from 'vue';
import { UserType } from '../views/Register.vue'

const userRegistration = () => {
  if (props.userInformation.password == props.userInformation.passwordConfirmation) {
    console.log('Estou me cadastrando no sistema!')
    console.log(props.userInformation)
  } else {
    console.log('Erro no Cadastro!')
    props.userInformation.passwordConfirmation = ''
  }
}
// usar no lugar da função alreadyHaveAccount <$router.push({ name: 'Login' })>
const alreadyHaveAccount = () => console.log('Já tenho uma conta')

const props = defineProps({
  userInformation: {
    type: Object as PropType<UserType>,
    required: true
  }
})
</script>

<template>
  <div class="text-white font-semibold text-xs">
      <button class="block rounded-lg bg-default-purple w-full py-2.5 mb-2.5" @click="userRegistration">Confirmar Cadastro</button>
      <button class="block rounded-lg bg-default-gray w-full py-2.5" @click="alreadyHaveAccount">Já tenho uma conta</button>
    </div>
</template>