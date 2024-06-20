
import { redirect } from 'next/navigation';
import changePassword from './chagePasswordApi';
import { saveAuthInfo } from '@/app/authStore';

// Server Action
export default async function processChangePasswordForm(formData: FormData) {
  'use server' 

  let username: string = '';
  let code: string = '';
  let newPassword: string = '';

  const usernameData = formData.get('username');
  if (usernameData) {
    username = usernameData.toString();
    console.log('username: ', username);
  }

  const codeData = formData.get('code');
  if (codeData) {
    code = codeData.toString();
    console.log('code: ', code);
  }

  const passwordData = formData.get('password');
  if (passwordData) {
    newPassword = passwordData.toString();
    console.log('newPassword: ', newPassword);
  }

  let data = await changePassword(username, newPassword, code);
  let isAdmin = data.isAdmin === true;
  let isUser = data.isUser === true;
  saveAuthInfo(data.accessToken, isAdmin,isUser);
  
  redirect('/');  
}