import { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import cn from '@/app/lib/utils/cn';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const buttonVariants = cva(
  'inline-flex justify-center py-4 px-8 font-satoshi ease-in-out transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-dark-primary text-white',
        secondary: 'bg-light-grey text-dark-primary hover:bg-border-grey',
        tertiary: 'bg-light-grey/15 text-white',
        ghost: 'bg-transparent text-dark-primary',
      },
      size: {
        small: 'py-3 px-6',
        medium: 'py-4 px-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      className,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
        ref={ref}
        type={props.onClick ? 'button' : 'submit'}
      >
        {props.children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;
