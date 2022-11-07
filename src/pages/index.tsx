import Image from 'next/image'
import Link from 'next/link'
import Layout from '~/layouts/default'

export default function HomePage() {
  return (
    <Layout>
      <section className="flex flex-col items-center mt-20 mx-10">
        <Image
          className="md:hidden"
          src="/wdc_logo.png"
          alt="Web Development Club Logo"
          width={400}
          height={200}
        />
        <div className="flex mt-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent">
              Web Development Club
            </h1>
            <p className="mt-3 ">1337 Khouribga Web Development Club</p>
            <Link href="/subjects" className="mt-4 btn btn-primary">
              Get Started
            </Link>
          </div>
          <div className="flex-1 hidden md:flex">
            <Image
              src="/wdc_logo.png"
              alt="Web Development Club Logo"
              width={400}
              height={200}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
