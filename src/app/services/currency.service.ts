import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Currency} from "../interfaces/Currency";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

  constructor(private httpClient: HttpClient) {
  }

  getCurrencyRate(): Observable <Currency[]> {
   return this.httpClient.get<Currency[]>(this.url)
  }
}
