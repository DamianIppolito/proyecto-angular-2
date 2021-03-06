import {Component, OnInit} from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';

import { RestauranteService } from '../services/restaurante.service';
import { Restaurante } from '../model/restaurante';

@Component({
  selector: "restaurantes-list",
  templateUrl: "app/view/restaurantes-list.html",
  providers: [RestauranteService]
})

export class RestaurantesListComponent implements OnInit{
  public titulo:string = "Listado de restaurantes:";
  public restaurantes:Array<Restaurante>;
  public status:string;
  public errorMessage;
  public loading:string;
  public confirmado;

  constructor(
    private _restauranteService: RestauranteService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    this.loading = 'show';
    this.getRestaurantes();
    console.log('restaurantes-list component cargado');
  }

  getRestaurantes(){
    this._restauranteService.getRestaurantes().subscribe(
      result => {
        this.restaurantes = result.data;
        this.status = result.status;
        if(this.status != 'success'){
          alert('Error en el servidor');
        }
        this.loading = 'hide';
      },
      error => {
        this.errorMessage = <any>error;
        if(this.errorMessage !== null){
          console.log(this.errorMessage);
          alert('Error en la petición');
        }
      }
    );
  }

  onBorrarConfirm(id){
    this.confirmado = id;
  }

  onBorrarCancel(){
    this.confirmado = null;
  }

  onBorrarRestaurante(id:string){
    this._restauranteService.deleteRestaurante(id).subscribe(
      result => {
        this.restaurantes = result.data;
        this.status = result.status;
        if(this.status != 'success'){
          alert('Error en el servidor');
        }
        this.getRestaurantes();
      },
      error => {
        this.errorMessage = <any>error;
        if(this.errorMessage !== null){
          console.log(this.errorMessage);
          alert('Error en la petición');
        }
      }
    );
  }
}
