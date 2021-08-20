import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Movie} from "../model/movie";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  API = environment.API;

  constructor(private httpClient:HttpClient) { }
  createMovie(movie:Movie):Observable<Movie>{
    return this.httpClient.post<Movie>(this.API+'/movies',movie);
  }

  gellAlllMovie():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.API+'/movies');
  }



}
