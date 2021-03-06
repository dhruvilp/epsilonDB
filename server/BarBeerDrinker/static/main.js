(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _insight_insight_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insight/insight.component */ "./src/app/insight/insight.component.ts");
/* harmony import */ var _bars_bars_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bars/bars.component */ "./src/app/bars/bars.component.ts");
/* harmony import */ var _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drinkers/drinkers.component */ "./src/app/drinkers/drinkers.component.ts");
/* harmony import */ var _bartenders_bartenders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bartenders/bartenders.component */ "./src/app/bartenders/bartenders.component.ts");
/* harmony import */ var _manufacturers_manufacturers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manufacturers/manufacturers.component */ "./src/app/manufacturers/manufacturers.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _manufacturer_details_manufacturer_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manufacturer-details/manufacturer-details.component */ "./src/app/manufacturer-details/manufacturer-details.component.ts");
/* harmony import */ var _bartender_details_bartender_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bartender-details/bartender-details.component */ "./src/app/bartender-details/bartender-details.component.ts");
/* harmony import */ var _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modifications/modifications.component */ "./src/app/modifications/modifications.component.ts");
/* harmony import */ var _modification_details_modification_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modification-details/modification-details.component */ "./src/app/modification-details/modification-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'welcome'
    },
    {
        path: 'static',
        pathMatch: 'full',
        redirectTo: 'welcome'
    },
    {
        path: 'welcome',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    },
    {
        path: 'bars',
        pathMatch: 'full',
        component: _bars_bars_component__WEBPACK_IMPORTED_MODULE_7__["BarsComponent"]
    },
    {
        path: 'bars/:bars',
        pathMatch: 'full',
        component: _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__["BarDetailsComponent"]
    },
    {
        path: 'beers',
        pathMatch: 'full',
        component: _beers_beers_component__WEBPACK_IMPORTED_MODULE_5__["BeersComponent"]
    },
    {
        path: 'beers/:beer',
        pathMatch: 'full',
        component: _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__["BeerDetailsComponent"]
    },
    {
        path: 'drinkers',
        pathMatch: 'full',
        component: _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_8__["DrinkersComponent"]
    },
    {
        path: 'drinkers/:drinker',
        pathMatch: 'full',
        component: _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_11__["DrinkerDetailsComponent"]
    },
    {
        path: 'bartenders',
        pathMatch: 'full',
        component: _bartenders_bartenders_component__WEBPACK_IMPORTED_MODULE_9__["BartendersComponent"]
    },
    {
        path: 'bartenders/:bartender',
        pathMatch: 'full',
        component: _bartender_details_bartender_details_component__WEBPACK_IMPORTED_MODULE_13__["BartenderDetailsComponent"]
    },
    {
        path: 'manufacturers',
        pathMatch: 'full',
        component: _manufacturers_manufacturers_component__WEBPACK_IMPORTED_MODULE_10__["ManufacturersComponent"]
    },
    {
        path: 'manufacturers/:manufacturer',
        pathMatch: 'full',
        component: _manufacturer_details_manufacturer_details_component__WEBPACK_IMPORTED_MODULE_12__["ManufacturerDetailsComponent"]
    },
    {
        path: 'modifications',
        pathMatch: 'full',
        component: _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_14__["ModificationsComponent"]
    },
    {
        path: 'modifications/:modification',
        pathMatch: 'full',
        component: _modification_details_modification_details_component__WEBPACK_IMPORTED_MODULE_15__["ModificationDetailsComponent"]
    },
    {
        path: 'insight',
        pathMatch: 'full',
        component: _insight_insight_component__WEBPACK_IMPORTED_MODULE_6__["InsightComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color: #076eb9;\">\n  <a class=\"navbar-brand\" href=\"#\">\n    Epsilon Project</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item \" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/bars\">Bars </a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/beers\">Beers</a>\n      </li>\n\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/drinkers\">Drinkers</a>\n      </li>\n\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/bartenders\">Bartenders</a>\n      </li>\n\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/manufacturers\">Manufacturers</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/modifications\">Modifications</a>\n      </li>\n      \n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/insight\">Insight</a>\n      </li>\n  \n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bar-beer-drinker-ui';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _insight_insight_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./insight/insight.component */ "./src/app/insight/insight.component.ts");
/* harmony import */ var _bars_bars_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bars/bars.component */ "./src/app/bars/bars.component.ts");
/* harmony import */ var _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./drinkers/drinkers.component */ "./src/app/drinkers/drinkers.component.ts");
/* harmony import */ var _bartenders_bartenders_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bartenders/bartenders.component */ "./src/app/bartenders/bartenders.component.ts");
/* harmony import */ var _manufacturers_manufacturers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./manufacturers/manufacturers.component */ "./src/app/manufacturers/manufacturers.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _manufacturer_details_manufacturer_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./manufacturer-details/manufacturer-details.component */ "./src/app/manufacturer-details/manufacturer-details.component.ts");
/* harmony import */ var _bartender_details_bartender_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bartender-details/bartender-details.component */ "./src/app/bartender-details/bartender-details.component.ts");
/* harmony import */ var _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modifications/modifications.component */ "./src/app/modifications/modifications.component.ts");
/* harmony import */ var _modification_details_modification_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modification-details/modification-details.component */ "./src/app/modification-details/modification-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_9__["BarDetailsComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_10__["BeerDetailsComponent"],
                _beers_beers_component__WEBPACK_IMPORTED_MODULE_11__["BeersComponent"],
                _insight_insight_component__WEBPACK_IMPORTED_MODULE_13__["InsightComponent"],
                _bars_bars_component__WEBPACK_IMPORTED_MODULE_14__["BarsComponent"],
                _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_15__["DrinkersComponent"],
                _bartenders_bartenders_component__WEBPACK_IMPORTED_MODULE_16__["BartendersComponent"],
                _manufacturers_manufacturers_component__WEBPACK_IMPORTED_MODULE_17__["ManufacturersComponent"],
                _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_18__["DrinkerDetailsComponent"],
                _manufacturer_details_manufacturer_details_component__WEBPACK_IMPORTED_MODULE_19__["ManufacturerDetailsComponent"],
                _bartender_details_bartender_details_component__WEBPACK_IMPORTED_MODULE_20__["BartenderDetailsComponent"],
                _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_21__["ModificationsComponent"],
                _modification_details_modification_details_component__WEBPACK_IMPORTED_MODULE_22__["ModificationDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-details/bar-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1kZXRhaWxzL2Jhci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{barName}}</h1>\n    <p class=\"bar-details\" *ngIf=\"barDetails\">\n      {{barDetails?.address}}<span *ngIf=\"barDetails.address&&barDetails.city\">,</span>\n      {{barDetails?.city}}, {{barDetails?.state}}, {{barDetails?.zipcode}}\n    </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Menu</h2>\n  <br>\n  <p-table [value]=\"menu\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Item Name</th>\n        <th>Type (Beer/Food)</th>\n        <th>Manufacturer</th>\n        <th>Price</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-item>\n      <tr>\n        <td><a routerLink=\"/beers/{{ item.itemname }}\">{{ item.itemname }}</a></td>\n          <td>{{ item.type}}</td>\n          <td>{{ item.maker}}</td>\n          <td>{{ item.weekendprice | currency }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n</div>\n<br><br>\n\n<div class=\"container\">\n  <br>\n  <div id=\"bargraph\"></div>\n</div>\n\n<div class=\"container\">\n  <br>\n  <div id=\"bargraph2\"></div>\n</div>\n\n<div class=\"container\">\n  <br>\n  <div id=\"bargraph3\"></div>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Top 10 Drinkers</h2>\n  <p class=\"text-center\">Who spends the most</p>\n  <p-table [value]=\"drinkers\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Drinker</th>\n        <th>Amount Spend ($)</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bar>\n      <tr>\n        <td>{{ bar[0] }}</td>\n        <td>{{ bar[1] | currency}}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Top 10 Beers</h2>\n  <p class=\"text-center\">Which are most popular on Tuesday</p>\n  <p-table [value]=\"beers\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Beer</th>\n        <th>Number of beers sold</th>\n        <!--<th>Day</th>-->\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bar>\n      <tr>\n        <td>{{ bar[0] }}</td>\n        <td>{{ bar[1] }}</td>\n        <!--<td>{{ bar.day }}</td>-->\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.ts ***!
  \******************************************************/
/*! exports provided: BarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDetailsComponent", function() { return BarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarDetailsComponent = /** @class */ (function () {
    function BarDetailsComponent(barservice, route) {
        var _this = this;
        this.barservice = barservice;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bars');
            barservice.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar Not Found');
                }
                else {
                    console.error(error.status + '-' + error.body);
                    alert('An error occured on the Server. Please check browser console!');
                }
            });
            barservice.getMenu(_this.barName).subscribe(function (data) {
                _this.menu = data;
            });
            _this.barservice.get_top_drinkers(_this.barName).subscribe(function (data) {
                _this.drinkers = data;
            });
            _this.barservice.get_top_beers(_this.barName).subscribe(function (data) {
                _this.beers = data;
            });
            _this.barservice.getBusyBarDays(_this.barName).subscribe(function (data) {
                console.log(data);
                var day = [];
                var busyday = [];
                data.forEach(function (bar) {
                    day.push(bar.transday);
                    busyday.push(bar.busyday);
                });
                _this.renderCharts(day, busyday);
            });
            _this.barservice.getBusiestTimes(_this.barName).subscribe(function (data) {
                console.log(data);
                var qty = [];
                var time = [];
                data.forEach(function (bar) {
                    qty.push(bar.qty);
                    time.push(bar.time);
                });
                _this.renderCharts2(time, qty);
            });
            _this.barservice.getInventoryFraction(_this.barName).subscribe(function (data) {
                console.log(data);
                var day = [];
                var fraction = [];
                data.forEach(function (bar) {
                    day.push(bar.day);
                    fraction.push(bar.fraction);
                });
                _this.renderCharts3(day, fraction);
            });
        });
    }
    BarDetailsComponent.prototype.ngOnInit = function () {
    };
    BarDetailsComponent.prototype.renderCharts = function (day, busyday) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Transactions on different days'
            },
            xAxis: {
                categories: day,
                title: {
                    style: {
                        color: 'green',
                        fontSize: '20'
                    },
                    text: 'Days'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    style: {
                        color: 'green',
                        fontSize: '20'
                    },
                    text: '# of Transactions'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    datalabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: busyday
                }]
        });
    };
    BarDetailsComponent.prototype.renderCharts2 = function (time, qty) {
        Highcharts.chart('bargraph2', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Busiest Times'
            },
            xAxis: {
                categories: time,
                title: {
                    style: {
                        color: 'green',
                        fontSize: '20'
                    },
                    text: 'Time Range'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    style: {
                        color: 'green',
                        fontSize: '20'
                    },
                    text: '# of Transactions'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    datalabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: qty
                }]
        });
    };
    BarDetailsComponent.prototype.renderCharts3 = function (day, fraction) {
        Highcharts.chart('bargraph3', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Inventory Fraction'
            },
            xAxis: {
                categories: day,
                title: {
                    style: {
                        color: 'green',
                        fontSize: '20'
                    },
                    text: 'Days'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    style: {
                        color: 'green',
                        fontSize: '20'
                    },
                    text: 'Fraction'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    datalabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: fraction
                }]
        });
    };
    BarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-details',
            template: __webpack_require__(/*! ./bar-details.component.html */ "./src/app/bar-details/bar-details.component.html"),
            styles: [__webpack_require__(/*! ./bar-details.component.css */ "./src/app/bar-details/bar-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bars.service.ts":
/*!*********************************!*\
  !*** ./src/app/bars.service.ts ***!
  \*********************************/
/*! exports provided: BarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsService", function() { return BarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsService = /** @class */ (function () {
    function BarsService(http) {
        this.http = http;
    }
    BarsService.prototype.getBars = function () {
        return this.http.get('/api/bars');
    };
    BarsService.prototype.getBar = function (bar) {
        return this.http.get('/api/bars/' + bar);
    };
    BarsService.prototype.getMenu = function (bar) {
        return this.http.get('/api/menu/' + bar);
    };
    BarsService.prototype.getFrequentCounts = function () {
        return this.http.get('/api/frequents-data');
    };
    BarsService.prototype.get_top_drinkers = function (barname) {
        return this.http.get('/api/get_top_drinkers/' + barname);
    };
    BarsService.prototype.get_top_beers = function (barname) {
        return this.http.get('/api/get_top_beers/' + barname);
    };
    BarsService.prototype.getBusyBarDays = function (barname) {
        return this.http.get('/api/get_busy_bardays/' + barname);
    };
    BarsService.prototype.getBusiestTimes = function (barname) {
        return this.http.get('/api/busiesttimes/' + barname);
    };
    BarsService.prototype.getInventoryFraction = function (barname) {
        return this.http.get('/api/inventory/' + barname);
    };
    BarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BarsService);
    return BarsService;
}());



/***/ }),

/***/ "./src/app/bars/bars.component.css":
/*!*****************************************!*\
  !*** ./src/app/bars/bars.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnMvYmFycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bars/bars.component.html":
/*!******************************************!*\
  !*** ./src/app/bars/bars.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\" style=\"background-color: #bad6f3;\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Bar Page</h1>\n    <p class=\"lead\">Explore different Bars in the USA</p>\n  </div>\n</div>\n\n<div class=\"container\">\n\n    <p-table [value]=\"bars\">\n      <ng-template pTemplate=\"header\">\n          <tr>\n            <th>Bar Name</th>\n            <th>Bar ID</th>\n            <th>Address</th>\n            <th>City</th>\n            <th>State</th>\n            <th>Zipcode</th>\n          </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-bar>\n          <tr>\n            <td>\n              <a routerLink=\"/bars/{{bar.barname}}\">\n                {{bar.barname}}\n              </a>\n            </td> \n            <td>{{ bar.barID }}</td>\n            <td>{{ bar.address }}</td>\n            <td>{{ bar.city }}</td>\n            <td>{{bar.state}}</td>\n            <td>{{ bar.zipcode }}</td>\n          </tr>\n      </ng-template>\n    </p-table>\n    \n\n  </div>\n  \n  <br><br>\n"

/***/ }),

/***/ "./src/app/bars/bars.component.ts":
/*!****************************************!*\
  !*** ./src/app/bars/bars.component.ts ***!
  \****************************************/
/*! exports provided: BarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsComponent", function() { return BarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsComponent = /** @class */ (function () {
    function BarsComponent(barService) {
        this.barService = barService;
        this.getBars();
    }
    BarsComponent.prototype.ngOnInit = function () {
    };
    BarsComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('could not retrive a list of bars');
        });
    };
    BarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bars',
            template: __webpack_require__(/*! ./bars.component.html */ "./src/app/bars/bars.component.html"),
            styles: [__webpack_require__(/*! ./bars.component.css */ "./src/app/bars/bars.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], BarsComponent);
    return BarsComponent;
}());



/***/ }),

/***/ "./src/app/bartender-details/bartender-details.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/bartender-details/bartender-details.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnRlbmRlci1kZXRhaWxzL2JhcnRlbmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bartender-details/bartender-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/bartender-details/bartender-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{bartenderName}}</h1>\n    <p class=\"bartender-details\">\n      Works at <i>\" {{barname}} \"</i>\n    </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Weekly Shifts</h2>\n  <p-table [value]=\"bartendershift\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>MON</th>\n        <th>TUE</th>\n        <th>WED</th>\n        <th>THU</th>\n        <th>FRI</th>\n        <th>SAT</th>\n        <th>SUN</th>\n\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bartender>\n      <tr>\n        <td>{{ bartender.mon}}</td>\n        <td>{{ bartender.tue}}</td>\n        <td>{{ bartender.wed}}</td>\n        <td>{{ bartender.thur}}</td>\n        <td>{{ bartender.fri}}</td>\n        <td>{{ bartender.sat}}</td>\n        <td>{{ bartender.sun}}</td>\n\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Number of beers sold</h2>\n  <p-table [value]=\"bartenderbeer\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Beer Name</th>\n        <th>No. of Beers sold</th>\n        \n\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bartender>\n      <tr>\n        <td>{{ bartender.itemname}}</td>\n        <td>{{ bartender.total_sold }}</td>\n        \n\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>"

/***/ }),

/***/ "./src/app/bartender-details/bartender-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/bartender-details/bartender-details.component.ts ***!
  \******************************************************************/
/*! exports provided: BartenderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartenderDetailsComponent", function() { return BartenderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bartenders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bartenders.service */ "./src/app/bartenders.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BartenderDetailsComponent = /** @class */ (function () {
    function BartenderDetailsComponent(bartenderService, route) {
        var _this = this;
        this.bartenderService = bartenderService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.bartenderName = paramMap.get('bartender');
            _this.bartenderService.get_bartender_shift(_this.bartenderName).subscribe(function (data) {
                _this.bartendershift = data;
                _this.barname = _this.bartendershift[0].barname;
            });
            _this.bartenderService.get_bartender_beerssold(_this.bartenderName).subscribe(function (data) {
                _this.bartenderbeer = data;
            });
        });
    }
    BartenderDetailsComponent.prototype.ngOnInit = function () {
    };
    BartenderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bartender-details',
            template: __webpack_require__(/*! ./bartender-details.component.html */ "./src/app/bartender-details/bartender-details.component.html"),
            styles: [__webpack_require__(/*! ./bartender-details.component.css */ "./src/app/bartender-details/bartender-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bartenders_service__WEBPACK_IMPORTED_MODULE_1__["BartendersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BartenderDetailsComponent);
    return BartenderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bartenders.service.ts":
/*!***************************************!*\
  !*** ./src/app/bartenders.service.ts ***!
  \***************************************/
/*! exports provided: BartendersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartendersService", function() { return BartendersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BartendersService = /** @class */ (function () {
    function BartendersService(http) {
        this.http = http;
    }
    BartendersService.prototype.get_bartenders = function () {
        return this.http.get('/api/bartender');
    };
    BartendersService.prototype.get_bartender_shift = function (bartender_name) {
        return this.http.get("/api/get_bartender_shifts/" + bartender_name);
    };
    BartendersService.prototype.get_bartender_beerssold = function (bartender_name) {
        return this.http.get("/api/get_bartender_beerssold/" + bartender_name);
    };
    BartendersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BartendersService);
    return BartendersService;
}());



/***/ }),

/***/ "./src/app/bartenders/bartenders.component.css":
/*!*****************************************************!*\
  !*** ./src/app/bartenders/bartenders.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnRlbmRlcnMvYmFydGVuZGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bartenders/bartenders.component.html":
/*!******************************************************!*\
  !*** ./src/app/bartenders/bartenders.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\" style=\"background-color: #bad6f3;\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Bartenders Page</h1>\n      <p class=\"lead\">Explore Bartenders</p>\n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <h2 class=\"text-center font-weight-light\">Details of Bartenders and BarName where they work</h2>\n    <p-table [value]=\"bartender\">\n      <ng-template pTemplate=\"header\">\n        <tr> \n          <th class=\"text-center\">Bartender Name</th>\n          <th class=\"text-center\">Bar Name</th>\n\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-bart>\n        <tr>\n          <td class=\"text-center\"><a routerLink=\"/bartenders/{{ bart.name }}\">{{ bart.name }}</a></td>\n          <td class=\"text-center\">{{ bart.barname }}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n    <br><br>\n  </div>"

/***/ }),

/***/ "./src/app/bartenders/bartenders.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bartenders/bartenders.component.ts ***!
  \****************************************************/
/*! exports provided: BartendersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartendersComponent", function() { return BartendersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bartenders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bartenders.service */ "./src/app/bartenders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BartendersComponent = /** @class */ (function () {
    function BartendersComponent(bartenderService) {
        var _this = this;
        this.bartenderService = bartenderService;
        this.bartenderService.get_bartenders().subscribe(function (data) {
            _this.bartender = data;
            console.log(_this.bartender);
        });
    }
    BartendersComponent.prototype.ngOnInit = function () {
    };
    BartendersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bartenders',
            template: __webpack_require__(/*! ./bartenders.component.html */ "./src/app/bartenders/bartenders.component.html"),
            styles: [__webpack_require__(/*! ./bartenders.component.css */ "./src/app/bartenders/bartenders.component.css")]
        }),
        __metadata("design:paramtypes", [_bartenders_service__WEBPACK_IMPORTED_MODULE_1__["BartendersService"]])
    ], BartendersComponent);
    return BartendersComponent;
}());



/***/ }),

/***/ "./src/app/beer-details/beer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result-count{\n    font-size: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVlci1kZXRhaWxzL2JlZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYmVlci1kZXRhaWxzL2JlZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdC1jb3VudHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{beerName}}</h1>\n    <p class=\"beer-details\" *ngIf=\"manufacturer\">\n      Made by <i>{{manufacturer}}</i>\n    </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <br>\n  <div>\n      <h2 class=\"text-center font-weight-light\">Basic Info</h2>\n      <p class=\"text-center\">About [ {{beerName}} Beer ]</p>\n    <span class=\"font-weight-light result-count\"> Sold at {{beerLocations?.length}} bars in the USA</span>\n    <br>\n    <br>\n    <p-table [value]=\"beerLocations\" sortMode=\"multiple\" sortField=\"weekendprice\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Bar</th>\n          <th>Price</th>\n        </tr>\n      </ng-template>\n\n      <ng-template pTemplate=\"body\" let-bar>\n        <tr>\n          <td><a routerLink=\"/bars/{{ bar.Bar }}\">{{ bar.barname }}</a></td>\n          <td>{{ bar.weekendprice | currency }}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n    <br> <br>\n\n  </div>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Top 10 Bars</h2>\n  <p class=\"text-center\">Where this beer Sells the Most.</p>\n  <p-table [value]=\"bars\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Bar</th>\n        <th>Number of Beers Sold</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beer>\n      <tr>\n        <td>{{ beer.barname }}</td>\n        <td>{{ beer.numBeersSold }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>\n\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Top 10 Consumers</h2>\n  <p class=\"text-center\">Who are biggest buyers of this Beer.</p>\n  <p-table [value]=\"consumers\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Name</th>\n        <th>Number of Beers Bought</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beer>\n      <tr>\n        <td>{{ beer.transID }}</td>\n        <td>{{ beer.biggestConsumers }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Top 10 Dates</h2>\n  <p class=\"text-center\">When Beer Solds the Most.</p>\n  <p-table [value]=\"dates\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Dates [yyyy-mm-dd]</th>\n        <th>Number of Beers Bought</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beer>\n      <tr>\n        <td>{{ beer.transdate }}</td>\n        <td>{{ beer.mostselling }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Beers Sold Timings</h2>\n  <p class=\"text-center\">Time Distribution of When Beers Sold the Most</p>\n  <p-table [value]=\"beersold\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>TransID</th>\n        <th>TransDate</th>\n        <th>TransDay</th>\n        <th>Time</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beersold>\n      <tr>\n        <td>{{ beersold.transID }}</td>\n        <td>{{ beersold.transdate }}</td>\n        <td>{{ beersold.transday }}</td>\n        <td>{{ beersold.transtime }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.ts ***!
  \********************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerDetailsComponent = /** @class */ (function () {
    function BeerDetailsComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
            console.log(_this.beerName);
            _this.beerService.getBarsSelling(_this.beerName).subscribe(function (data) {
                _this.beerLocations = data;
            });
            _this.beerService.getTop10Bars(_this.beerName).subscribe(function (data) {
                _this.bars = data;
            });
            _this.beerService.getTop10Consumers(_this.beerName).subscribe(function (data) {
                _this.consumers = data;
                console.log(_this.consumers);
            });
            _this.beerService.getTop10Dates(_this.beerName).subscribe(function (data) {
                _this.dates = data;
                console.log(_this.dates);
            });
            _this.beerService.getBeerManufacturers(_this.beerName).subscribe(function (data) {
                _this.manufacturer = data;
            });
            _this.beerService.get_time_beer_sold_most(_this.beerName).subscribe(function (data) {
                _this.beersold = data;
            });
        });
    }
    BeerDetailsComponent.prototype.ngOnInit = function () {
    };
    BeerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-details',
            template: __webpack_require__(/*! ./beer-details.component.html */ "./src/app/beer-details/beer-details.component.html"),
            styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/beer-details/beer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/beers.service.ts":
/*!**********************************!*\
  !*** ./src/app/beers.service.ts ***!
  \**********************************/
/*! exports provided: BeersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersService", function() { return BeersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersService = /** @class */ (function () {
    function BeersService(http) {
        this.http = http;
    }
    BeersService.prototype.getBeers = function () {
        return this.http.get('/api/beer');
    };
    BeersService.prototype.getTop10Bars = function (beer) {
        return this.http.get('/api/Top10BarBeer/' + beer);
    };
    BeersService.prototype.getTop10Consumers = function (beer) {
        return this.http.get('/api/Top10Consumer/' + beer);
    };
    BeersService.prototype.getTop10Dates = function (beer) {
        return this.http.get('/api/get_top10_dates/' + beer);
    };
    BeersService.prototype.get_time_beer_sold_most = function (beer) {
        return this.http.get('/api/get_time_beer_sold_most/' + beer);
    };
    BeersService.prototype.getBarsSelling = function (beer) {
        return this.http.get('/api/bars-selling/' + beer);
    };
    BeersService.prototype.getBeerManufacturers = function (beer) {
        if (beer) {
            return this.http.get("/api/beer-manufacturer/" + beer);
        }
        return this.http.get('/api/beer-manufacturer');
    };
    BeersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeersService);
    return BeersService;
}());



/***/ }),

/***/ "./src/app/beers/beers.component.css":
/*!*******************************************!*\
  !*** ./src/app/beers/beers.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXJzL2JlZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/beers/beers.component.html":
/*!********************************************!*\
  !*** ./src/app/beers/beers.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\" style=\"background-color: #bad6f3;\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">USA's most popular BEERS can be found here!</h1>\n    <p class=\"lead\">List of Beers with Manufacturers</p>\n\n    <p-dropdown *ngIf=\"manufacturerOptions\" [ngClass]=\"{ 'no-option-selected': selectedManufacturer === undefined || selectedManufacturer === null }\"\n      placeholder=\"Filter by manufacturer\" [options]=\"manufacturerOptions\" [(ngModel)]=\"selectedManufacturer\" showClear=\"true\"\n      (onChange)=\"filterBeers($event.value)\"></p-dropdown>\n\n  </div>\n</div>\n<br>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Beers</h2>\n  <p-table [value]=\"beers\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Name</th>\n        <th>Manufacturer</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beer>\n      <tr>\n        <td><a routerLink=\"/beers/{{ beer.itemname }}\">{{ beer.itemname }}</a></td>\n        <td>{{ beer.maker }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>"

/***/ }),

/***/ "./src/app/beers/beers.component.ts":
/*!******************************************!*\
  !*** ./src/app/beers/beers.component.ts ***!
  \******************************************/
/*! exports provided: BeersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersComponent", function() { return BeersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersComponent = /** @class */ (function () {
    function BeersComponent(beerService) {
        var _this = this;
        this.beerService = beerService;
        this.beerService.getBeers().subscribe(function (data) {
            _this.beers = data;
            _this.orignalBeersList = data;
            console.log(data);
        });
        this.beerService.getBeerManufacturers().subscribe(function (data) {
            console.log(data);
            _this.manufacturerOptions = data.map(function (manf) {
                return {
                    label: manf,
                    value: manf,
                };
            });
        });
    }
    BeersComponent.prototype.ngOnInit = function () {
    };
    BeersComponent.prototype.filterBeers = function (manufacturer) {
        this.beers = this.orignalBeersList;
        if (manufacturer) {
            this.beers = this.orignalBeersList.filter(function (beer) { return beer.maker === manufacturer; });
        }
    };
    BeersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beers',
            template: __webpack_require__(/*! ./beers.component.html */ "./src/app/beers/beers.component.html"),
            styles: [__webpack_require__(/*! ./beers.component.css */ "./src/app/beers/beers.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"]])
    ], BeersComponent);
    return BeersComponent;
}());



/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItZGV0YWlscy9kcmlua2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{drinkerName}}</h1>\n    <p class=\"drinker-details\" *ngIf=\"drinkerDetails\">\n      {{drinkerDetails?.address}} <span *ngIf=\"drinkerDetails.Address && drinkerDetails.City\">|</span>\n      {{drinkerDetails?.city}} | {{drinkerDetails?.state}} <br> Contact# : {{drinkerDetails?.phone}}\n    </p>\n  </div>\n</div>\n\n<div class=\"container\">\n    <h2 class=\"text-center font-weight-light\">Transactions</h2>\n    <p class=\"text-center\">Top 10 Transaction Details</p>\n    <p-table [value]=\"drinkerTransactions\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>TransID</th>\n          <th>TransDate</th>\n          <th>TransDay</th>\n          <th>TransTime</th>\n          <th>Total</th>\n          <th>BarName</th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-beer>\n        <tr>\n          <td>{{ beer.transID }}</td>\n          <td>{{ beer.transdate }}</td>\n          <td>{{ beer.transday }}</td>\n          <td>{{ beer.transtime }}</td>\n          <td>{{ beer.total | currency }}</td>\n          <td>{{ beer.barname }}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n    <br><br>\n  </div>\n\n<div class=\"container\">\n  <br>\n  <div id=\"drinkergraph\"></div>\n</div>\n\n<div class=\"container\">\n    <h2 class=\"text-center font-weight-light\">{{drinkerName}}'s Spendings</h2>\n    <p class=\"text-center\">List of BarNames and $$ Spent on Each Bar</p>\n    <p-table [value]=\"drinkerSpendings\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Bar Name</th>\n          <th>Total $</th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-spends>\n        <tr>\n          <td>\n            <a routerLink=\"/bars/{{spends.barname}}\">\n                {{spends.barname}}\n            </a>\n          </td>\n          <td>{{ spends.spendings | currency }}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n    <br><br>\n</div>\n\n  "

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.ts ***!
  \**************************************************************/
/*! exports provided: DrinkerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerDetailsComponent", function() { return DrinkerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrinkerDetailsComponent = /** @class */ (function () {
    function DrinkerDetailsComponent(drinkerService, route) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.drinkerName = paramMap.get('drinker');
            _this.drinkerService.getDrinkerDetails(_this.drinkerName).subscribe(function (data) {
                _this.drinkerDetails = data;
            });
            _this.drinkerService.getDrinkerTransaction(_this.drinkerName).subscribe(function (data) {
                _this.drinkerTransactions = data;
            });
            _this.drinkerService.get_beers_order_most(_this.drinkerName).subscribe(function (data) {
                console.log(data);
                var itemname = [];
                var totalqty = [];
                data.forEach(function (drinker) {
                    itemname.push(drinker.itemname);
                    totalqty.push(drinker.totalqty);
                });
                _this.renderCharts(itemname, totalqty);
            });
            _this.drinkerService.get_drinker_spendings(_this.drinkerName).subscribe(function (data) {
                _this.drinkerSpendings = data;
            });
        });
    }
    DrinkerDetailsComponent.prototype.ngOnInit = function () {
    };
    DrinkerDetailsComponent.prototype.renderCharts = function (itemname, totalqty) {
        Highcharts.chart('drinkergraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Beers S/He Orders the Most'
            },
            xAxis: {
                categories: itemname,
                title: {
                    style: {
                        color: 'green',
                        fontSize: '20'
                    },
                    text: 'Beer Names'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    style: {
                        color: 'green',
                        fontSize: '20'
                    },
                    text: 'Total Qty'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                drinker: {
                    datalabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: totalqty
                }]
        });
    };
    DrinkerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-details',
            template: __webpack_require__(/*! ./drinker-details.component.html */ "./src/app/drinker-details/drinker-details.component.html"),
            styles: [__webpack_require__(/*! ./drinker-details.component.css */ "./src/app/drinker-details/drinker-details.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_2__["DrinkersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DrinkerDetailsComponent);
    return DrinkerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/drinkers.service.ts":
/*!*************************************!*\
  !*** ./src/app/drinkers.service.ts ***!
  \*************************************/
/*! exports provided: DrinkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersService", function() { return DrinkersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersService = /** @class */ (function () {
    function DrinkersService(http) {
        this.http = http;
    }
    DrinkersService.prototype.getDrinkers = function () {
        return this.http.get('/api/drinker');
    };
    DrinkersService.prototype.getDrinkerDetails = function (drinker) {
        return this.http.get('/api/drinker/' + drinker);
    };
    DrinkersService.prototype.getDrinkerTransaction = function (drinker) {
        return this.http.get('/api/get_top10_transactions/' + drinker);
    };
    DrinkersService.prototype.get_beers_order_most = function (drinker) {
        return this.http.get('/api/get_beers_order_most/' + drinker);
    };
    DrinkersService.prototype.get_drinker_spendings = function (drinker) {
        return this.http.get('/api/get_drinker_spendings/' + drinker);
    };
    DrinkersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DrinkersService);
    return DrinkersService;
}());



/***/ }),

/***/ "./src/app/drinkers/drinkers.component.css":
/*!*************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXJzL2RyaW5rZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/drinkers/drinkers.component.html":
/*!**************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron jumbotron-fluid\" style=\"background-color: #bad6f3;\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Drinker Page</h1>\n    <p class=\"lead\">Explore Drinker</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Drinker</h2>\n  <p-table [value]=\"drinkers\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Name</th>\n        <th>Driver License</th>\n        <th>Address</th>\n        <th>City</th>\n        <th>State</th>\n        <th>Phone</th>\n        <th>Gender</th>\n        <th>Age</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-drinker>\n      <tr>\n        <td><a routerLink=\"/drinkers/{{ drinker.name }}\">{{ drinker.name }}</a></td>\n        <td>{{ drinker.driverlicense }}</td>\n        <td>{{ drinker.address }}</td>\n        <td>{{ drinker.city }}</td>\n        <td>{{ drinker.state }}</td>\n        <td>{{ drinker.phone }}</td>\n        <td>{{ drinker.gender }}</td>\n        <td>{{ drinker.age }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>\n\n\n<div class=\"container\">\n  <br>\n  <div id=\"bargraph\">\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/drinkers/drinkers.component.ts":
/*!************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.ts ***!
  \************************************************/
/*! exports provided: DrinkersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersComponent", function() { return DrinkersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersComponent = /** @class */ (function () {
    function DrinkersComponent(drinkerService) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.drinkerService.getDrinkers().subscribe(function (data) {
            _this.drinkers = data;
        });
    }
    DrinkersComponent.prototype.ngOnInit = function () {
    };
    DrinkersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinkers',
            template: __webpack_require__(/*! ./drinkers.component.html */ "./src/app/drinkers/drinkers.component.html"),
            styles: [__webpack_require__(/*! ./drinkers.component.css */ "./src/app/drinkers/drinkers.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_1__["DrinkersService"]])
    ], DrinkersComponent);
    return DrinkersComponent;
}());



/***/ }),

/***/ "./src/app/insight/insight.component.css":
/*!***********************************************!*\
  !*** ./src/app/insight/insight.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2lnaHQvaW5zaWdodC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/insight/insight.component.html":
/*!************************************************!*\
  !*** ./src/app/insight/insight.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <div id=\"bargraph\"></div>\n\n  <br>\n  <div id=\"bargraph2\"></div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/insight/insight.component.ts":
/*!**********************************************!*\
  !*** ./src/app/insight/insight.component.ts ***!
  \**********************************************/
/*! exports provided: InsightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightComponent", function() { return InsightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsightComponent = /** @class */ (function () {
    function InsightComponent(barService) {
        var _this = this;
        this.barService = barService;
        this.barService.getFrequentCounts().subscribe(function (data) {
            console.log(data);
            var barname = [];
            var frequentCount = [];
            data.forEach(function (bar) {
                barname.push(bar.barname);
                frequentCount.push(bar.frequentCount);
            });
            _this.renderCharts(barname, frequentCount);
        });
        this.barService.getFrequentCounts().subscribe(function (data) {
            console.log(data);
            var barname = [];
            var frequentCount = [];
            data.forEach(function (bar) {
                barname.push(bar.barname);
                frequentCount.push(bar.frequentCount);
            });
            _this.renderCharts(barname, frequentCount);
        });
    }
    InsightComponent.prototype.ngOnInit = function () {
    };
    InsightComponent.prototype.renderCharts = function (barname, frequentCount) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Frequenting count at bars'
            },
            xAxis: {
                categories: barname,
                title: {
                    text: 'Bar'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of customers'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    datalabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: frequentCount
                }]
        });
    };
    InsightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insight',
            template: __webpack_require__(/*! ./insight.component.html */ "./src/app/insight/insight.component.html"),
            styles: [__webpack_require__(/*! ./insight.component.css */ "./src/app/insight/insight.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], InsightComponent);
    return InsightComponent;
}());



/***/ }),

/***/ "./src/app/manufacturer-details/manufacturer-details.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/manufacturer-details/manufacturer-details.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbnVmYWN0dXJlci1kZXRhaWxzL21hbnVmYWN0dXJlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/manufacturer-details/manufacturer-details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/manufacturer-details/manufacturer-details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{ manfName }}</h1>\n    <p class=\"lead\">Manufacturers Stats</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Number of Beers with QTY Sold</h2>\n  <p-table [value]=\"toptotalsold\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th class=\"text-center\">Beer Name</th>\n        <th class=\"text-center\">Total Qty</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-manf>\n      <tr>\n        <td class=\"text-center\">{{ manf.itemname }}</td>\n        <td class=\"text-center\">{{ manf.totalsold }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">A Region Where Sales Were HIGHEST Last Week</h2>\n  <p-table [value]=\"topregion\">\n    <ng-template pTemplate=\"header\">\n      <tr> \n        <th class=\"text-center\">City</th>\n        <th class=\"text-center\">State</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-manf>\n      <tr>\n        <td class=\"text-center\">{{ manf.city }}</td>\n        <td class=\"text-center\">{{ manf.state }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">A Region Where Their Beers are Liked the Most</h2>\n  <p-table [value]=\"topregiondrinker\">\n    <ng-template pTemplate=\"header\">\n      <tr> \n        <th class=\"text-center\">City</th>\n        <th class=\"text-center\">State</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-manf>\n      <tr>\n        <td class=\"text-center\">{{ manf.city }}</td>\n        <td class=\"text-center\">{{ manf.state }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>"

/***/ }),

/***/ "./src/app/manufacturer-details/manufacturer-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/manufacturer-details/manufacturer-details.component.ts ***!
  \************************************************************************/
/*! exports provided: ManufacturerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerDetailsComponent", function() { return ManufacturerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manufacturers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manufacturers.service */ "./src/app/manufacturers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManufacturerDetailsComponent = /** @class */ (function () {
    function ManufacturerDetailsComponent(manufactureService, route) {
        var _this = this;
        this.manufactureService = manufactureService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.manfName = paramMap.get('manufacturer');
            console.log(_this.manfName);
            _this.manufactureService.get_Top_Regions(_this.manfName).subscribe(function (data) {
                _this.topregion = data;
                console.log(_this.topregion);
            });
            _this.manufactureService.get_drinker_Regions(_this.manfName).subscribe(function (data) {
                _this.topregiondrinker = data;
                console.log(_this.topregiondrinker);
            });
            _this.manufactureService.get_total_sold(_this.manfName).subscribe(function (data) {
                _this.toptotalsold = data;
                console.log(_this.topregiondrinker);
            });
        });
    }
    ManufacturerDetailsComponent.prototype.ngOnInit = function () {
    };
    ManufacturerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manufacturer-details',
            template: __webpack_require__(/*! ./manufacturer-details.component.html */ "./src/app/manufacturer-details/manufacturer-details.component.html"),
            styles: [__webpack_require__(/*! ./manufacturer-details.component.css */ "./src/app/manufacturer-details/manufacturer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_manufacturers_service__WEBPACK_IMPORTED_MODULE_1__["ManufacturersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ManufacturerDetailsComponent);
    return ManufacturerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/manufacturers.service.ts":
/*!******************************************!*\
  !*** ./src/app/manufacturers.service.ts ***!
  \******************************************/
/*! exports provided: ManufacturersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturersService", function() { return ManufacturersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManufacturersService = /** @class */ (function () {
    function ManufacturersService(http) {
        this.http = http;
    }
    ManufacturersService.prototype.get_manufacturers = function () {
        return this.http.get('/api/manufacturers');
    };
    ManufacturersService.prototype.get_Top_Regions = function (manf) {
        return this.http.get("api/get_top_regions/" + manf);
    };
    ManufacturersService.prototype.get_drinker_Regions = function (manf) {
        return this.http.get("api/get_drinker_regions/" + manf);
    };
    ManufacturersService.prototype.get_total_sold = function (manf) {
        return this.http.get("api/get_total_sold/" + manf);
    };
    ManufacturersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ManufacturersService);
    return ManufacturersService;
}());



/***/ }),

/***/ "./src/app/manufacturers/manufacturers.component.css":
/*!***********************************************************!*\
  !*** ./src/app/manufacturers/manufacturers.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbnVmYWN0dXJlcnMvbWFudWZhY3R1cmVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/manufacturers/manufacturers.component.html":
/*!************************************************************!*\
  !*** ./src/app/manufacturers/manufacturers.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\" style=\"background-color: #bad6f3;\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Manufacturers Page</h1>\n    <p class=\"lead\">Explore Beer Manufacturers</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">DETAILS OF BEER MANUFACTURERS IN THE USA</h2>\n  <p-table [value]=\"manf\">\n    <ng-template pTemplate=\"header\">\n      <tr> \n        <th class=\"text-center\">Manufacturer</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-manufacturer>\n      <tr>\n        <td class=\"text-center\"><a routerLink=\"/manufacturers/{{ manufacturer.maker }}\">{{ manufacturer.maker }}</a></td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>"

/***/ }),

/***/ "./src/app/manufacturers/manufacturers.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/manufacturers/manufacturers.component.ts ***!
  \**********************************************************/
/*! exports provided: ManufacturersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturersComponent", function() { return ManufacturersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manufacturers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manufacturers.service */ "./src/app/manufacturers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManufacturersComponent = /** @class */ (function () {
    function ManufacturersComponent(manufacturersService) {
        var _this = this;
        this.manufacturersService = manufacturersService;
        this.manufacturersService.get_manufacturers().subscribe(function (data) {
            _this.manf = data;
        });
    }
    ManufacturersComponent.prototype.ngOnInit = function () {
    };
    ManufacturersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manufacturers',
            template: __webpack_require__(/*! ./manufacturers.component.html */ "./src/app/manufacturers/manufacturers.component.html"),
            styles: [__webpack_require__(/*! ./manufacturers.component.css */ "./src/app/manufacturers/manufacturers.component.css")]
        }),
        __metadata("design:paramtypes", [_manufacturers_service__WEBPACK_IMPORTED_MODULE_1__["ManufacturersService"]])
    ], ManufacturersComponent);
    return ManufacturersComponent;
}());



/***/ }),

/***/ "./src/app/modification-details/modification-details.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modification-details/modification-details.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmaWNhdGlvbi1kZXRhaWxzL21vZGlmaWNhdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modification-details/modification-details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modification-details/modification-details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">{{tableName}} Table</h1>\n      \n      \n    </div>\n  </div>\n\n  <div class=\"container form-group\" >\n    <h2 class=\"text-center font-weight-light\">Modification Page</h2>\n    <form method=\"get\">\n      <p-table [value]=\"column_name\">\n        <ng-template pTemplate=\"header\">\n          <tr>\n            <th>Column Name</th>\n            <th>Value</th>\n          </tr>\n        </ng-template>\n  \n        <ng-template pTemplate=\"body\" let-colname>\n          <tr>\n            <td>{{ colname.column_name }}</td>\n            <td>\n  \n              <div class=\"form-group row\">\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" class=\"form-control\" id=\"inputtext\">\n                </div>\n              </div>\n  \n            </td>\n          </tr>\n        </ng-template>\n      </p-table>\n      <br><br>\n\n      <div class=\"container text-center\">\n          <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Submit</button>\n          <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n              <div class=\"alert alert-success alert-dismissible\">\n                <a  class=\"close\" data-dismiss=\"modal\" aria-label=\"close\">&times;</a>\n                <strong>Success!</strong> Indicates a successful insert into DB!\n              </div>\n            </div>\n          </div>\n      </div>\n\n    </form>\n    <br><br>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/modification-details/modification-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modification-details/modification-details.component.ts ***!
  \************************************************************************/
/*! exports provided: ModificationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationDetailsComponent", function() { return ModificationDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modifications.service */ "./src/app/modifications.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModificationDetailsComponent = /** @class */ (function () {
    function ModificationDetailsComponent(modificationSerice, route) {
        var _this = this;
        this.modificationSerice = modificationSerice;
        this.route = route;
        this.route.paramMap.subscribe(function (paraMap) {
            _this.tableName = paraMap.get('modification');
            _this.modificationSerice.get_column_name(_this.tableName).subscribe(function (data) {
                _this.column_name = data;
                console.log(data);
            });
        });
    }
    ModificationDetailsComponent.prototype.ngOnInit = function () {
    };
    ModificationDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modification-details',
            template: __webpack_require__(/*! ./modification-details.component.html */ "./src/app/modification-details/modification-details.component.html"),
            styles: [__webpack_require__(/*! ./modification-details.component.css */ "./src/app/modification-details/modification-details.component.css")]
        }),
        __metadata("design:paramtypes", [_modifications_service__WEBPACK_IMPORTED_MODULE_1__["ModificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ModificationDetailsComponent);
    return ModificationDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modifications.service.ts":
/*!******************************************!*\
  !*** ./src/app/modifications.service.ts ***!
  \******************************************/
/*! exports provided: ModificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationsService", function() { return ModificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModificationsService = /** @class */ (function () {
    function ModificationsService(http) {
        this.http = http;
    }
    ModificationsService.prototype.get_column_name = function (table_name) {
        return this.http.get('/api/get_column_name/' + table_name);
    };
    ModificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModificationsService);
    return ModificationsService;
}());



/***/ }),

/***/ "./src/app/modifications/modifications.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modifications/modifications.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmaWNhdGlvbnMvbW9kaWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modifications/modifications.component.html":
/*!************************************************************!*\
  !*** ./src/app/modifications/modifications.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\" style=\"background-color: #bad6f3;\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Modifications</h1>\n    <p class=\"lead\">Select tables to modify data.</p>\n  </div>\n</div>\n\n<div class=\"container\">\n\n  <h2 class=\"text-center font-weight-light\">Tables Info (Relational Schema)</h2>\n  <table class=\"table\">\n    <thead class=\"thead-light\">\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Table Name</th>\n        <th scope=\"col\">Schema</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope=\"row\">1</th>\n        <td><a routerLink=\"/modifications/bar\">Bar</a></td>\n        <td>[ BarID, BarName, Address, City, State, Zipcode, MonHours, TueHours, WedHours, ThurHours, FriHours, SatHours, SunHours]</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">2</th>\n        <td><a routerLink=\"/modifications/bartenders\">Bartenders</a></td>\n        <td>[ SSN, Name, Address, City, State, Zipcode, Gender, Phone, Age, Email ]</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">3</th>\n        <td><a routerLink=\"/modifications/drinkers\">Drinkers</a></td>\n        <td>[ Driverlicense, Name, Address, City, State, Zipcode, Phone, Gender, Age ]</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">4</th>\n        <td><a routerLink=\"/modifications/frequents\">Frequents</a></td>\n        <td>[ BarID, Driverlicense, Distance ]</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">5</th>\n        <td><a routerLink=\"/modifications/handles\">Handles</a></td>\n        <td>[ TransID, SSN ]</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">6</th>\n        <td><a routerLink=\"/modifications/likes\">Likes</a></td>\n        <td>[ Driverlicense, ItemName]</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">7</th>\n        <td><a routerLink=\"/modifications/makes\">Makes</a></td>\n        <td>[ TransID, BarID, Driverlicense ]</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">8</th>\n        <td><a routerLink=\"/modifications/menu\">Menu</a></td>\n        <td>[ ItemName, Type, Maker]</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">9</th>\n        <td><a routerLink=\"/modifications/sells\">Sells</a></td>\n        <td>[ BarID, ItemName, Weekdayprice, Weekendprice, Inventory]</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">10</th>\n        <td><a routerLink=\"/modifications/trans\">Trans</a></td>\n        <td>[ TransID, TransDate, TransDay, TransTime, SubTotal, Tax, Tip, Total ]</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">11</th>\n        <td><a routerLink=\"/modifications/transdetails\">TransDetails</a></td>\n        <td>[ TransID, Itemname, Qty ]</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">12</th>\n        <td><a routerLink=\"/modifications/work\">Work</a></td>\n        <td>[ BarID, SSN, City, State, Zipcode, EmployeeID, Mon, Tue, Wed, Thur, Fri, Sat, Sun ]</td>\n      </tr>\n    \n  </tbody>\n</table>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/modifications/modifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modifications/modifications.component.ts ***!
  \**********************************************************/
/*! exports provided: ModificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationsComponent", function() { return ModificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModificationsComponent = /** @class */ (function () {
    function ModificationsComponent() {
    }
    ModificationsComponent.prototype.ngOnInit = function () {
    };
    ModificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modifications',
            template: __webpack_require__(/*! ./modifications.component.html */ "./src/app/modifications/modifications.component.html"),
            styles: [__webpack_require__(/*! ./modifications.component.css */ "./src/app/modifications/modifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModificationsComponent);
    return ModificationsComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\" style=\"background-color: #bad6f3;\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Welcome to Epsilon Inc. -- A Bar, Beer, Drinker Database</h1>\n    <p class=\"lead\">Group #144</p>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dhruvilpatel/Downloads/D/epsilonDB/bar-beer-drinker-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map