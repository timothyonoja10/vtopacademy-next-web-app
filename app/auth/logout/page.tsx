
import Link from 'next/link';
import { redirect } from 'next/navigation'
import { deleteAuthInfo } from '../../authStore';

export default async function Page() {

  // Server Action
  async function processLogoutConfirmation() {
    'use server'

    deleteAuthInfo();
    redirect('/');  
  }

  return (
    <main className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-xl font-bold text-center mb-4">Logout Confirmation</h2>
        <p className="text-center mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-around">
          <Link href={`/`} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">No</Link>
          <form action={processLogoutConfirmation}>
           <button type='submit' className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400">
             Yes
           </button>
          </form>
        </div>
      </div>
    </main>
  );
}