import ThemeSwitcher from './ThemeSwitcher'
import Logo from './Logo'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="m-2 p-2 bg-base-300 flex items-center shadow-lg rounded-box">
      <Logo />
      <div className="mx-8 space-x-4">
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/subjects" className="link link-hover">
          Subjects
        </Link>
      </div>
      <div className="flex-1" />
      <ThemeSwitcher />
    </nav>
  )
}
