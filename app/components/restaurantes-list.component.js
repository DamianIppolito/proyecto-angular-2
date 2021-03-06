"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var restaurante_service_1 = require('../services/restaurante.service');
var RestaurantesListComponent = (function () {
    function RestaurantesListComponent(_restauranteService, _route, _router) {
        this._restauranteService = _restauranteService;
        this._route = _route;
        this._router = _router;
        this.titulo = "Listado de restaurantes:";
    }
    RestaurantesListComponent.prototype.ngOnInit = function () {
        this.loading = 'show';
        this.getRestaurantes();
        console.log('restaurantes-list component cargado');
    };
    RestaurantesListComponent.prototype.getRestaurantes = function () {
        var _this = this;
        this._restauranteService.getRestaurantes().subscribe(function (result) {
            _this.restaurantes = result.data;
            _this.status = result.status;
            if (_this.status != 'success') {
                alert('Error en el servidor');
            }
            _this.loading = 'hide';
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert('Error en la petición');
            }
        });
    };
    RestaurantesListComponent.prototype.onBorrarConfirm = function (id) {
        this.confirmado = id;
    };
    RestaurantesListComponent.prototype.onBorrarCancel = function () {
        this.confirmado = null;
    };
    RestaurantesListComponent.prototype.onBorrarRestaurante = function (id) {
        var _this = this;
        this._restauranteService.deleteRestaurante(id).subscribe(function (result) {
            _this.restaurantes = result.data;
            _this.status = result.status;
            if (_this.status != 'success') {
                alert('Error en el servidor');
            }
            _this.getRestaurantes();
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert('Error en la petición');
            }
        });
    };
    RestaurantesListComponent = __decorate([
        core_1.Component({
            selector: "restaurantes-list",
            templateUrl: "app/view/restaurantes-list.html",
            providers: [restaurante_service_1.RestauranteService]
        }), 
        __metadata('design:paramtypes', [restaurante_service_1.RestauranteService, (typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, router_1.Router])
    ], RestaurantesListComponent);
    return RestaurantesListComponent;
    var _a;
}());
exports.RestaurantesListComponent = RestaurantesListComponent;
//# sourceMappingURL=restaurantes-list.component.js.map