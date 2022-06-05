import { Observable } from "rxjs";
import { Cep } from "./cep";

export interface CepConsultServiceInterface {
  find(cep: string): Observable<Cep>;
}
