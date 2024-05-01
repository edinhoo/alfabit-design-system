import { AnchorHTMLAttributes, ReactNode } from 'react';

export type LinkProps = {
  children: ReactNode;
  disabled?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link({
  children,
  href,
  className,
  disabled,
  ...rest
}: LinkProps) {
  return (
    <a
      href={disabled || !href?.length ? undefined : href}
      className={`text-primary aria-disabled:text-disabled ${className}`}
      aria-disabled={disabled || !href?.length}
      {...rest}
    >
      {children}
    </a>
  );
};
