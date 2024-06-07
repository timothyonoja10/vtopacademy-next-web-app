import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import deleteSchool from "./deleteSchoolApi";

// Server Action
export default async function processDeleteConfirmation(formData: FormData) {
  'use server'

  let schoolId: number = 0;

  const schoolIdData = formData.get('schoolId');
  if (schoolIdData) {
    schoolId = Number(schoolIdData.toString());
  }

  const data = await deleteSchool(schoolId);
  revalidatePath('/schools');
  redirect('/schools'); 
}