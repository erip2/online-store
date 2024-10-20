import * as RadixCheckbox from '@radix-ui/react-checkbox';
import CheckOne from '@/components/check-one';

interface CheckboxProps {
  label: string;
  value: string;
  onChange?: (
    label: string,
    value: RadixCheckbox.CheckedState,
    ...extraParams: any[]
  ) => void;
}

const Checkbox = ({ label, value, onChange }: CheckboxProps) => {
  const test = (checked: RadixCheckbox.CheckedState) => {
    if (!onChange) return;

    onChange(value, checked);
  };

  return (
    <div className='flex items-center'>
      <RadixCheckbox.Root
        onCheckedChange={test}
        className='inline-flex size-4 appearance-none items-center justify-center rounded-sm border border-[#DCDCDC] data-[state=checked]:border-transparent data-[state=checked]:bg-primary'
        value={value}
        id={value}
      >
        <RadixCheckbox.Indicator>
          <CheckOne />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label
        className='pl-3 font-satoshi text-base leading-none text-black'
        htmlFor={value}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
