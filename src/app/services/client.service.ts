import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Client, ClientRequestRecord } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:8080/customers'; 
  
  constructor(private http: HttpClient) { } 
  
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl).pipe( catchError(this.handleError) );
  }

  getClientBySharedKey(sharedKey: string): Observable<Client> {
    const url = `${this.apiUrl}/${sharedKey}`;
    return this.http.get<Client>(url).pipe( catchError(this.handleError) );;
  }

  searchClientsBySharedKey(sharedKey: string): Observable<Client[]> {
    const url = `${this.apiUrl}/search/${sharedKey}`;
    return this.http.get<Client[]>(url).pipe( catchError(this.handleError) );
  }

  createClient(clientRequest: ClientRequestRecord): Observable<void> {
    return this.http.post<void>(this.apiUrl, clientRequest).pipe( catchError(this.handleError) );
  }

  editClient(clientRequest: ClientRequestRecord): Observable<void> {
    return this.http.put<void>(this.apiUrl, clientRequest).pipe( catchError(this.handleError) );
  }

  private handleError(error: HttpErrorResponse) { 
    // Log or handle the error accordingly 
    console.error('An error occurred:', error.message); 
    return throwError('Something bad happened; please try again later.'); 
  }
}

