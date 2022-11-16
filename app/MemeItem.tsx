import Image from 'next/image'
import Link from 'next/link'

interface IMemeItem {
  id: string
  title: string
  image: string
  address: string
}

const MemeItem: React.FC<IMemeItem> = ({ title, image, address, id }) => {
  return (
    <div className="p-8 bg-slate-100 rounded-md shadow-lg">
      <Image src={image} alt={title} width={384} height={512} />
      <div className="flex flex-col">
        <h3 className="font-semibold text-lg">{title}</h3>
        <address className="mb-2">{address}</address>
        <Link href={`/${id}`}>
          <button className="w-full bg-teal-700 text-white font-medium py-1.5 rounded shadow-md transition duration-300 hover:brightness-90 hover:shadow-lg hover:shadow-zinc-50">
            Show details
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MemeItem
