import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { invariant } from '~/features/core/helpers/invariant'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from '~/features/core/helpers/db.server'

invariant(
  process.env.GITHUB_ID && process.env.GITHUB_SECRET,
  'GITHUB_ID && GITHUB_SECRET required',
)
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
}

export default NextAuth(authOptions)
