import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-6 p-24">
      <Link
        href="/job-portal"
        className="transition cursor-pointer relative hover:bg-blue-800 bg-blue-500 p-4 rounded-md text-white"
      > Job Portal UI </Link>
      <Link

        href="/dashboard"
        className="transition cursor-pointer relative hover:bg-blue-800 bg-blue-500 p-4 rounded-md text-white"
      > Dashboard UI </Link>

        
    </main>
  )
}
