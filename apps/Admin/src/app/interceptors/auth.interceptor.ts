import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjAxOTVhMzZkLTU4ZGMtNzQ1Ny1hNzhlLTdjNjAxZjFiZmQ2NCIsIm5iZiI6MTc0MjczOTM2MSwiZXhwIjoxNzQyODI1NzYxLCJpc3MiOiJNYWhtdXQgRGVtaXJrxLFyYW4iLCJhdWQiOiJNYWhtdXQgRGVtaXJrxLFyYW4ifQ.apKuv5b2bhG5lidwoKjE3lQHSVereyVIUrzb5sBUvYuxMLsrfq9prK7C0bE64-8up1CHrPqhS7APnyEU7AQ0dA";

  const cloneReq = req.clone({
    setHeaders : {
      Authorization :`Bearer : ${token}`,
    },
  })
  return next(cloneReq);
};
