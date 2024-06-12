import { API } from '@/api'
import { convertUser, logIn } from '@/api/auth/log_in'
import { registerUser } from '@/api/auth/register'
import User from '@/models/User'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref({} as User)

  if (localStorage.getItem('user')) {
    user.value = JSON.parse(localStorage.getItem('user')!).user
  }
  async function register(newUser: User) {
    let res = { data: null, error: null }
    res = await registerUser(newUser)
    console.log(res)
    if (res.error) return false
    user.value = newUser
    API.defaults.auth = {
      username: user.value.email,
      password: user.value.password
    }
    return true
  }
  async function login(email: string, password: string) {
    let res = { data: null, error: null }
    res = await logIn(email)
    if (res.error) return false
    const newUser = convertUser(res.data)
    user.value = newUser
    API.defaults.auth = {
      username: user.value.email,
      password: password
    }
    console.log(API.defaults.auth)
    return true
  }
  function logout() {
    user.value = {} as User
    console.log('logout')
    API.defaults.auth = undefined
  }
  function isEmpty() {
    return Object.keys(user.value).length === 0
  }

  return { user, register, login, logout, isEmpty }
})
