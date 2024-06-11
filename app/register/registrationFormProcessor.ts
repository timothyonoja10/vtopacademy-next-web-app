
import { redirect } from "next/navigation";
import makeRegistration from "./registerApi";
import { saveAuthInfo } from "../authStore";

export default async function processRegistrationForm(formData: FormData) {
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
  
  const data = await makeRegistration(username, password);
  let isAdmin = data.isAdmin === true;
  let isUser = data.isUser === true;
  saveAuthInfo(data.accessToken, isAdmin,isUser);
  
  redirect('/');
}