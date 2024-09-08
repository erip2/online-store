import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: (string | undefined | false)[]): string => {
  return twMerge(clsx(inputs));
};

export default cn;
