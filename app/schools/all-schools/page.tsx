
import Link from 'next/link';
import getSchools from './getSchoolsApi';
import { isAdminstrator } from '../../authStore';

export default async function Page() {
  const data = await getSchools();
  let isAdmin: boolean = isAdminstrator();

  return (
    <main className="p-8">
      {isAdmin && (
        <Link href={"/schools/add-school"} className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Add New School
        </Link>
      )}
      <ul className="space-y-8">
        {data.map((school: { schoolId: number, name: string, number: number}) => (
          <li key={school.schoolId} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
            <Link href={`/classes/${school.schoolId}/0`} className="text-blue-500 hover:underline">
              {school.name}
            </Link>
            {isAdmin && (
              <div className="flex space-x-2">
                <span>{school.number}</span>
                <Link href={`/schools/edit-school/${school.schoolId}`} className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  Edit
                </Link>
                <Link href={`/schools/delete-school/${school.schoolId}`} className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
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