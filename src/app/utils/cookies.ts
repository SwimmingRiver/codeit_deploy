interface CookieOptions {
  path?: string;
  domain?: string;
  expires?: Date;
  "max-age"?: number;
  secure?: boolean;
  samesite?: "Strict" | "Lax" | "None";
  [key: string]: string | number | boolean | Date | undefined;
}

export function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {},
) {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (options.path) cookieString += `;path=${options.path}`;
  if (options.domain) cookieString += `;domain=${options.domain}`;
  if (options.expires)
    cookieString += `;expires=${options.expires.toUTCString()}`;
  if (options["max-age"]) cookieString += `;max-age=${options["max-age"]}`;
  if (options.secure) cookieString += `;secure`;
  if (options.samesite) cookieString += `;samesite=${options.samesite}`;

  document.cookie = cookieString;
}

export function isCookieExists(name: string) {
  // 여기에 코드를 작성하세요.
  const encodedName = encodeURIComponent(name);
  const cookies = document.cookie.split(";");
  const cookie = cookies.find((ck) => ck.startsWith(`${encodedName}=`));
  if (cookie) {
    return true;
  }
  return false;
}

export function deleteCookie(name: string) {
  // 여기에 코드를 작성하세요.
  document.cookie = `${encodeURIComponent(name)}=0;max-age=0`;
}
