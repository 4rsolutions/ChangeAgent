import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gift } from './GiftManagement/gift.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private giftsUrl = 'https://nihl3yv0rg.execute-api.us-east-2.amazonaws.com/items';

  constructor(
    private http: HttpClient
  ) { }

  getGifts(): Observable<Gift[]> {
    return this.http.get<Gift[]>(this.giftsUrl)
  }

  putGift(gift: Gift): Observable<any> {
    console.log(gift);
    return this.http.put<Gift>(this.giftsUrl, gift,{'headers':httpOptions.headers})
  }
}
