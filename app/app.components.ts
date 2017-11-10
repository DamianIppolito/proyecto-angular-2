import  {Component} from "angular2/core";
import { ROUTER_DIRECTIVES,RouteConfig,Router } from 'angular2/router';
import { RestaurantesListComponent } from './components/restaurantes-list.component';
import { RestaurantesDetailComponent } from './components/restaurantes-detail.component';

@Component({
  selector: "mi-app",
  templateUrl: "app/view/home.html",
  directives: [RestaurantesListComponent, ROUTER_DIRECTIVES, RestaurantesDetailComponent]
})

@RouteConfig([
  {path: '/', name: 'Home', component: RestaurantesListComponent, useAsDefault: true},
  {path: '/restaurante/:id', name: 'Restaurante', component: RestaurantesDetailComponent}
])

export class AppComponent{
  public titulo:string = "Restaurantes";
}
