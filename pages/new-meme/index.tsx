import Link from 'next/link'
import { useRouter } from 'next/navigation'
import NewMemeForm from '../../components/NewMemeForm'
import '../../styles/globals.css'

const NewMeme = () => {
  const router = useRouter()

  const addMemeHandler = async (enteredMemeData: object) => {
    const res = await fetch('/api/new-meme', {
      method: 'POST',
      body: JSON.stringify(enteredMemeData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()

    console.log(data)

    router.push('/')
  }

  return (
    <>
      <title>Add a New Meetup</title>
      <div className="bg-teal-700 shadow-md fixed top-0 w-screen z-10">
        <header className="container mx-auto flex justify-between items-center py-3 text-white font-semibold">
          <Link
            href="/"
            className="text-2xl cursor-pointer hover:text-teal-100"
          >
            RandoMemes
          </Link>
          <nav className="flex gap-3">
            <Link href="/" className="hover:text-teal-100">
              All Memes
            </Link>
            <Link href="/new-meme" className="hover:text-teal-100">
              Add New Meme
            </Link>
          </nav>
        </header>
      </div>

      <div className="pt-14">
        <NewMemeForm onAddMeme={addMemeHandler} />
      </div>
    </>
  )
}

export default NewMeme
