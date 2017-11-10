import  {Component, OnInit} from "angular2/core";
import { RouteParams, Router } from 'angular2/router';
import { RestauranteService } from '../services/restaurante.service';
import { Restaurante } from '../model/restaurante';

@Component({
  selector: "restaurantes-add",
  templateUrl: "app/view/restaurante-add.html",
  providers: [RestauranteService]
})

export class RestauranteAddComponent implements OnInit{
  public restaurante:Restaurante;
  public status:string;
  public errorMessage;

  constructor(
    private _restauranteService: RestauranteService,
    private _routeParams: RouteParams,
    private _router: Router
  ){}

  ngOnInit(){
    this.restaurante = new Restaurante(0, '', '', '',null, 'bajo');
    console.log("Componente RestauranteAdd cargado");
  }
}
