
export default async function getSchools() {
  
  const res = await fetch('http://ec2-54-205-235-247.compute-1.amazonaws.com:3000/api/schools'); 
  if (!res.ok) {
    throw new Error('Failed to fetch schools');
  } 
  const data = await res.json();
  return data;

}