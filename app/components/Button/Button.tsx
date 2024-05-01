import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getVariant = (
  disabled: ButtonProps['disabled'],
  variant: ButtonProps['variant'],
) => {
  switch (variant) {
    case 'primary':
      return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white';

    case 'secondary':
      return disabled ? 'bg-disabled text-disabled' : 'bg-quaternary text-primary';

    case 'tertiary':
      return disabled ? 'text-disabled' : 'text-primary';
  }
};

export default function Button({
  children,
  className,
  disabled,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`
        py-2xs px-lg rounded-md text-lg
        ${getVariant(disabled, variant)}
        ${className}
      `}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
