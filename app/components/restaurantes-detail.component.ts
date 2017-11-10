import  {Component, OnInit} from "angular2/core";
import { RouteParams } from 'angular2/router';
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

  constructor(private _restauranteService: RestauranteService, private _routeParams: RouteParams){}

  ngOnInit(){
    this.getRestaurante();
  }

  getRestaurante(){
    let id = this._routeParams.get('id');
    this._restauranteService.getRestaurante(id).subscribe(
      result => {
        this.restaurante = result.data;
        this.status = result.status;
        if(this.status != 'success'){
          alert('Error en el servidor');
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
  }
}
