import { cookies } from "next/headers";
import { getAccssToken } from "../../authStore";

export default async function saveSchool(name: string, number: number) {

  let url = 'http://ec2-54-205-235-247.compute-1.amazonaws.com:3000/api/schools';

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