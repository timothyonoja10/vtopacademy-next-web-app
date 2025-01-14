import { getAccssToken } from "@/app/authStore";
import { API_BASE_URL } from "@/constants/BaseUrl";

export default async function updateSchool(schoolId: number, name: string, number: number) {

  const url = `${API_BASE_URL}schools/${schoolId}`;

  const accessToken = getAccssToken()
  if (!accessToken) {
    console.log(accessToken);
    throw new Error('Access token is missing');
  }

  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({ name, number }) 
  });
  
  if (!res.ok) {
    const errorResponse = await res.text();
    console.log(errorResponse);
    return;
  }
    
  return await res.json();
}