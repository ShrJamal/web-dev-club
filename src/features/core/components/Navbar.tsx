import ThemeSwitcher from './ThemeSwitcher'
import { MdMenu } from 'react-icons/md'
import UserAvatar from '~/features/auth/UserAvatar'
import Logo from './Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  return (
    <nav className="m-2 p-2 bg-base-300 flex items-center shadow-lg rounded-box">
      <Logo />
      <div className="flex-1" />
      <ThemeSwitcher />
      <UserAvatar />
    </nav>
  )
}
