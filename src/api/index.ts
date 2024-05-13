import axios, { AxiosError, type AxiosResponse } from 'axios'

const client = {
  baseURL: import.meta.env.BASE_URL,
  async post(url: string, data: any) {
    await axios.post(url, data).catch((e: any) => e)
  },
  async get(url: string): Promise<AxiosResponse<any, AxiosError>> {
    return await axios
      .get(url)
      .catch((e: any) => e)
      .then((data) => data)
  }
}

export default client
