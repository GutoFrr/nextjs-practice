import { MongoClient, ObjectId } from 'mongodb';
import MemeDetail from '../../components/MemeDetail';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default async function SingleMeme({ params }: Props) {
  const data = await getMeme(params.id);

  return (
    <div className="container mx-auto my-6 flex flex-col items-center">
      <MemeDetail
        image={data.image}
        title={data.title}
        address={data.address}
        description={data.description}
      />
    </div>
  );
}

async function getMeme(id: string) {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();

  const memesCollection = db.collection('randomemes');

  const meme = await memesCollection.findOne({
    _id: new ObjectId(id),
  });

  client.close();

  if (!meme) {
    return notFound();
  }

  return {
    id: meme._id.toString(),
    title: meme.title,
    address: meme.address,
    image: meme.image,
    description: meme.description,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getMeme(params.id);
  const title = `Randomemes | ${data.title}`;

  return {
    title: title,
  };
}
