import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, take, catchError } from 'rxjs/operators';
import { throwError, Subscriber } from 'rxjs';
import { HiddenFormComponent } from './hidden-form/hidden-form.component';

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Injectable({
  providedIn: 'root'
})
export class MailchimpService {
  // mailchimpEndpoint = 'https://wojooh.us19.list-manage.com/subscribe/post-json?u=4a0a6af22e69eb2da0f8f249c&amp;id=cd694b89be';
  submitted = false;
  result: string;
  error = '';

  constructor(private http: HttpClient) { }

  addSubscriber(email: string) {

   }
}

