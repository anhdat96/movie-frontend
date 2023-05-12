import React from 'react';

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};

const Button = ({
  onClick,
  type = 'button',
  fullWidth = false,
  variant = 'primary',
  disabled,
  children,
}: Props) => {
  const buttonClasses = `inline-flex leading-1 justify-center rounded-lg border py-2 px-5 text-sm outline-2 outline-offset-2 transition-colors   ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${fullWidth ? 'w-100' : 'w-auto'} ${
    variant === 'primary'
      ? 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80'
      : 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80'
  }`;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
