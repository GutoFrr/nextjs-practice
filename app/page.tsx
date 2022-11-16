import { MongoClient } from 'mongodb'
import MeetupList from './MeetupList'

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

const getMeetups = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL)
  const db = client.db()

  const meetupsCollection = db.collection('dummy-meetups')
  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return meetups.map((meetup) => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    description: meetup.description,
    id: meetup._id.toString(),
  }))
}

const Home = async () => {
  const data = await getMeetups()

  return (
    <>
      <title>Dummy Meetups</title>
      <meta name="description" content="Browse a list of React meetups" />

      <MeetupList meetups={data} />
    </>
  )
}

export default Home
