import { InjectionToken } from "@angular/core";
import { CepConsultServiceInterface } from "./cep-consult-service.interface";

export const CEP_CONSULT_SERVICE = new InjectionToken<CepConsultServiceInterface>('CepConsultServiceInterface');
