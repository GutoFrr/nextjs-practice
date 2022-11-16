import MemeItem from './MemeItem'

interface IMemeList {
  memes: {
    title: string
    address: string
    image: string
    description: string
    id: string
  }[]
}

const MemeList: React.FC<IMemeList> = ({ memes }) => {
  return (
    <div className="container mx-auto flex flex-col items-center gap-6 my-6">
      {memes.map((meme: any) => (
        <MemeItem
          key={meme.id}
          id={meme.id}
          image={meme.image}
          title={meme.title}
          address={meme.address}
        />
      ))}
    </div>
  )
}

export default MemeList
