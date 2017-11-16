import {Component, OnInit} from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';

import { RestauranteService } from '../services/restaurante.service';
import { Restaurante } from '../model/restaurante';

@Component({
  selector: "restaurantes-detail",
  templateUrl: "app/view/restaurante-detail.html",
  providers: [RestauranteService]
})

export class RestaurantesDetailComponent implements OnInit{
  public restaurante:Restaurante;
  public status:string;
  public errorMessage;

  constructor(
    private _restauranteService: RestauranteService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    this.getRestaurante();
  }

  getRestaurante(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      let random = params['random'];
      this._restauranteService.getRestaurante(id, random).subscribe(
        result => {
          this.restaurante = result.data;
          this.status = result.status;
          if(this.status != 'success'){
            this._router.navigate(["Home"]);
          }else{
            console.log(result.data);
          }
        },
        error => {
          this.errorMessage = <any>error;
          if(this.errorMessage !== null){
            console.log(this.errorMessage);
            alert('Error en la petición');
          }
        }
      );
    });
  }
}
