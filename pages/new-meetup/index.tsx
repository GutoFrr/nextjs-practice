import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/NewMeetupForm'

const NewMeetup: NextPage = () => {
  const router = useRouter()

  const addMeetupHandler = async (enteredMeetupData: object) => {
    const res = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()

    console.log(data)

    router.push('/')
  }

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
      </Head>

      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  )
}

export default NewMeetup
