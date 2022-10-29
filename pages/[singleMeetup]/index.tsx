import { MongoClient, ObjectId } from 'mongodb'
import { GetStaticPaths, GetStaticProps, NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import MeetupDetail from '../../components/MeetupDetail'

interface ISingleMeetupProps {
  meetupData: {
    id: string
    image: string
    address: string
    description: string
    title: string
  }
}

const SingleMeetup: NextPage<ISingleMeetupProps> = ({ meetupData }) => {
  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
      </Head>

      <div className="container mx-auto my-6 flex flex-col items-center">
        <MeetupDetail
          image={meetupData.image}
          title={meetupData.title}
          address={meetupData.address}
          description={meetupData.description}
        />
      </div>
    </>
  )
}

export default SingleMeetup

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL)
  const db = client.db()

  const meetupsCollection: any = db.collection('dummy-meetups')

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

  client.close()

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup: any) => ({
      params: { singleMeetup: meetup._id.toString() },
    })),
  }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const singleMeetup = context.params.singleMeetup

  const client = await MongoClient.connect(process.env.MONGO_URL)
  const db = client.db()

  const meetupsCollection = db.collection('dummy-meetups')

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(singleMeetup),
  })

  client.close()

  return {
    props: {
      meetupData: {
        id: selectedMeetup?._id.toString(),
        title: selectedMeetup?.title,
        address: selectedMeetup?.address,
        image: selectedMeetup?.image,
        description: selectedMeetup?.description,
      },
    },
  }
}
