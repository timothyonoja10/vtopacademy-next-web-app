import { getAccssToken } from "@/app/authStore";
import { API_BASE_URL } from "@/constants/BaseUrl";

export default async function getSchool(schoolId: number): Promise<School> {
  
  const url = `${API_BASE_URL}schools/${schoolId}`;
  const accessToken = getAccssToken();

  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
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