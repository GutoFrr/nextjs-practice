import Link from 'next/link'
import { ReactNode } from 'react'

interface ILayoutProps {
  children: ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <div className="bg-teal-700">
        <header className="container mx-auto flex justify-between items-center py-3 text-white font-semibold">
          <h1 className="text-2xl cursor-pointer hover:text-teal-100">
            Dummy Meetups
          </h1>
          <nav className="flex gap-3">
            <Link href="/">
              <a className="hover:text-teal-100">All Meetups</a>
            </Link>
            <Link href="/new-meetup">
              <a className="hover:text-teal-100">Add New Meetup</a>
            </Link>
          </nav>
        </header>
      </div>
      <main className="container mx-auto">{children}</main>
    </>
  )
}

export default Layout
