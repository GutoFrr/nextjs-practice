/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'

interface IMeetupItem {
  id: string
  title: string
  image: string
  address: string
}

const MeetupItem: React.FC<IMeetupItem> = ({ title, image, address, id }) => {
  const router = useRouter()
  const showDetails = () => {
    router.push('/' + id)
  }

  return (
    <div className="p-8 bg-slate-100 rounded-md shadow-lg">
      <img src={image} alt={title} className="w-96" />
      <div className="flex flex-col">
        <h3 className="font-semibold text-lg">{title}</h3>
        <address className="mb-2">{address}</address>
        <button
          onClick={showDetails}
          className="bg-teal-700 text-white font-medium py-1.5 rounded shadow-md transition duration-300 hover:brightness-90 hover:shadow-lg hover:shadow-zinc-50"
        >
          Show Details
        </button>
      </div>
    </div>
  )
}

export default MeetupItem
