'use server';
import { cookies } from 'next/headers';

export const setCookie = async (cookieStr: string) => {
  if (!cookieStr) return;

  const cookie = cookieStr
    .split(';')
    .map((v) => v.split('='))
    .reduce(
      (acc, cur) => ((acc[cur[0]] = cur[1]), acc),
      {} as { [key: string]: string },
    );
  // cookies().set('isVisited', 'true', { ...cookie });
  cookies().set('isVisited', 'true', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  });
};
