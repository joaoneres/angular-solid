import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cep } from '../cep';
import { CepConsultServiceInterface } from '../cep-consult-service.interface';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ApiCepService implements CepConsultServiceInterface {
  baseUrl: string = 'https://ws.apicep.com/cep/';
  constructor(private readonly httpClient: HttpClient) {}

  find(cep: string): Observable<Cep> {
    return this.httpClient.get(this.baseUrl + cep + '.json').pipe(map((data: any) => {
      return new Cep(data['address'], data['district'], data['city'], data['state'], cep);
    }));
  }
}
