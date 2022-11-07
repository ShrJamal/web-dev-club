import { useState } from 'react'
import { useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const dark = localStorage.getItem('theme') != 'light'
    if (isDark == dark) return
    setIsDark(!isDark)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function onChange() {
    const theme = isDark ? 'light' : 'dark'
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
    setIsDark(!isDark)
  }
  return (
    <button className="btn btn-ghost" onClick={onChange}>
      {isDark ? <FaMoon /> : <FaSun />}
    </button>
  )
}
