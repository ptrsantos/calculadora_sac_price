import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = "https://apphackaixades.azurewebsites.net/api/Simulacao"

@Injectable({
  providedIn: 'root'
})
export class ConsultaApiService {

  constructor(private http: HttpClient) { }

  ListarOpcoesFinanciamento(valor: number, prazo: number): Observable<any>{
      const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
     //return this.http.post<any>(`${environment.ApiControleUrl}edicoes/SalvarDados/`, inclusaoModel, { headers: headersSemAuth});
     return this.http.post<any>(url, {"valorDesejado": valor, "prazo": prazo}, { headers: reqHeader});

  }

}

/**Subiu */
