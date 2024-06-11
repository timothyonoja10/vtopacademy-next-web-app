import Link from 'next/link'
import { hasAccesstoken } from './authStore';

export default function Home() {
  const isLoggedIn = hasAccesstoken();
  const isLoggedOut = !isLoggedIn;

  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <img
          src="https://via.placeholder.com/400"
          alt="Tutorial"
          className="rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">
          Learn any subject using comprehensive videos and practice questions.
        </h1>
        <Link href="/schools" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Start now
        </Link>
        {isLoggedOut && (
          <Link href="/register" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Register
          </Link>
        )}
        {isLoggedOut && (
          <Link href="/login" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Login
          </Link>
        )}
        {isLoggedIn && (
          <Link href="/logout" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Logout
          </Link>
        )}
      </div>
    </main>  
  );
}
