import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

const NewMeme = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body

    const client = await MongoClient.connect(process.env.MONGO_URL)
    const db = client.db()

    const memesCollection = db.collection('randomemes')

    const result = await memesCollection.insertOne(data)

    console.log(result)

    client.close()

    res.status(201).json({ message: 'Meme inserted!' })
  }
}

export default NewMeme
