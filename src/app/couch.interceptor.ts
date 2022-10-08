import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CouchInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const basicAuth = "Basic "+btoa(environment.dbUsername+":"+environment.dbPassword);

    const url = environment.url2;

    request = request.clone({
      // setHeaders: {
      //   Authorization: `${basicAuth}`,
      //   Accept: `application/json`
      // },
      withCredentials: true,
      url: url + request.url,
      headers: request.headers.set("Authorization", basicAuth)

    });

    console.log("interceptor",request);
    return next.handle(request);
  }
}
