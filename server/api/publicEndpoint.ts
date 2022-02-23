import { useCookies, useQuery } from 'h3'
import * as functions from 'firebase-functions';

export default async (req, res) => {
  const cookies = useCookies(req)
  functions.logger.log("public endpoint cookies:",cookies);
  const message = "I am the public route"
  return { message, cookies }
}