import { MongoClient, ObjectId, WithId } from 'mongodb';
import MemeDetail from '../../components/MemeDetail';

interface SingleMemeProps {
  params: { singleMeme: string };
}

export default async function SingleMeme({ params }: SingleMemeProps) {
  const data = await getSingleMeme(params.singleMeme);
  const title = `Dummy Meetup | ${data.title}`;

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
  );
}

async function getSingleMeme(memeId: string) {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();

  const memesCollection = db.collection('randomemes');

  const meme: any = await memesCollection.findOne({
    _id: new ObjectId(memeId),
  });

  client.close();

  return {
    id: meme._id.toString(),
    title: meme.title,
    address: meme.address,
    image: meme.image,
    description: meme.description,
  };
}
