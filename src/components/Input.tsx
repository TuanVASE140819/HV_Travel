"use client"
import React, { useState } from 'react';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({ label, name, type = "text", ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(!!e.target.value);
  };

  return (
    <div className="relative z-0 w-full mb-8">
      <input
        {...rest}
        id={name}
        type={type}
        placeholder=" "
        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        htmlFor={name}
        className={`absolute duration-300 top-3 -z-1 origin-0 text-gray-500 ${isFocused || hasValue ? 'transform -translate-y-6 scale-75' : ''}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;