import { MongoClient } from 'mongodb';
import MemeList from '../components/MemeList';
import { notFound } from 'next/navigation';

export const revalidate = 10;

export default async function Home() {
  const data = await getMemes();

  if (!data) {
    notFound();
  }

  return <MemeList memes={data} />;
}

async function getMemes() {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();

  const memesCollection = db.collection('randomemes');
  const memes = await memesCollection.find().toArray();

  await client.close();

  return memes.map((meme) => ({
    title: meme.title,
    address: meme.address,
    image: meme.image,
    description: meme.description,
    id: meme._id.toString(),
  }));
}
