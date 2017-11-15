import  {Component, OnInit} from "angular2/core";
import { RouteParams, Router } from 'angular2/router';
import { RestauranteService } from '../services/restaurante.service';
import { Restaurante } from '../model/restaurante';

@Component({
  selector: "restaurantes-edit",
  templateUrl: "app/view/restaurante-add.html",
  providers: [RestauranteService]
})

export class RestauranteEditComponent implements OnInit{
  public titulo:string = "Editar Restaurante";
  public restaurante:Restaurante;
  public status:string;
  public errorMessage;

  constructor(
    private _restauranteService: RestauranteService,
    private _routeParams: RouteParams,
    private _router: Router
  ){}

  ngOnInit(){
    this.restaurante = new Restaurante(
      parseInt(this._routeParams.get('id')),
      this._routeParams.get('nombre'),
      this._routeParams.get('direccion'),
      this._routeParams.get('descripcion'),
      null,
      this._routeParams.get('precio')
    );

    this.getRestaurante();
  }

  onSubmit(){
    let id = this._routeParams.get('id');
    this._restauranteService.editRestaurante(id, this.restaurante).subscribe(
      result => {
        this.status = result.status;
        if(this.status != 'success'){
          alert('Error en el servidor');
        }else{
          this._router.navigate(["Home"]);
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

  getRestaurante(){
    let id = this._routeParams.get('id');
    this._restauranteService.getRestaurante(id).subscribe(
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
  }

  callPrecio(value){
    this.restaurante.precio = value;
  }
}
