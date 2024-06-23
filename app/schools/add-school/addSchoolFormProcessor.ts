
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import saveSchool from './saveSchoolApi';

// Server Action
export default async function processAddSchoolForm(formData: FormData) {
  'use server' 

  let name: string = '';
  let number: number = 0;

  const nameData = formData.get('name');
  if (nameData) {
    name = nameData.toString();
  }
  const numberData = formData.get('number');
  if (numberData) {
    number = Number(numberData.toString());
  }

  if (isNaN(number)) {
    throw new Error('Enter valid number for school and try again');
  }

  const saved = await saveSchool(name, number);

  if(!saved) {
    return;
  }
  
  revalidatePath('/schools/all-schools');
  redirect('/schools/all-schools');  
}