import cn from '@/app/lib/utils/cn';

interface AmountInputProps {
  value: number;
  onValueUpdate: (value: number) => void;
  className?: string;
}

export default function AmountInput({
  value,
  onValueUpdate,
  className,
}: AmountInputProps) {
  return (
    <div
      className={cn(
        'flex h-[34px] items-center justify-center bg-light-grey font-satoshi lg:h-11 lg:px-4',
        className
      )}
    >
      <div>
        <button
          className='text-border-grey'
          onClick={() => onValueUpdate(value !== 0 ? value - 1 : 0)}
        >
          -
        </button>
        <span className='mx-8 w-3 appearance-none bg-light-grey lg:w-6'>
          {value}
        </span>
        <button
          className='text-border-grey'
          onClick={() => onValueUpdate(value + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
