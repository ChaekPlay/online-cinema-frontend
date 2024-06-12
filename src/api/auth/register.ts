import type User from '@/models/User'
import { API } from '..'

export async function registerUser(newUser: User) {
  const result = { data: null, error: null }
  console.log(newUser)
  await API.post(
    '/user',
    {
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phoneNumber,
      password: newUser.password,
      profileImageURL: ''
    },
    {
      params: {
        role: newUser.userRole
      }
    }
  )
    .then((response) => {
      result.data = response.data
    })
    .catch((error) => {
      console.log(error)
      result.error = error
    })
  return result
}
