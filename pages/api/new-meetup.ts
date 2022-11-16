import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

const NewMeetup = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body

    const client = await MongoClient.connect(process.env.MONGO_URL)
    const db = client.db()

    const meetupsCollection = db.collection('dummy-meetups')

    const result = await meetupsCollection.insertOne(data)

    console.log(result)

    client.close()

    res.status(201).json({ message: 'Meetup inserted!' })
  }
}

export default NewMeetup
