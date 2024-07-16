import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'danger';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
}) => {
  const baseStyle = 'px-4 py-2 rounded font-bold focus:outline-none';
  const variants = {
    primary: 'bg-primary text-white hover:bg-primaryDark',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark',
    accent: 'bg-accent text-white hover:bg-accent-dark',
    danger: 'bg-danger text-white hover:bg-danger-dark',
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
