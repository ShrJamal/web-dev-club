import type { ReactNode } from 'react'
import Navbar from '~/features/core/components/Navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
