import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labeltext: string;
}

export default function FormRow(props: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.name}>{props.labeltext}</label>
      <input
        {...props}
        className="border-2 border-zinc-200 rounded py-1 px-2 shadow transition duration-300 focus:shadow-lg hover:shadow-lg outline-none"
      />
    </div>
  );
}
