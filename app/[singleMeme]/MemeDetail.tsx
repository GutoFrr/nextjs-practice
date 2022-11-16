import Image from 'next/image'

interface IMemeDetailProps {
  image: string
  address: string
  description: string
  title: string
}

const MemeDetail: React.FC<IMemeDetailProps> = ({
  image,
  address,
  description,
  title,
}) => {
  return (
    <div className="max-w-[448px] p-8 bg-slate-100 shadow-lg rounded-md">
      <Image src={image} alt={title} width={384} height={512} />
      <>
        <h1 className="font-semibold text-lg">{title}</h1>
        <address>{address}</address>
        <p>{description}</p>
      </>
    </div>
  )
}

export default MemeDetail
