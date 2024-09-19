import cn from '@/app/lib/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div className={cn('lg:px-20', className)} {...props}>
      {children}
    </div>
  );
}
