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
var RestaurantesDetailComponent = (function () {
    function RestaurantesDetailComponent(_restauranteService, _route, _router) {
        this._restauranteService = _restauranteService;
        this._route = _route;
        this._router = _router;
    }
    RestaurantesDetailComponent.prototype.ngOnInit = function () {
        this.getRestaurante();
    };
    RestaurantesDetailComponent.prototype.getRestaurante = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            var random = params['random'];
            _this._restauranteService.getRestaurante(id, random).subscribe(function (result) {
                _this.restaurante = result.data;
                _this.status = result.status;
                if (_this.status != 'success') {
                    _this._router.navigate(["Home"]);
                }
                else {
                    console.log(result.data);
                }
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage !== null) {
                    console.log(_this.errorMessage);
                    alert('Error en la petición');
                }
            });
        });
    };
    RestaurantesDetailComponent = __decorate([
        core_1.Component({
            selector: "restaurantes-detail",
            templateUrl: "app/view/restaurante-detail.html",
            providers: [restaurante_service_1.RestauranteService]
        }), 
        __metadata('design:paramtypes', [restaurante_service_1.RestauranteService, (typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, router_1.Router])
    ], RestaurantesDetailComponent);
    return RestaurantesDetailComponent;
    var _a;
}());
exports.RestaurantesDetailComponent = RestaurantesDetailComponent;
//# sourceMappingURL=restaurantes-detail.component.js.map