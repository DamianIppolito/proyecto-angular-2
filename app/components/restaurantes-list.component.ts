import  {Component, OnInit} from "angular2/core";
import { ROUTER_DIRECTIVES,RouteConfig,Router } from 'angular2/router';
import { RestauranteService } from '../services/restaurante.service';

@Component({
  selector: "restaurantes-list",
  templateUrl: "app/view/restaurantes-list.html",
  providers: [RestauranteService]
})

export class RestaurantesListComponent implements OnInit{
  public titulo:string = "Listado de restaurantes:";

  constructor(private _restauranteService: RestauranteService){}

  ngOnInit(){console.log('restaurantes-list component cargado');}
}
