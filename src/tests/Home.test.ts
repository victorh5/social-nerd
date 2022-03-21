import { mount } from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import Home from '../views/Home.vue'

describe("Testes da Página Home", () => {
  const wrapper = mount(Home)
  it('Home Existe', () => {
    expect(Home).toBeTruthy()
  })

  it('Deve Conter o Titulo', () => {
    let title = wrapper.find('.text-xl')
    expect(title.text()).toBe('Bem-vindo(a) ao SOCIALNERD')
  })

  it('Deve Conter Botão Registre-se', async() => {
    let button = wrapper.find('.bg-default-purple')
    expect(button.text()).toBe('Registre-se')
  })

  it('Deve Conter Botão Entrar', async() => {
    let button = wrapper.find('.bg-default-gray')
    expect(button.text()).toBe('Entrar')
  })
})