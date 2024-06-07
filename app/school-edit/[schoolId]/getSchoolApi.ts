import { cookies } from "next/headers";

export default async function getSchool(schoolId: number): Promise<School> {
  
  const url = `http://ec2-54-205-235-247.compute-1.amazonaws.com:3000/api/schools/${schoolId}`;
  const accessToken = cookies().get('accessToken');

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch schools. Try again');
    }
  
    const data = await res.json();
  
    // Assuming the response has fields 
    return {
      schoolId: data.school || 0,
      name: data.name || '',
      number: data.number || 0,
    };
  } catch (error) {
    console.error('Error fetching school:', error);
    throw error;  // Re-throw the error after logging it
  }
}