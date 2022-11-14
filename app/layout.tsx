import Link from 'next/link'
import { ReactNode } from 'react'
import '../styles/globals.css'

interface ILayoutProps {
  children: ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <div className="bg-teal-700 shadow-md fixed top-0 w-screen z-10">
        <header className="container mx-auto flex justify-between items-center py-3 text-white font-semibold">
          <Link href="/">
            <h1 className="text-2xl cursor-pointer hover:text-teal-100">
              RandoMemes
            </h1>
          </Link>
          <nav className="flex gap-3">
            <Link href="/">
              <h2 className="hover:text-teal-100">All Memes</h2>
            </Link>
            <Link href="/new-meetup">
              <h2 className="hover:text-teal-100">Add New Meme</h2>
            </Link>
          </nav>
        </header>
      </div>
      <main className="container mx-auto py-14">{children}</main>
    </>
  )
}

export default Layout
