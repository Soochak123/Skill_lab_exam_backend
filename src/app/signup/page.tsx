import React from 'react';
import Link from 'next/link';
import PasswordInput from '@/app/Components/PasswordInput';

const SignUp = () => {
  return (
    <div className="bg-blue-500 flex flex-col justify-center h-screen">
      <div className="flex flex-col items-center">
        <div className="bg-purple-500 signin-container p-20 rounded-lg shadow-md flex flex-col">
          <input type="text" placeholder='Username' className='rounded-lg mb-5 h-10 w-72 pl-5 focus:outline-none'/>
          {/* <input type="password" placeholder='Password' className='rounded-lg mb-5 h-10 w-72 pl-4'/>
          <input type="password" placeholder='Password' className='rounded-lg mb-5 h-10 w-72 pl-4'/> */}
          <PasswordInput />
          <PasswordInput />
          <Link href='/food'>
            <button className='bg-gray-900 text-white mb-5 rounded-lg h-10 w-72 hover:bg-black'>SignUp</button>
          </Link>
          <div className='flex justify-evenly'>
            <h5 className=''>already have an account?</h5>
            <Link href='/signin' className='underline text-white'>SignIn</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;