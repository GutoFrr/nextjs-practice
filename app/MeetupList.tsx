import MeetupItem from './MeetupItem'

interface IMeetupList {
  meetups: {
    title: string
    address: string
    image: string
    description: string
    id: string
  }[]
}

const MeetupList: React.FC<IMeetupList> = ({ meetups }) => {
  return (
    <div className="container mx-auto flex flex-col items-center gap-6 my-6">
      {meetups.map((meetup: any) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </div>
  )
}

export default MeetupList
