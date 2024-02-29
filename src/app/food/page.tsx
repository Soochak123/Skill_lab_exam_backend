import React from 'react';

const Extract = () => {
  return (
    <div className="bg-blue-500 flex flex-col items-center justify-center h-screen">
      <div className="bg-purple-500 p-8 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Enter the link here.."
          className="rounded-lg mb-5 h-10 w-96 pl-5 mr-3 border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button className="bg-gray-900 text-white rounded-lg h-10 w-44 hover:bg-black focus:outline-3">
          Extract
        </button>
      </div>
    </div>
  );
};

export default Extract;