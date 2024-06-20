
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import updateSchool from './updateSchoolApi';

// Server Action
export default async function processSchoolForm(formData: FormData) {
  'use server' 

  let name: string = '';
  let schoolId: number = 0;
  let number: number = 0;

  const schoolIdData = formData.get('schoolId');
  if (schoolIdData) {
    schoolId = Number(schoolIdData.toString());
  }

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

  let data = await updateSchool(schoolId, name, number);
  
  revalidatePath('/schools/all-schools');
  redirect('/schools/all-schools');  
}