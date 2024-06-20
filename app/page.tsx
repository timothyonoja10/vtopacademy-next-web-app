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
        {isLoggedOut && ( 
          <div className="space-x-4">
            <Link href="/schools/all-schools" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Start now
            </Link>
            <Link href="/auth/register" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Register
            </Link>
            <Link href="/auth/login" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Login
            </Link>
            <Link href="/auth/forgot-password" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Forgot password
            </Link>
          </div>  
        )}
        {isLoggedIn && (
          <div> 
            <Link href="/schools/all-schools" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Start now
            </Link>
            <Link href="/auth/logout" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Logout
            </Link>
          </div>   
        )}
      </div>
    </main>  
  );
}
