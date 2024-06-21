import { getAccssToken } from "../../authStore";
import { API_BASE_URL } from "@/constants/BaseUrl";

export default async function saveSchool(name: string, number: number) {

  let url = API_BASE_URL + 'schools';
  
  const accessToken = getAccssToken();
  if (!accessToken) {
    console.log(accessToken);
    throw new Error('Access token is missing');
  }

  const res = await fetch(url, {
    method: 'POST',
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