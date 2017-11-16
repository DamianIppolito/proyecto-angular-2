// Importar Component desde el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
  selector: "mi-app",
  templateUrl: "app/view/home.html"
})

export class AppComponent{
  public titulo:string = "Restaurantes";
  public fecha = new Date(1990,6,27);
}
