import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Anime } from '../models/anime';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private resourceURL: string = '';

  constructor(private httpClient: HttpClient) {
    this.resourceURL = 'https://api.jikan.moe/v4/'
  }

  get(name: string, page: number = 1, limit: number = 10): Observable<any> {

    let params = new HttpParams();
    if (name !== '' || name !== null) {
      params = params.append('q', name)
    }
    console.log(name + 'servicio');
    params = params.append('limit', limit);
    params = params.append('page', page)
    // params = params.append('rating', 'pg')
    console.log(params.toString())
    return this.httpClient.get(this.resourceURL + 'anime', { params: params });
  }

  getById(id: number) {
    let params: HttpParams;
    return this.httpClient.get(this.resourceURL + 'anime/' + id.toString())
  }

  getTop(type: string, page: number = null, subtype: string = null): Observable<any> {
    // console.log('servicio ' + type)

    let consulta = 'top/' + type
    if (page != null) {
      consulta += '/' + page.toString();
    }
    if (subtype != null) {
      consulta += '/' + subtype;
    }
    return this.httpClient.get(this.resourceURL + consulta)
  }
}
