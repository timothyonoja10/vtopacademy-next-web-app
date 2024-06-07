import { cookies } from 'next/headers';

export default async function deleteSchool(schoolId: number) {
  if (!schoolId) {
    throw new Error('Invalid schoolId');
  } 

  const url = `http://ec2-54-205-235-247.compute-1.amazonaws.com:3000/api/schools/${schoolId}`;
  const accessToken = cookies().get('accessToken')?.value;
  
  if (!accessToken) {
    console.log(accessToken);
    throw new Error('Access token is missing');
  }

  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  });

  if (!res.ok) {
    const errorResponse = await res.text();
    throw new Error(`Failed to delete school: ${errorResponse}`);
  }

  return true;
}
