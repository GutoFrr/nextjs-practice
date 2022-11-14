import { SyntheticEvent, useRef } from 'react'

interface INewMeetupFormProps {
  onAddMeetup: ({}) => void
}

const NewMeetupForm: React.FC<INewMeetupFormProps> = ({ onAddMeetup }) => {
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

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    }

    onAddMeetup(meetupData)
  }

  return (
    <div className="px-64 my-6">
      <h1 className="text-4xl text-center font-bold mb-4">New Meetup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-slate-100 p-8 rounded-lg shadow-lg">
        <section className="form-control">
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            className="control-input"
          />
        </section>
        <section className="form-control">
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            className="control-input"
          />
        </section>
        <section className="form-control">
          <label htmlFor="address">Meetup Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
            className="control-input"
          />
        </section>
        <section className="form-control">
          <label htmlFor="description">Meetup Description</label>
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
          Add Meetup
        </button>
      </form>
    </div>
  )
}

export default NewMeetupForm
