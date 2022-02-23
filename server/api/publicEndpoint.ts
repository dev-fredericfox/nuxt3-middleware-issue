import { useCookies, useQuery } from 'h3'

export default async (req, res) => {
  const cookies = useCookies(req)
  const message = "I am the public route"
  return { message, cookies }
}