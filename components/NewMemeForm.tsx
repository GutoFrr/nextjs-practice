'use client';

import { FormEvent } from 'react';
import { postMeme } from '../services/meme';
import FormRow from './FormRow';

interface EventHandler extends FormEvent<HTMLFormElement> {
  target: HTMLFormElement;
}

export default function NewMemeForm() {
  async function handleSubmit(e: EventHandler) {
    e.preventDefault();
    try {
      const form = new FormData(e.target);
      const data = Object.fromEntries(form.entries());

      console.log(data);

      await postMeme(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-slate-100 p-8 rounded-lg shadow-lg"
    >
      <FormRow type="text" name="title" labeltext="Meme Title" />
      <FormRow type="url" name="image" labeltext="Meme Image" />
      <FormRow type="text" name="address" labeltext="Meme Address" />
      <div className="flex flex-col">
        <label htmlFor="description">Meme Description</label>
        <textarea
          name="description"
          rows={5}
          className="border-2 border-zinc-200 rounded py-1 px-2 shadow transition duration-300 focus:shadow-lg hover:shadow-lg outline-none resize-none"
        />
      </div>
      <button
        type="submit"
        className="bg-teal-700 text-white font-medium py-1.5 rounded shadow-md transition duration-300 hover:brightness-90 hover:shadow-lg hover:shadow-zinc-50"
      >
        Add Meme
      </button>
    </form>
  );
}
