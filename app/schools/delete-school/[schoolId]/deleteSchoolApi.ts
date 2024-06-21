import { getAccssToken } from '@/app/authStore';
import { API_BASE_URL } from '@/constants/BaseUrl';

export default async function deleteSchool(schoolId: number) {
  if (!schoolId) {
    throw new Error('Invalid schoolId');
  } 

  const url = `${API_BASE_URL}schools/${schoolId}`;
  const accessToken = getAccssToken();
  
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
