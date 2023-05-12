import React from 'react';

type Props = {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  name?: string;
};

const Input = ({
  label,
  placeholder,
  name,
  type = 'text',
  value,
  onChange,
  required,
  disabled,
}: Props) => {
  const labelClasses = 'block text-gray-700 font-bold mb-2 whitespace-nowrap';
  const inputClasses =
    'block w-full appearance-none rounded-lg border border-gray-200 bg-white py-2 px-3 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm;';

  return (
    <div className="flex gap-3 items-center">
      {label && <label className={labelClasses}>{label}</label>}
      <input
        className={inputClasses}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
