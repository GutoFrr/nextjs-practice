import Image from 'next/image';

interface MemeDetailProps {
  image: string;
  address: string;
  description: string;
  title: string;
}

export default function MemeDetail({
  image,
  address,
  description,
  title,
}: MemeDetailProps) {
  return (
    <div className="max-w-[448px] p-8 bg-slate-100 shadow-lg rounded-md">
      <Image src={image} alt={title} width={384} height={512} priority />
      <>
        <h1 className="font-semibold text-lg">{title}</h1>
        <address>{address}</address>
        <p>{description}</p>
      </>
    </div>
  );
}
