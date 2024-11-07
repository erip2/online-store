interface AmountInputProps {
  value: number;
  onValueUpdate: (value: number) => void;
}

export default function AmountInput({
  value,
  onValueUpdate,
}: AmountInputProps) {
  return (
    <div className='flex h-[34px] items-center justify-center bg-light-grey font-satoshi lg:h-11 lg:px-4'>
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
