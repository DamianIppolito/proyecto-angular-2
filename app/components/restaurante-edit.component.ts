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
  public resultUpload;

  public filesToUpload: Array<File>;

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

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;

    this.makeFileRequest("http://localhost:90/slim/restaurantes-api.php/upload-file", [], this.filesToUpload).then(
      (result) => {
        this.resultUpload = result;
        this.restaurante.imagen = this.resultUpload.filename;
        console.log(this.resultUpload.filename);
      },
      (error) => {
        this.errorMessage = <any>error;
        if(this.errorMessage !== null){
          console.log(this.errorMessage);
          alert('Error en la petición');
        }
      }
    );
  }

  makeFileRequest(url:string, params:Array<string>, files:Array<File>){
    return new Promise(
      (resolve, reject) => {
        var formData:any = new FormData();
        var xhr = new XMLHttpRequest();
        for (var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i].name);
        }

        xhr.onreadystatechange = function(){
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              resolve(JSON.parse(xhr.response));
            }else{
              reject(xhr.response);
            }
          }
        }
        xhr.open("POST", url, true);
        xhr.send(formData);
      }
    );
  }
}
