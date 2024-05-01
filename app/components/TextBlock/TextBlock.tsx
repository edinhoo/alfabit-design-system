import { HTMLAttributes } from 'react';

export type TextBlockProps = {
  title?: string;
  text?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function TextBlock({
  title,
  text,
  className,
  ...rest
}: TextBlockProps) {
  return (
    <div
      className={`
        flex flex-col justify-center items-start py-6 pr-10 pl-8 bg-dark rounded-md
        ${className}
      `}
      {...rest}
    >
      {title && (
        <h3 className="mb-1 text-xl text-gray-primary font-extrabold">
          {title}
        </h3>
      )}
      {text && (
        <p className="text-md text-gray-primary font-normal">{text}</p>
      )}
    </div>
  );
};
