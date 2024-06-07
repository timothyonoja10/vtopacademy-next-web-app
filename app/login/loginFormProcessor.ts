import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import makeLogin from "./loginApi";

// Server Action
export default async function processLoginForm(formData: FormData) {
  'use server'
   
  let username: string = '';
  let password: string = '';

  const usernameData = formData.get('username');
  if (usernameData) {
    username = usernameData.toString();
  }
  const passwordData = formData.get('password');
  if (passwordData) {
    password = passwordData.toString();
  }
  
  const data = await makeLogin(username, password);
  const cookieStore = cookies();
  cookieStore.set('accessToken', data.accessToken);
  if (data.isAdmin === true) {
    cookieStore.set('isAdmin', 'true');
  }
  if (data.isUser === true) {
    cookieStore.set('isUser', 'true');
  }
  redirect('/');
    
}