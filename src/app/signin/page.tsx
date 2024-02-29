import React from 'react';
import Link from 'next/link'
import PasswordInput from '@/app/Components/PasswordInput';

const SignIn = () => {
  return (
    <div className="bg-blue-500 flex flex-col justify-center h-screen">
      <div className="flex flex-col items-center">
        <div className=" bg-purple-500 signin-container p-20 rounded-lg shadow-md flex flex-col">
          <input type="text" placeholder='Username' className='rounded-lg mb-5 h-10 w- pl-5 focus:outline-none focus:border-blue-500'/>
          {/* <input type="password" placeholder='Password' className='rounded-lg mb-5 h-10 w-72 pl-4'/> */}

          <PasswordInput />
          <Link href='/search'>
          <button className='bg-gray-900 text-white rounded-lg h-10 w-72 hover:bg-black mb-5'>SignIn</button>
          </Link>

          <div className='flex justify-evenly'>
            <h5 className=''>dont have an account?</h5>
            <Link href='/signup' className='underline text-white'>SignUp</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;