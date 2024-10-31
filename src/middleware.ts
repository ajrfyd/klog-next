import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next();
  // console.log(response);
  // response.cookies.set('sibla', 'jhonna2', {
  //   secure: false,
  //   httpOnly: true,
  //   maxAge: 35040000,
  //   sameSite: 'lax',
  //   // domain: 'http://localhost:3000',
  //   path: '/',
  // });
  // console.log(response);
  // const clientIP = request.ip || request.headers.get('x-real-ip');

  // const requestHeaders = new Headers(request.headers);
  // requestHeaders.set('X-Real-Client-IP', clientIP as string);

  // const res = await fetch('http://localhost:5000/posts/test', {
  //   headers: {
  //     'X-Real-Client-IP': clientIP as string,
  //   },
  // });

  // console.log(res);

  // await fetch('http://localhost:5000/posts/test')
  //   .then((res) => res.json())
  //   .then(console.log);
  return response;
};

export const config = {
  matcher: ['/', '/post/:path*'],
};
