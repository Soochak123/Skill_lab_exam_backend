'use client'
import React, { useState } from 'react';

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='password-container'>
      <div className='relative'>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          className='rounded-lg w-72 mb-4 p-2 pr-12 pl-5 focus:outline-none focus:border-blue-500' // Added pr-10 for right padding
        />
        <span
          className='absolute inset-y-0 right-0 pr-3 pb-4 flex items-center cursor-pointer'
          onClick={togglePasswordVisibility}
        >
          {showPassword ? '👁️' : '🔒'}
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;