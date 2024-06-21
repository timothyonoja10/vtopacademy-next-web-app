import { API_BASE_URL } from "@/constants/BaseUrl";

export default async function getSchools() {
  let url = API_BASE_URL + 'schools';
  
  const res = await fetch(url); 
  if (!res.ok) {
    throw new Error('Failed to fetch schools');
  } 
  const data = await res.json();
  return data;

}