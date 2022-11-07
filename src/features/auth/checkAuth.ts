import type { IncomingMessage, ServerResponse } from 'http'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '~/pages/api/auth/[...nextauth]'

export default async function checkAuthentication(
  req: IncomingMessage & {
    cookies: Partial<{
      [key: string]: string
    }>
  },
  res: ServerResponse<IncomingMessage>,
) {
  const session = await unstable_getServerSession(req, res, authOptions)
  const isLogged = !!session?.user
  const path = req.url

  if (isLogged) {
    if (path === '/auth')
      return {
        props: {},
        redirect: {
          destination: '/',
        },
      }
  } else if (path !== '/auth') {
    return {
      props: {},
      redirect: {
        destination: '/auth',
      },
    }
  }
  return null
}
