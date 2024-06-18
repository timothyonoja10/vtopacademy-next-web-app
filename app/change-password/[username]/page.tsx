import processChangePasswordForm from "./changePasswordFormProcessor";

// Server Component
export default async function Page(
  { params }: { params: { username: string } }
) {
  console.log('username', params.username);
  return (
    <main className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center mb-6">Change password</h2>
        <div>{params.username}</div>
        <form action={processChangePasswordForm} id="changePasswordForm" className="space-y-4">
          <div>
            <input type="hidden" id="username" name="username" value={params.username.replace(/%40/g, '@')} />
          </div>
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700">Enter code sent to your mail:</label>
            <input type="text" id="code" name="code" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="text" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div>
            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}