import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Residence } from 'src/core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  URL = 'http://localhost:3000/residence';
  constructor(private http: HttpClient) {}
  getallResidence():Observable<Residence[]>{
    return this.http.get<Residence[]>(this.URL)
  }
  addResidence(res:Residence):Observable<Residence[]>{
    return this.http.post<Residence[]>(this.URL,res)
  }
  updateResidence(res:Residence,id:any):Observable<Residence[]>{
    return this.http.put<Residence[]>(this.URL+'/'+id,res)
  }
  getResidence(id:any):Observable<Residence>{
    return this.http.get<Residence>(this.URL+'/'+id)
  }
  deleteResidence(id:any):Observable<Residence[]>{
    return this.http.delete<Residence[]>(this.URL+'/'+id)
  }
  } 

