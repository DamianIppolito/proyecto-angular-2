import { Injectable } from "angular2/core";
import {Http, Response, Headers} from "angular2/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Restaurante} from "../model/restaurante";

@Injectable()
export class RestauranteService{
  constructor(private _http: Http){}

  getRestaurantes(){
    return this._http.get("http://localhost:90/slim/restaurantes-api.php/restaurantes").map(res => res.json());
  }

  getRestaurante(id: string){
    return this._http.get("http://localhost:90/slim/restaurantes-api.php/restaurante/"+id).map(res => res.json());
  }

  addRestaurante(restaurante: Restaurante){
    let json = JSON.stringify(restaurante);
    let params = 'json='+json;
    let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded'});

    return this._http.post("http://localhost:90/slim/restaurantes-api.php/restaurantes", params, {headers:headers}).map(res => res.json());
  }

  editRestaurante(id: string, restaurante: Restaurante){
    let json = JSON.stringify(restaurante);
    let params = 'json='+json;
    let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded'});

    return this._http.post("http://localhost:90/slim/restaurantes-api.php/update-restaurante/"+id, params, {headers:headers}).map(res => res.json());
  }
}
