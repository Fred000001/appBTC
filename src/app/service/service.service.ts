import { Injectable } from '@angular/core';

import { firstValueFrom } from 'rxjs';
import { APIResponse } from './interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor (
    public _http: HttpClient
) { }

 async prixBTC() {
 const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
const response = this._http.get<APIResponse>(url)


 const result = await firstValueFrom(response)

 return result.bpi.USD.rate
}
}
