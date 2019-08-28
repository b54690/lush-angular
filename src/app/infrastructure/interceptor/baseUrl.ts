// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { baseUrl } from '../../config/general';
//
// @Injectable()
// class BaseUrl implements HttpInterceptor {
//
//     public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         const apiRequest = req.clone({url: `${baseUrl}/${req.url}`, headers: headers });
//
//         return next.handle(apiRequest);
//     }
// }
//
// export { BaseUrl as BaseUrlInterceptor };
