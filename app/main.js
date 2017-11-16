"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_components_1 = require("./app.components");
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
platform_browser_dynamic_1.bootstrap(app_components_1.AppComponent, [http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS]);
//# sourceMappingURL=main.js.map