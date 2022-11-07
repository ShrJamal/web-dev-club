import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className || ''}`}>
      <Image
        src="/wdc_logo.png"
        className="w-auto"
        alt="Logo"
        width={60}
        height={20}
      />
    </Link>
  )
}
