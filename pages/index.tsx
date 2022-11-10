import { MongoClient } from 'mongodb'
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import MeetupList from '../components/MeetupList'

interface IMeetupsProps {
  meetups: [{}]
}

const Home: NextPage<IMeetupsProps> = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>Dummy Meetups</title>
        <meta name="description" content="Browse a list of React meetups" />
      </Head>

      <MeetupList meetups={meetups} />
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  // fetch data from an API

  const client = await MongoClient.connect(process.env.MONGO_URL)
  const db = client.db()

  const meetupsCollection = db.collection('dummy-meetups')
  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
  }
}
