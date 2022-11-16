import { MongoClient, ObjectId } from 'mongodb'
import MemeDetail from './MemeDetail'

const getSingleMeme = async (memeId: any) => {
  const client = await MongoClient.connect(process.env.MONGO_URL)
  const db = client.db()

  const memesCollection = db.collection('randomemes')

  const selectedMeme = await memesCollection.findOne({
    _id: new ObjectId(memeId),
  })

  client.close()

  return {
    id: selectedMeme?._id.toString(),
    title: selectedMeme?.title,
    address: selectedMeme?.address,
    image: selectedMeme?.image,
    description: selectedMeme?.description,
  }
}

const SingleMeme = async ({ params }: any) => {
  const data = await getSingleMeme(params.singleMeme)
  const title = `Dummy Meetup | ${data.title}`

  return (
    <>
      <title>{title}</title>

      <div className="container mx-auto my-6 flex flex-col items-center">
        <MemeDetail
          image={data.image}
          title={data.title}
          address={data.address}
          description={data.description}
        />
      </div>
    </>
  )
}

export default SingleMeme
