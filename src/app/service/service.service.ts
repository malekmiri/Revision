import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agence } from 'src/core/models/agence';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  URL = 'http://localhost:3000/agence';
  constructor(private http: HttpClient) {}
  getallResidence():Observable<Agence[]>{
    return this.http.get<Agence[]>(this.URL)
  }
  addResidence(res:Agence):Observable<Agence[]>{
    return this.http.post<Agence[]>(this.URL,res)
  }
  updateResidence(res:Agence,id:any):Observable<Agence[]>{
    return this.http.put<Agence[]>(this.URL+'/'+id,res)
  }
  getResidence(id:any):Observable<Agence>{
    return this.http.get<Agence>(this.URL+'/'+id)
  }
  deleteResidence(id:any):Observable<Agence[]>{
    return this.http.delete<Agence[]>(this.URL+'/'+id)
  }
  } 

