import User from '@/models/User'
import { API } from '..'

export async function logIn(email: string) {
  const result = { data: null, error: null }
  await API.get('/user/email', {
    params: {
      email: email
    }
  })
    .then((response) => {
      result.data = response.data
    })
    .catch((error) => {
      console.log(error)
      result.error = error
    })
  return result
}

export function convertUser(user: any) {
  return new User({
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    password: user.password
  })
}
