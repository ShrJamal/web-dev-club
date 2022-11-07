import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { MdChevronLeft } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '~/pages/api/auth/[...nextauth]'
import type { GetServerSideProps } from 'next'

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Link href="/" className="btn btn-outline absolute top-8 left-8 ">
        <MdChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="m-8 mx-auto w-[350px] flex flex-col items-center space-y-6">
        {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
        <h1 className="text-4xl font-bold">Welcome back</h1>
        <p className="text-sm text-slate-500">
          Sign in with your github account
        </p>
        <button
          className="btn btn-primary text-lg px-20 capitalize"
          onClick={() => signIn('github')}
        >
          <FaGithub className="mr-4" size={20} />
          Github
        </button>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  console.log(session)
  if (session?.user) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    }
  }
  return { props: {} }
}
