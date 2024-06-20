
import { redirect } from "next/navigation";
import generateForgotPasswordCode from "./forgotPasswordApi";

// Server Action
export default async function processForgotPasswordForm(formData: FormData) {
  'use server'
   
  let username: string = '';

  const usernameData = formData.get('username');
  if (usernameData) {
    username = usernameData.toString();
  }
  
  const data = await generateForgotPasswordCode(username);

  redirect(`/auth/change-password/${username}`);  
}