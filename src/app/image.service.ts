import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import {  HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private query:string;
  private API_KEY:string=environment.Pixabay_API_KEY;
  private API_URL:string=environment.Pixabay_API_URL;
  private URL:string=this.API_URL+this.API_KEY+"&q=";

  constructor(private _http:HttpClient) { }


  getImage(query){
    return this._http.get(this.URL + query )
  }

}
