
import Link from 'next/link'
import { cookies } from 'next/headers'
import getSchools from './getSchoolsApi';

export default async function Page() {
  const data = await getSchools();

  let isAdmin: boolean = false;
  const cookieStore = cookies();
  if (cookieStore.has('isAdmin')){
    isAdmin = true;
  }
  const schoolId: number = 0;

  return (
    <main className="p-8">
      <Link href={"/school-add"} className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
        Add New School
      </Link>
      <ul className="space-y-8">
        {data.map((school: { schoolId: number, name: string, number: number}) => (
          <li key={school.schoolId} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
            <Link href={`/classes/${school.schoolId}/0`} className="text-blue-500 hover:underline">
              {school.name}
            </Link>
            {isAdmin && (
              <div className="flex space-x-2">
                <span>{school.number}</span>
                <Link href={`/school-edit/${school.schoolId}`} className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  Edit
                </Link>
                <Link href={`/school-delete/${school.schoolId}`} className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                  Delete
                </Link>
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
} 