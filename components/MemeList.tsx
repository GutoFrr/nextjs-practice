import MemeItem from './MemeItem';

interface MemeList {
  memes: {
    title: string;
    address: string;
    image: string;
    description: string;
    id: string;
  }[];
}

export default function MemeList({ memes }: MemeList) {
  return (
    <div className="container mx-auto flex flex-col items-center gap-6 my-6">
      {memes.map((meme) => (
        <MemeItem
          key={meme.id}
          id={meme.id}
          image={meme.image}
          title={meme.title}
          address={meme.address}
        />
      ))}
    </div>
  );
}
