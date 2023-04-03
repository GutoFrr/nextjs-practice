import { Metadata } from 'next';
import NewMemeForm from '../../components/NewMemeForm';

export const metadata: Metadata = {
  title: 'Add new meme',
};

export default function NewMeme() {
  return (
    <>
      <h1 className="text-4xl text-center font-bold mb-4">New Meme</h1>
      <NewMemeForm />
    </>
  );
}
