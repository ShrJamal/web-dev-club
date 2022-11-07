import { signIn } from 'next-auth/react'
import { FaGithub } from 'react-icons/fa'

import type { GetServerSideProps } from 'next'
import Layout from '~/layouts/default'
import Image from 'next/image'
import checkAuthentication from '~/features/auth/checkAuth'

export default function LoginPage() {
  return (
    <Layout>
      <div className="h-full flex flex-col justify-center items-center">
        <Image
          src="/wdc_logo.png"
          className="w-auto"
          alt="Logo"
          width={200}
          height={20}
        />
        <h1 className="mt-4 text-4xl font-bold">Welcome back</h1>
        <p className="text-sm text-slate-500">
          Sign in with your github account
        </p>
        <button
          className="mt-10 btn btn-active text-lg px-20 "
          onClick={() => signIn('github')}
        >
          <FaGithub className="mr-4" size={20} />
          Github
        </button>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const check = await checkAuthentication(req, res)
  if (check) return check
  return { props: {} }
}
