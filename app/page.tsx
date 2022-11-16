import { MongoClient } from 'mongodb'
import MemeList from './MemeList'

const getMemes = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL)
  const db = client.db()

  const memesCollection = db.collection('randomemes')
  const memes = await memesCollection.find().toArray()

  client.close()

  return memes.map((meme) => ({
    title: meme.title,
    address: meme.address,
    image: meme.image,
    description: meme.description,
    id: meme._id.toString(),
  }))
}

const Home = async () => {
  const data = await getMemes()

  return (
    <>
      <title>RandoMemes</title>
      <meta name="description" content="Browse a list of React meetups" />

      <MemeList memes={data} />
    </>
  )
}

export default Home
