import React, { useState } from 'react'

const Signup = () => {
  const [state, setState] = useState('signup');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <input
          type="text"
          name="email"
          placeholder="Enter email here"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {state === 'signup' && (
          <input
            type="text"
            name="username"
            placeholder="Enter username here"
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        )}

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          {state}
        </button>

        {state === 'signup' && (
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{' '}
            <span
              onClick={() => setState('signin')}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Sign in here
            </span>
          </p>
        )}

        {state === 'signin' && (
          <p className="mt-4 text-sm text-gray-600">
            Don’t have an account?{' '}
            <span
              onClick={() => setState('signup')}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Register here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Signup;
