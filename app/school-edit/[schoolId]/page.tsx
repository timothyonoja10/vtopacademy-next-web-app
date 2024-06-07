
import getSchool from '@/app/school-edit/[schoolId]/getSchoolApi';
import processSchoolForm from './schoolFormProcessor';

// Server Component
export default async function Page(
  { params }: { params: { schoolId: number } }
) {
  
  let school = {schoolId: 0, name: "", number: 0};
  school = await getSchool(params.schoolId);

  return (
    <main className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Save School</h2>
        <form action={processSchoolForm} id="schoolForm" className="space-y-4">
          <div>
            <input type="hidden" id="schoolId" name="schoolId" value={params.schoolId} />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" defaultValue={school.name} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">Number</label>
            <input type="number" id="number" name="number" defaultValue={school.number} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
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