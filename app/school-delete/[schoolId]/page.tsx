
import Link from 'next/link';
import processDeleteConfirmation from './deleteFormProcessor';

export default async function Page(
    { params }: { params: { schoolId: number } }
) {

  return (
    <main className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-xl font-bold text-center mb-4">Delete Confirmation</h2>
        <p className="text-center mb-6">Are you sure you want to delete this school?</p>
        <div className="flex justify-around">
          <Link href={`/schools`} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
            No
          </Link>
          <form action={processDeleteConfirmation}>
            <div>
              <input type="hidden" id="schoolId" name="schoolId" defaultValue={params.schoolId} />
            </div>
            <button type="submit" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400">
              Yes
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}