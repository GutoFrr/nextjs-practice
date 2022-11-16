import { useRouter } from 'next/navigation'
import NewMeetupForm from '../../components/NewMeetupForm'
import '../../styles/globals.css'

const NewMeetup = () => {
  const router = useRouter()

  const addMeetupHandler = async (enteredMeetupData: object) => {
    const res = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
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

      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  )
}

export default NewMeetup
