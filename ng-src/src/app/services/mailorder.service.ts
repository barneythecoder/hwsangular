import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailorderService {
  user: any;
  constructor(private http: Http) { }

  mailReceivedOrder(order){
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://hwsugar.com/mail/sendorder', order, {headers:header})
    .pipe(map(res => res.text));
  }
}
