import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailorderService {
  user: any;
  constructor(private http: Http) { }

  public mailReceivedOrder(order){
    let body: {
      "personalizations": [
        {
          "to": [
            {
              "email": "rclaudeismael@gmail.com"
            }
          ],
          "subject": "Hello, World!"
        }
      ],
      "from": {
        "email": "orders@hwsugar.com"
      },
      "content": [
        {
          "type": "text/plain",
          "value": "Hello, World!"
        }
      ]
    }
    
    let header = new Headers();
    header.append('Content-Type', 'application/json');/* 
    header.append('Authorization','Bearer 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'); */
    return this.http.post('http://localhost:8080/mail/sendorder', order, {headers:header})
    .pipe(map(res => res.json()))
    .subscribe();
  }
}
