import { InputHTMLAttributes } from 'react';

export type InputProps = {
  label?: string;
  multiline?: boolean;
} & (
  InputHTMLAttributes<HTMLInputElement> |
  InputHTMLAttributes<HTMLTextAreaElement>
);

function InputElement(props: InputProps) {
  return props.multiline ? (
    <textarea {...props as InputHTMLAttributes<HTMLTextAreaElement>} />
  ) : (
    <input {...props as InputHTMLAttributes<HTMLInputElement>} />
  );
};

export default function Input({ label, className, ...rest }: InputProps) {
  return (
    <div className="relative">
      {label && (
        <label className="absolute pt-1 pl-3 text-xs">{label}</label>
      )}
      <InputElement
        className={`
          bg-dark text-gray-primary rounded-md p-3
          disabled:bg-disabled disabled:border-2 disabled:border-disabled
          ${label && 'pt-5'}
          ${className}
        `}
        {...rest}
      />
    </div>
  );
};
