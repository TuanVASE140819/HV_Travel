import React, { useState } from 'react';

interface InputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, name, type, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const hasValue = value !== '';

  return (
    <div className="relative z-0 w-full mb-3">
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder=" "
          className="text-lg pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          rows={3}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder=" "
          className="text-lg pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
      )}
      <label
        htmlFor={name}
        className={`text-lg absolute duration-300 top-3 -z-1 origin-0 text-gray-500 ${isFocused || hasValue ? 'transform -translate-y-6 scale-75' : ''}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;