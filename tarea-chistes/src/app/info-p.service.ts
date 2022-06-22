import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPService {

  constructor(private http:HttpClient){}

  obtenerChistesRandom(){
    return this.http.get("https://api.chucknorris.io/jokes/random")
  }

  cambiarChiste(){
    return this.http.get("https://api.chucknorris.io/jokes/random?category={category}")
  }

}
