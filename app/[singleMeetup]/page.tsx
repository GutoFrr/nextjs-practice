import { MongoClient, ObjectId } from 'mongodb'
import MeetupDetail from './MeetupDetail'

const getSingleMeetup = async (meetupId: any) => {
  const client = await MongoClient.connect(process.env.MONGO_URL)
  const db = client.db()

  const meetupsCollection = db.collection('dummy-meetups')

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  })

  client.close()

  return {
    id: selectedMeetup?._id.toString(),
    title: selectedMeetup?.title,
    address: selectedMeetup?.address,
    image: selectedMeetup?.image,
    description: selectedMeetup?.description,
  }
}

const SingleMeetup = async ({ params }: any) => {
  const data = await getSingleMeetup(params.singleMeetup)
  const title = `Dummy Meetup | ${data.title}`

  return (
    <>
      <title>{title}</title>

      <div className="container mx-auto my-6 flex flex-col items-center">
        <MeetupDetail
          image={data.image}
          title={data.title}
          address={data.address}
          description={data.description}
        />
      </div>
    </>
  )
}

export default SingleMeetup
