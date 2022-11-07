import { useCallback, useState } from 'react'
import { useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false)
  const onChange = useCallback(
    (theme?: string) => {
      theme ??= 'light'
      const dark = theme === 'dark'
      localStorage.setItem('theme', theme)
      document.documentElement.setAttribute('data-theme', theme)
      if (isDark === dark) return
      setIsDark(!isDark)
    },
    [isDark],
  )
  useEffect(() => {
    if (typeof window === 'undefined') return
    onChange(localStorage.getItem('theme') || undefined)
  }, [onChange])

  return (
    <button
      className="btn btn-ghost"
      onClick={() => onChange(isDark ? 'light' : 'dark')}
    >
      {isDark ? <FaMoon /> : <FaSun />}
    </button>
  )
}
