export const API_KEY = import.meta.env.VITE_API_KEY ?? ''

if (!API_KEY) {
  console.warn('API_KEY is not defined')
}
