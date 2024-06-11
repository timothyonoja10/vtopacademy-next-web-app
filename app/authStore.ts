import { cookies } from "next/headers";

export function isAdminstrator(): boolean {
  let isAdmin: boolean = false;
  const cookieStore = cookies();
  if (cookieStore.has('isAdmin')){
    isAdmin = true;
  }
  return isAdmin;
}

export function hasAccesstoken(): boolean {
  const cookieStore = cookies();
  return cookieStore.has('accessToken');
}

export function getAccssToken() {
  return cookies().get('accessToken')?.value;
}

export function saveAuthInfo(
  accessToken: string, isAdmin: boolean, isUser: boolean
): boolean {
  const cookieStore = cookies();
  cookieStore.set('accessToken', accessToken);
  if (isAdmin === true) {
    cookieStore.set('isAdmin', 'true');
  }
  if (isUser === true) {
    cookieStore.set('isUser', 'true');
  }
  return true;
}

export function deleteAuthInfo(): boolean {
  const cookieStore = cookies();
  cookieStore.delete('accessToken');
  cookieStore.delete('isAdmin');
  cookieStore.delete('isUser');
  return true;
}