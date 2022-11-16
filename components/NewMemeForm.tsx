import { SyntheticEvent, useRef } from 'react'

interface INewMemeFormProps {
  onAddMeme: ({}) => void
}

const NewMemeForm: React.FC<INewMemeFormProps> = ({ onAddMeme }) => {
  const titleInputRef = useRef<any>()
  const imageInputRef = useRef<any>()
  const addressInputRef = useRef<any>()
  const descriptionInputRef = useRef<any>()

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const memeData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    }

    onAddMeme(memeData)
  }

  return (
    <div className="px-64 my-6">
      <h1 className="text-4xl text-center font-bold mb-4">New Meme</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-slate-100 p-8 rounded-lg shadow-lg">
        <section className="form-control">
          <label htmlFor="title">Meme Title</label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            className="control-input"
          />
        </section>
        <section className="form-control">
          <label htmlFor="image">Meme Image</label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            className="control-input"
          />
        </section>
        <section className="form-control">
          <label htmlFor="address">Meme Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
            className="control-input"
          />
        </section>
        <section className="form-control">
          <label htmlFor="description">Meme Description</label>
          <textarea
            required
            id="description"
            rows={5}
            ref={descriptionInputRef}
            className="control-input resize-none"
          />
        </section>
        <button
          type="submit"
          className="bg-teal-700 text-white font-medium py-1.5 rounded shadow-md transition duration-300 hover:brightness-90 hover:shadow-lg hover:shadow-zinc-50"
        >
          Add Meme
        </button>
      </form>
    </div>
  )
}

export default NewMemeForm
