import { ReactNode } from 'react';

interface ButtonPropsI {
  className?: string;
  onClick: () => void;
  children: ReactNode;
}

export function Button({ className = '', onClick, children }: ButtonPropsI) {
  return (
    <button type="button" className={className} onClick={() => onClick()}>
      {children}
    </button>
  );
}
