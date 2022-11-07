import ThemeSwitcher from './ThemeSwitcher'
import Logo from './Logo'

export default function Navbar() {
  return (
    <nav className="m-2 p-2 bg-base-300 flex items-center shadow-lg rounded-box">
      <Logo />
      <div className="flex-1" />
      <ThemeSwitcher />
    </nav>
  )
}
