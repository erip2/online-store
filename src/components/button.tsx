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
  'inline-flex justify-center py-4 px-8 font-satoshi',
  {
    variants: {
      variant: {
        primary: 'bg-white text-dark-primary',
        secondary:
          'bg-dark-primary text-white hover:bg-dark-primary hover:text-white',
        tertiary: 'bg-primary text-white',
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
      >
        {props.children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;
