import type { ReactNode } from 'react'
import Navbar from '~/features/core/components/Navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  )
}
