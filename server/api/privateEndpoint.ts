import { useCookies, useQuery } from 'h3'

// This endpoint is protected by /mmiddleware/admin.ts
export default async (req, res) => {
  const cookies = useCookies(req)
  const message = "I am the protected route, you should never see me."
  return { message, cookies }
}