/* eslint-disable @next/next/no-img-element */
interface IMeetupDetailProps {
  image: string
  address: string
  description: string
  title: string
}

const MeetupDetail: React.FC<IMeetupDetailProps> = ({
  image,
  address,
  description,
  title
}) => {
  return (
    <div className="p-8 bg-slate-100 shadow-lg rounded-md">
      <img src={image} alt={title} className="w-96" />
      <div>
        <h1 className="font-semibold text-lg">{title}</h1>
        <address>{address}</address>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default MeetupDetail
