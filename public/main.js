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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'app';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var ngx_fullpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-fullpage */ "./node_modules/ngx-fullpage/ngx-fullpage.js");
/* harmony import */ var ngx_fullpage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_fullpage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_keyboards_keyboards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/keyboards/keyboards.component */ "./src/app/components/keyboards/keyboards.component.ts");
/* harmony import */ var _components_monitors_monitors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/monitors/monitors.component */ "./src/app/components/monitors/monitors.component.ts");
/* harmony import */ var _components_ssd_ssd_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ssd/ssd.component */ "./src/app/components/ssd/ssd.component.ts");
/* harmony import */ var _components_etc_etc_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/etc/etc.component */ "./src/app/components/etc/etc.component.ts");
/* harmony import */ var _components_treats_treats_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/treats/treats.component */ "./src/app/components/treats/treats.component.ts");
/* harmony import */ var _components_productpage_productpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/productpage/productpage.component */ "./src/app/components/productpage/productpage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: 'products/keyboards', component: _components_keyboards_keyboards_component__WEBPACK_IMPORTED_MODULE_7__["KeyboardsComponent"] },
    { path: 'products/monitors', component: _components_monitors_monitors_component__WEBPACK_IMPORTED_MODULE_8__["MonitorsComponent"] },
    { path: 'products/ssd', component: _components_ssd_ssd_component__WEBPACK_IMPORTED_MODULE_9__["SsdComponent"] },
    { path: 'products/etc', component: _components_etc_etc_component__WEBPACK_IMPORTED_MODULE_10__["EtcComponent"] },
    { path: 'products/treats', component: _components_treats_treats_component__WEBPACK_IMPORTED_MODULE_11__["TreatsComponent"] },
    { path: 'productpage', component: _components_productpage_productpage_component__WEBPACK_IMPORTED_MODULE_12__["ProductpageComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"],
                _components_keyboards_keyboards_component__WEBPACK_IMPORTED_MODULE_7__["KeyboardsComponent"],
                _components_monitors_monitors_component__WEBPACK_IMPORTED_MODULE_8__["MonitorsComponent"],
                _components_ssd_ssd_component__WEBPACK_IMPORTED_MODULE_9__["SsdComponent"],
                _components_etc_etc_component__WEBPACK_IMPORTED_MODULE_10__["EtcComponent"],
                _components_treats_treats_component__WEBPACK_IMPORTED_MODULE_11__["TreatsComponent"],
                _components_productpage_productpage_component__WEBPACK_IMPORTED_MODULE_12__["ProductpageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_fullpage__WEBPACK_IMPORTED_MODULE_5__["MnFullpageModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/etc/etc.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/etc/etc.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background-color: #fafafa ;\r\n}\r\n.etc{\r\n    background-color: #4532dc!important;\r\n}\r\nnav{\r\n    box-shadow: none!important;\r\n}\r\nnav a{\r\n    font-weight: bold;\r\n    font-family: loveloblack;\r\n    margin-left:20px;  \r\n}\r\n/**** UPPER CONTENT****/\r\n.upper-cont{\r\n    padding-top:10px;\r\n}\r\n.products-item-content{\r\n    position: relative;\r\n}\r\n.recent-price{\r\n    color:#000;\r\n    font-family: loveloblack;\r\n    font-size: 35px;\r\n    margin-bottom: 0!important;\r\n}\r\n.treat-img, .CS-img {\r\n    position: absolute;\r\n    top:25px;\r\n    left: -11px;\r\n}\r\n.total-candies-rec,.num-of-candies{\r\n    font-family: loveloblack;\r\n    font-size:15px;\r\n}\r\n.received-candies{\r\n    margin-top:0!important;\r\n}\r\n.candy-img{\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n.crossed-out-price{\r\n    text-decoration: line-through;\r\n    color: #ca2f2f;\r\n    font-family: loveloblack;\r\n    font-size: 16px;\r\n}\r\n/************************/\r\n/**** MIDDLE CONTENT****/\r\n/************************/\r\n/**** BOTTOM CONTENT ****/\r\n.btn{\r\n    width:100%;\r\n}\r\n.product-brand{\r\n    margin-top:0!important;\r\n    margin-bottom:0!important;\r\n    font-family: loveloblack;\r\n    font-size: 30px;\r\n    line-height: 25px;\r\n}\r\nbutton a{\r\n    color:#fff;\r\n}\r\n.no-pad{\r\n    padding:15px!important;\r\n}\r\n.etc-list ul{\r\n    margin-top: 0!important;\r\n}\r\n.etc-list li{\r\n    display:inline-block;\r\n    font-family: loveloblack;\r\n    padding-right:12px;\r\n    font-size: 13px;\r\n}\r\n/************************/\r\n/******* ON HOVER *******/\r\n.products-item{\r\n    box-shadow: none;\r\n}\r\n.products-item:hover{\r\n    -webkit-animation: boxShadow .5s;\r\n    animation:  boxShadow .51s;\r\n    box-shadow: 0 5px 15px rgba(0,0,0,0.15); \r\n}\r\n.products-item:hover .upper-cont{\r\n    opacity: 1;\r\n    -webkit-animation: fadeIn .5s;\r\n    animation: fadeIn .5s;\r\n}\r\n.products-item:hover .bottom-cont{\r\n    opacity: 1;\r\n    -webkit-animation: fadeIn .5s;\r\n    animation: fadeIn .5s;\r\n}\r\n.upper-cont, .bottom-cont{\r\n    opacity:0;\r\n}\r\n/*ANIMATION KEYFRAMES*/\r\n@-webkit-keyframes fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n@keyframes fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n@-webkit-keyframes boxShadow {    \r\n    0% { box-shadow: none }\r\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\r\n}\r\n@keyframes boxShadow {\r\n    0% { box-shadow: none }\r\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\r\n}\r\n/**************************************/\r\n@font-face {\r\n    font-family: 'Material Icons';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url('https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');\r\n}\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    line-height: 1;\r\n    letter-spacing: normal;\r\n    text-transform: none;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    word-wrap: normal;\r\n    direction: ltr;\r\n    -webkit-font-feature-settings: 'liga';\r\n    -webkit-font-smoothing: antialiased;\r\n} "

/***/ }),

/***/ "./src/app/components/etc/etc.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/etc/etc.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <nav>\n        <div class=\"nav-wrapper etc\">\n            <div class=\"col s6\">\n                <a [routerLink]=\"['/']\" class=\"breadcrumb\">HWS</a>\n                <a href=\"#prods\" class=\"breadcrumb\">products</a>\n                <a href=\"#!\" class=\"breadcrumb\">etc</a>\n            </div>\n            <div class=\"col s6\"></div>\n        </div>\n    </nav>\n</div>\n\n<div class=\"row grey lighten-5\">\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 1200.00  </span>Php 1,000</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 4 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/cryorig-cooler.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">CryOrig </p>\n                            <div class=\"etc-list\">\n                                <ul>\n                                    <li>Cooler</li>\n                                    <li>m9i mini tower</li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/etc/etc.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/etc/etc.component.ts ***!
  \*************************************************/
/*! exports provided: EtcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtcComponent", function() { return EtcComponent; });
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

var EtcComponent = /** @class */ (function () {
    function EtcComponent() {
    }
    EtcComponent.prototype.ngOnInit = function () {
    };
    EtcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-etc',
            template: __webpack_require__(/*! ./etc.component.html */ "./src/app/components/etc/etc.component.html"),
            styles: [__webpack_require__(/*! ./etc.component.css */ "./src/app/components/etc/etc.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EtcComponent);
    return EtcComponent;
}());



/***/ }),

/***/ "./src/app/components/keyboards/keyboards.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/keyboards/keyboards.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background-color: #fafafa ;\r\n}\r\n.keyboards{\r\n    background-color: #94a7f4!important;\r\n}\r\nnav{\r\n    box-shadow: none!important;\r\n}\r\nnav a{\r\n    font-weight: bold;\r\n    font-family: loveloblack;\r\n    margin-left:20px;  \r\n}\r\n/**** UPPER CONTENT****/\r\n.upper-cont{\r\n    padding-top:10px;\r\n}\r\n.products-item-content{\r\n    position: relative;\r\n}\r\n.recent-price{\r\n    color:#000;\r\n    font-family: loveloblack;\r\n    font-size: 35px;\r\n    margin-bottom: 0!important;\r\n}\r\n.treat-img, .CS-img {\r\n    position: absolute;\r\n    top:25px;\r\n    left: -11px;\r\n}\r\n.total-candies-rec,.num-of-candies{\r\n    font-family: loveloblack;\r\n    font-size:15px;\r\n}\r\n.received-candies{\r\n    margin-top:0!important;\r\n}\r\n.candy-img{\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n.crossed-out-price{\r\n    text-decoration: line-through;\r\n    color: #ca2f2f;\r\n    font-family: loveloblack;\r\n    font-size: 16px;\r\n}\r\n/************************/\r\n/**** MIDDLE CONTENT****/\r\n/************************/\r\n/**** BOTTOM CONTENT ****/\r\n.btn{\r\n    width:100%;\r\n}\r\n.product-brand{\r\n    margin-top:0!important;\r\n    margin-bottom:0!important;\r\n    font-family: loveloblack;\r\n    font-size: 30px;\r\n    line-height: 25px;\r\n}\r\nbutton a{\r\n    color:#fff;\r\n}\r\n.no-pad{\r\n    padding:15px!important;\r\n}\r\n.keyboards-list ul{\r\n    margin-top: 0!important;\r\n}\r\n.keyboards-list li{\r\n    display:inline-block;\r\n    font-family: loveloblack;\r\n    padding-right:12px;\r\n    font-size: 13px;\r\n}\r\n/************************/\r\n/******* ON HOVER *******/\r\n.products-item{\r\n    box-shadow: none;\r\n}\r\n.products-item:hover{\r\n    -webkit-animation: boxShadow .5s;\r\n    animation:  boxShadow .51s;\r\n    box-shadow: 0 5px 15px rgba(0,0,0,0.15); \r\n}\r\n.products-item:hover .upper-cont{\r\n    opacity: 1;\r\n    -webkit-animation: fadeIn .5s;\r\n    animation: fadeIn .5s;\r\n}\r\n.products-item:hover .bottom-cont{\r\n    opacity: 1;\r\n    -webkit-animation: fadeIn .5s;\r\n    animation: fadeIn .5s;\r\n}\r\n.upper-cont, .bottom-cont{\r\n    opacity:0;\r\n}\r\n/*ANIMATION KEYFRAMES*/\r\n@-webkit-keyframes fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n@keyframes fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n@-webkit-keyframes boxShadow {    \r\n    0% { box-shadow: none }\r\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\r\n}\r\n@keyframes boxShadow {\r\n    0% { box-shadow: none }\r\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\r\n}\r\n/**************************************/\r\n@font-face {\r\n    font-family: 'Material Icons';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url('https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');\r\n}\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    line-height: 1;\r\n    letter-spacing: normal;\r\n    text-transform: none;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    word-wrap: normal;\r\n    direction: ltr;\r\n    -webkit-font-feature-settings: 'liga';\r\n    -webkit-font-smoothing: antialiased;\r\n}"

/***/ }),

/***/ "./src/app/components/keyboards/keyboards.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/keyboards/keyboards.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <nav>\r\n        <div class=\"nav-wrapper keyboards\">\r\n            <div class=\"col s6\">\r\n                <a [routerLink]=\"['/']\" class=\"breadcrumb\">HWS</a>\r\n                <a href=\"#prods\" class=\"breadcrumb\">products</a>\r\n                <a href=\"#!\" class=\"breadcrumb\">keyboards</a>\r\n            </div>\r\n            <div class=\"col s6\"></div>\r\n        </div>\r\n    </nav>\r\n</div>\r\n\r\n<div class=\"row grey lighten-5\">\r\n    <div class=\"col s6 products\">\r\n        <div id=\"product-1\" class=\"products-item\">\r\n            <div class=\"container center products-item-content\" >\r\n                <div class=\"row no-btm\">\r\n                    <div class=\"treat-img\">\r\n                        <div class=\"left\">\r\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"upper-cont\">\r\n                        <div>\r\n                            <div class=\"right-align\">\r\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 7000.00  </span>Php 5,950</p>\r\n                                <div class=\"valign-wrapper right received-candies\">\r\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 28 </span> </p>\r\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"middle-cont\">\r\n                        <img class=\"responsive-img\" src=\"../assets/img/krbn-steampunk-keyboard.png\" >\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"bottom-cont\">\r\n                        <div class=\"col s9 left-align no-pad\">\r\n                            <p class=\"product-brand\" id=\"product-brand\">KrBN </p>\r\n                            <div class=\"keyboards-list\">\r\n                                <ul>\r\n                                    <li>Keyboard</li>\r\n                                    <li>Oarmy Blue Switch</li>\r\n                                    <li>Steampunk Look</li>\r\n                                    <li>LED Backlit </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col s3 center-align no-pad\">\r\n                            <button class=\"btn waves-effect waves-light\">\r\n                                <a href=\"contact-us-page.html\">Buy Now</a>\r\n                            </button>\r\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/keyboards/keyboards.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/keyboards/keyboards.component.ts ***!
  \*************************************************************/
/*! exports provided: KeyboardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardsComponent", function() { return KeyboardsComponent; });
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

var KeyboardsComponent = /** @class */ (function () {
    function KeyboardsComponent() {
    }
    KeyboardsComponent.prototype.ngOnInit = function () {
    };
    KeyboardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-keyboards',
            template: __webpack_require__(/*! ./keyboards.component.html */ "./src/app/components/keyboards/keyboards.component.html"),
            styles: [__webpack_require__(/*! ./keyboards.component.css */ "./src/app/components/keyboards/keyboards.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KeyboardsComponent);
    return KeyboardsComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/landing/landing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    min-width: 1366px;\r\n    background-color: #fafafa;\r\n    }\r\nnav{\r\n    position: fixed!important;\r\n    z-index:1;\r\n}\r\n.blktext{\r\n    color:#000;\r\n}\r\n.whttext{\r\n    color: #fff;\r\n}\r\n.hide{\r\n    background-color: #1582D0;\r\n}\r\n/******************************************\r\n    HEADER \r\n*******************************************/\r\nnav.index_nav{ \r\n    height: 135px!important;\r\n    padding: 20px 0;\r\n    min-width: 1366px;\r\n    position: fixed;\r\n    z-index:1000;\r\n}\r\n.nav-list a{\r\n    color:#000!important;\r\n    font-family: loveloblack;\r\n}\r\nimg#HWS_logo_candy{\r\n    width: 100px;\r\n}\r\n.line{\r\n    background-color: #000;\r\n    height: 1px;\r\n    margin-top: 30px;\r\n}\r\n#unscrolled-header{\r\n    display: block;\r\n}\r\n#logo{\r\n    margin-left:20px;\r\n}\r\n.vl{\r\n    border-left: 1px solid #DBDBDB;\r\n    height: 50px;\r\n    margin: 0 20px;\r\n}\r\n.social-media img{\r\n    margin: 0 10px;\r\n}\r\n.for-shopping a{\r\n    margin: 0 20px;\r\n}\r\n/******************************************/\r\ndiv.index-cont-one{\r\n}\r\ndiv.index-cont-two{\r\n    background-color:#fff;\r\n}\r\ndiv.index-cont-three{\r\n    background-color:#1582D0;\r\n}\r\ndiv.index-cont-three p{\r\nmargin-top:0!important;\r\n}\r\n.index-right{\r\n    float: right;\r\n    top:50%;\r\n    right: 16px;\r\n}\r\n.index{\r\n    background-color: #ECECEC;  \r\n}\r\n.product{\r\n    background-color: #fff;\r\n}\r\n.link-earn-candy{\r\n    color: #5A99E3;\r\n    font-family: loveloline;\r\n    font-size:45px;\r\n    position: absolute;\r\n    bottom:0;\r\n    left:0;\r\n    right:0;\r\n}\r\n.img-promo{\r\n    position: absolute;\r\n    bottom:0;\r\n    left:0;\r\n    right:0;\r\n}\r\n/******************************************\r\n    PRODUCT PANEL\r\n*******************************************/\r\n.product-icon-hover{\r\n    position: absolute;\r\n    border-style: solid;\r\n    border-width: 5px;\r\n    border-color: red;\r\n    height: 100vh;\r\n    top: 0;    \r\n    left: 0;\r\n    width: 25%;\r\n    z-index: -1;\r\n}\r\n.product-title{\r\n    font-family: loveloblack;\r\n    font-size: 20px;\r\n    color:#737373;\r\n    margin: 20PX 0 10px 0px;\r\n}\r\n.product-list{\r\n    font-family: loveloblack;\r\n    font-size: 15px;\r\n}\r\n.product-list li{\r\n    margin: 5px 0 5px 0px;\r\n    line-height: 30px;\r\n}\r\n.product-list li a{\r\n    color:#737373;\r\n}\r\n/***********************************************************/\r\n/******************************************\r\n    MORE THAN EYE CANDY PANEL\r\n*******************************************/\r\n.candy-sec{\r\n    background-color: #1582D0; \r\n    height: 100vh;\r\n}\r\n.candy-sec ul{\r\n    margin-left: 45px;\r\n}\r\n.candy-sec ul li{\r\n    margin: 10px 0 10px 0;\r\n    font-family: robotomedium;\r\n    font-size: 20px;\r\n    line-height: 30px;\r\n}\r\n.candy-title{\r\n    width: 95%;\r\n    font-size: 85px;\r\n    position: relative;\r\n    font-family: loveloblack;\r\n    line-height: normal;\r\n    margin: 0;\r\n}\r\n.candy-text{\r\n    width: 75%;\r\n    font-family: robotolight;\r\n    line-height: 28px;\r\n    font-size: 20px;\r\n}\r\n.candy-img{\r\n    min-width: 1366px;\r\n}\r\n.btn-flat{\r\n    border-color: #fff;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    color:#fff!important;\r\n    width: 75%;\r\n    border-radius: 25px;\r\n    font-family: loveloblack;\r\n    font-size:20px;\r\n}\r\n/**************************************************************/\r\n/**************************************************************/\r\n#mon-hover, #key-hover, \r\n#graph-card-hover, \r\n#ssd-hover, #mobo-hover,\r\n#mice-hover, #etc-hover,\r\n#psu-hover, #memory-hover,\r\n#cpu-hover, #candy-hover {\r\n    opacity: 0;\r\n}\r\n#mon .mon_color,\r\n#key .key_color,\r\n#psu .psu_color,\r\n#ssd .ssd_color,\r\n#cpu .cpu_color,\r\n#memory .mem_color,\r\n#mobo .mobo_color,\r\n#graph-card .gcard_color,\r\n#etc .etc_color{\r\n    display: none;\r\n    \r\n}\r\n#mon:hover .mon_blk,\r\n#key:hover .key_blk,\r\n#psu:hover .psu_blk,\r\n#ssd:hover .ssd_blk,\r\n#cpu:hover .cpu_blk,\r\n#memory:hover .mem_blk,\r\n#mobo:hover .mobo_blk,\r\n#graph-card:hover .gcard_blk,\r\n#etc:hover .etc_blk,\r\n#candy:hover .candy_blk{\r\n    display: none;\r\n    \r\n}\r\n#mon:hover .mon_color,\r\n#key:hover .key_color,\r\n#psu:hover .psu_color,\r\n#ssd:hover .ssd_color,\r\n#cpu:hover .cpu_color,\r\n#memory:hover .mem_color,\r\n#mobo:hover .mobo_color,\r\n#graph-card:hover .gcard_color,\r\n#etc:hover .etc_color,\r\n#candy:hover .candy_color{\r\n    display: inline;\r\n    opacity: 1;\r\n    -webkit-animation: fadeIn .5s;\r\n    animation: fadeIn .5s;\r\n}\r\n#mon:hover #mon-hover, \r\n#key:hover #key-hover,\r\n#graph-card:hover #graph-card-hover,\r\n#ssd:hover #ssd-hover,\r\n#mobo:hover #mobo-hover,\r\n#mice:hover #mice-hover,\r\n#psu:hover #psu-hover,\r\n#etc:hover #etc-hover,\r\n#memory:hover #memory-hover,\r\n#cpu:hover #cpu-hover,\r\n#candy:hover #candy-hover{\r\n    opacity: 1;\r\n    -webkit-animation: fadeIn .5s;\r\n    animation: fadeIn .5s;\r\n}\r\n#mon:hover,\r\n#key:hover,\r\n#graph-card:hover,\r\n#ssd:hover,\r\n#mice:hover,\r\n#mobo:hover,\r\n#psu:hover,\r\n#etc:hover,\r\n#memory:hover,\r\n#cpu:hover,\r\n#candy:hover{\r\n    box-shadow: 0 5px 15px rgba(0,0,0,0.15);\r\n    -webkit-animation: boxShadow .5s;\r\n    animation:  boxShadow .51s;\r\n}\r\n/*ANIMATION KEYFRAMES*/\r\n@-webkit-keyframes fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n@keyframes fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n@-webkit-keyframes boxShadow {    \r\n    0% { box-shadow: none }\r\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\r\n}\r\n@keyframes boxShadow {\r\n    0% { box-shadow: none }\r\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\r\n}\r\n/******************************************\r\n    WHY SHOP WITH US PANEL\r\n*******************************************/\r\n.why-shop{\r\n    background: #663AF5;\r\n    height: 100vh;\r\n    background:linear-gradient(to right, #fff 0%, #fff 42%, #fff 42%, #663AF5 42%, #663AF5 100%);\r\n}\r\n.BG{\r\n    background-size: cover;\r\n}\r\n.ws-height{\r\n    height: 100vh;\r\n}\r\n.ws-text{\r\n    font-family: loveloline;\r\n    font-size: 10vmin;\r\n    color: #663AF5;\r\n    line-height: normal; \r\n}\r\n.ws-item-text{\r\n    font-family: loveloline;\r\n    font-size: 5vmin;\r\n    color: #663AF5;\r\n    line-height: normal; \r\n}\r\n.ws-title{\r\n    position: relative;\r\n    border-style: solid;\r\n    border-color: transparent;\r\n    border-width: 2px;\r\n    width: 80%;\r\n    margin: 0 20px 0 auto;\r\n}\r\n.ws-container{\r\n    border-style: solid;\r\n    border-color: transparent;\r\n    border-width: 2px;\r\n    width: 80%;\r\n    height:300px;\r\n    margin: 0 35px;\r\n}\r\n.ws-content{\r\n    font-family: Robotoregular;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 2.333vmin;\r\n    color: #FFFFFF;\r\n}\r\n.btn-container{\r\n    margin-top: 50px;\r\n}\r\n.btn-container a{\r\n    margin: 5px 5px;\r\n}\r\n.btn-container p{\r\n    width:90%;\r\n    font-family: loveloblack;\r\n    margin:0 auto;\r\n}\r\n#ws-shop-btn{\r\n    background: #fff;  \r\n}\r\n#ws-shop-btn p{\r\n    color: #663AF5;\r\n}"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mnFullpage [mnFullpageOnLeave]=\"onLeave\" [mnFullpageNavigation]=\"true\" [mnFullpageAnchors]=\"['landing','prods','candies']\">\r\n\r\n    <nav [class.hide]=\"isScrolled\" class=\"nav-center white index_nav\" id=\"unscrolled-header\" >\r\n        <div class=\"row blktext center\" >\r\n            <div class=\"col s1 \">\r\n                <div class=\"col s2 offset-s1\">\r\n                    <a href=\"https://www.facebook.com/hwsugar/\"><img src=\"../assets/img/icon_facebook.png\"></a>\r\n                </div>\r\n                <div class=\"col s4 offset-s1\">                                                     \r\n                    <a href=\"https://www.instagram.com/hardwaresugar/\"><img src=\"../assets/img/icon_instagram.png\"></a>\r\n                </div>\r\n            </div>\r\n            <div class=\"col s4\">\r\n                <div class=\"row blue\" style=\"margin-bottom:0!important;\">\r\n                    <div class=\"line\"></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col s4 nav-list\"><a href=\"#prods\">Products</a></div>\r\n                    <div class=\"col s4 nav-list\"><a href=\"#candies\">Candy</a></div>\r\n                    <div class=\"col s4 nav-list\"><a href=\"#\">HWS Treats</a></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col s2 center\">\r\n                <img id=\"HWS_logo_candy\" class=\"responsive-img\" src=\"../assets/img/HWS_Logo_Monitor_Candy.png\"> \r\n            </div>\r\n            <div class=\"col s3\">\r\n                <div class=\"row\" style=\"margin-bottom:0!important;\">\r\n                    <div class=\"line\"></div>\r\n                </div>                \r\n                <div class=\"row\">\r\n                    <div class=\"col s4 nav-list\"><a href=\"https://docs.google.com/spreadsheets/d/1ewWrIVHcWtQ9PxkM5UHblbWmgT8fn6p7_B-L9hndq7I/edit#gid=0\">All</a></div>\r\n                    <div class=\"col s4 nav-list\"><a href=\"#\">Why Us?</a></div>\r\n                    <div class=\"col s4 nav-list\"><a href=\"#\">Hit us Up</a></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col s2\">\r\n                <div class=\"col s4\">\r\n                    <a href=\"#\"><img src=\"../assets/img/icon_user.png\"></a>\r\n                </div>\r\n                <div class=\"col s4\">\r\n                    <a href=\"#\"><img src=\"../assets/img/icon_question_mark.png\"></a>\r\n                </div>\r\n                <div class=\"col s4\">\r\n                    <a href=\"#\"><img src=\"../assets/img/icon_cart.png\"></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n\r\n    <div class=\"section welcome-section fp-section fp-table index\" data-anchor=\"landing\">\r\n        <div class = \"fp-tableCell\">\r\n            <div class=\"row\">\r\n                <img class=\"responsive-img img-promo\" src=\"../assets/img/img_index_promo.png\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section welcome-section fp-section fp-table product\" data-anchor=\"prods\">\r\n        <div class = \"fp-tableCell\">          \r\n            <div class=\"row center valign-wrapper\" >\r\n                <div class=\"col s1 center-align\"></div>\r\n                <div class=\"col s2 center-align\" id=\"mon\">\r\n                    <a [routerLink]=\"['/products/monitors']\">\r\n                        <img class=\"responsive-img mon_color\"  src=\"../assets/img/icon_monitor.png\">\r\n                        <img class=\"responsive-img mon_blk\" src=\"../assets/img/icon_monitor_blk.png\">\r\n                    </a>\r\n                    <div id=\"mon-hover\">\r\n                        <p class=\"product-title\">Monitors</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s2 center-align\" id=\"key\" >\r\n                    <a  [routerLink]=\"['/products/keyboards']\">\r\n                        <img class=\"responsive-img key_blk\" src=\"../assets/img/icon_keyboard_blk.png\">\r\n                        <img class=\"responsive-img key_color\" src=\"../assets/img/icon_keyboard.png\">\r\n                    </a>\r\n                    <div id =\"key-hover\">\r\n                        <p class=\"product-title\">Keyboards</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s2 center-align\" id=\"candy\">\r\n                    <a [routerLink]=\"['/products/treats']\">\r\n                        <img class=\"responsive-img candy_color\" src=\"../assets/img/icon_logo.png\">\r\n                    </a>\r\n                    <div id =\"candy-hover\">\r\n                        <p class=\"product-title\">Treats</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s2 center-align\" id=\"psu\">\r\n                    <a href=\"#\">\r\n                        <img class=\"responsive-img psu_blk\" src=\"../assets/img/icon_psu_blk.png\">\r\n                        <img class=\"responsive-img psu_color\" src=\"../assets/img/CS_psu.png\">\r\n                    </a>\r\n                    <div id=\"psu-hover\">\r\n                        <p class=\"product-title\">Power Supply Unit</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s2 center-align\" id=\"ssd\">\r\n                    <a [routerLink]=\"['/products/ssd']\">\r\n                        <img class=\"responsive-img ssd_blk\" src=\"../assets/img/icon_ssd_blk.png\">\r\n                        <img class=\"responsive-img ssd_color\" src=\"../assets/img/icon_ssd.png\">\r\n                    </a>\r\n                    <div id =\"ssd-hover\">\r\n                        <p class=\"product-title\"> Solid-State Drives</p>\r\n                    </div>\r\n                    <div class=\"product-icon-hover\"></div>\r\n                </div>\r\n                <div class=\"col s1 center-align\"></div>\r\n            </div>\r\n\r\n            <div class=\"row center valign-wrapper\">\r\n                <div class=\"col s1 center-align\"></div>\r\n                <div class=\"col s2 center-align\" id=\"cpu\">\r\n                    <a href=\"#\">\r\n                        <img class=\"responsive-img cpu_blk\" src=\"../assets/img/icon_cpu_blk.png\">\r\n                        <img class=\"responsive-img cpu_color\" src=\"../assets/img/CS_cpu.png\">\r\n                    </a>\r\n                    <div id=\"cpu-hover\">\r\n                        <p class=\"product-title\">Central Processing Unit</p>\r\n                    </div>\r\n                    <div class=\"product-icon-hover\"></div>\r\n                </div>\r\n                <div class=\"col s2 center-align\" id=\"memory\">\r\n                    <a href=\"#\">\r\n                        <img class=\"responsive-img mem_blk\" src=\"../assets/img/icon_memory_blk.png\">\r\n                        <img class=\"responsive-img mem_color\" src=\"../assets/img/CS_memory.png\">\r\n                    </a>\r\n                    <div id=\"memory-hover\">\r\n                        <p class=\"product-title\">Memory</p>\r\n                    </div>\r\n                    <div class=\"product-icon-hover\"></div>\r\n                </div>\r\n\r\n                <div class=\"col s2 center-align\" id=\"mobo\" >\r\n                    <a href=\"#\">\r\n                        <img class=\"responsive-img mobo_blk\" src=\"../assets/img/icon_motherboard_blk.png\">\r\n                        <img class=\"responsive-img mobo_color\" src=\"../assets/img/CS_motherboard.png\">\r\n                    </a>\r\n                    <div id =\"mobo-hover\">\r\n                        <p class=\"product-title\">Motherboards</p>\r\n                    </div>\r\n                    <div class=\"product-icon-hover\"></div>\r\n                </div>\r\n\r\n                <div class=\"col s2 center-align\" id=\"graph-card\">\r\n                    <a href=\"#\">\r\n                        <img class=\"responsive-img gcard_blk\" src=\"../assets/img/icon_graphic_card_blk.png\">\r\n                        <img class=\"responsive-img gcard_color\" src=\"../assets/img/CS_graphic_card.png\">\r\n                    </a>\r\n                    <div id =\"graph-card-hover\">\r\n                        <p class=\"product-title\">Graphic Cards</p>\r\n                    </div>\r\n                    <div class=\"product-icon-hover\"></div>\r\n                </div>\r\n                <div class=\"col s2 center-align\" id=\"etc\">\r\n                    <a  [routerLink]=\"['/products/etc']\">\r\n                        <img class=\"responsive-img etc_blk\" src=\"../assets/img/icon_etc_blk.png\">\r\n                        <img class=\"responsive-img etc_color\" src=\"../assets/img/icon_etc.png\">\r\n                    </a>\r\n                    <div id=\"etc-hover\">\r\n                        <p class=\"product-title\">ETC</p>\r\n                    </div>\r\n                    <div class=\"product-icon-hover\"></div>\r\n                </div>\r\n                <div class=\"col s1 center-align\"></div>\r\n                <a href=\"#candies\"><p class=\"link-earn-candy\">earn candies when you shop</p></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section welcome-section fp-section fp-table candy-sec\" data-anchor=\"candies\">\r\n        <div class = \"fp-tableCell\">\r\n            <div class=\"row\">\r\n                <div class=\"valign-wrapper\">\r\n                    <div class=\"col s5 right-align\" style=\"padding-right:100px;\">\r\n                        <img class=\"responsive-img\" src=\"../assets/img/HWS_Index_CANDY_Panel.png\">\r\n                    </div>\r\n                    <div class=\"col s7\">\r\n                        <p class=\"candy-title whttext\">More than just <br>eyecandy</p>\r\n                        <p class=\"candy-text whttext\">\r\n                            When you shop here in Hardware Sugar, you get candies! For every 250Php you spend in the shop, you are rewarded with one candy. You can use your candies to:  \r\n                        </p>\r\n                        <ul class=\"whttext\">\r\n                            <li>1. Apply as a discount for your next purchase</li>\r\n                            <li>2. Trade in to buy steam games</li>\r\n                            <li>3. Use as raffle entries to win exciting prizes</li>\r\n                        </ul>\r\n                        <a href=\"#prods\"class=\"waves-effect waves-teal btn-flat center\">shop</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section welcome-section fp-section fp-table why-shop\" data-anchor=\"whyus\">\r\n        <div class=\"fp-tableCell\">\r\n            <div class=\"row ws-one\">\r\n                <div class=\"col s5 ws-height valign-wrapper\">\r\n                    <div class=\"ws-title\">\r\n                        <p class=\"ws-text \">Why <br/> shop <br/>with us</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s7 ws-height valign-wrapper\">\r\n                    <div class=\"ws-container\">\r\n                        <p class=\"ws-content\">\r\n                            Go to any PC store near you, and what do you see? First, the store is guaranteed to be cramped. Stacks of printer boxes in the middle, typical glass displays featuring laptops from 3 years ago and a buch of sealed, untestable other stuff. It's like going through a government office. \r\n                            <br/>NOT. FUN. AT. ALL\r\n                            <br> <br><br>\r\n                            Hardware Sugar was founded by 2 gamers who were tired of the lousy customer service of most local pc shops. Our aim is to make buying hardware FUN.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>     \r\n        </div>\r\n    </div>\r\n    <div class=\"section welcome-section fp-section fp-table why-shop\" data-anchor=\"whyus\">\r\n        <div class = \"fp-tableCell\">\r\n            <div class=\"row ws-two\">\r\n                <div class=\"col s5 ws-height BG valign-wrapper\">\r\n                    <div class=\"ws-title\">\r\n                        <p class=\"ws-item-text\">a modern store in a modern world</p>\r\n                        <img class=\"responsive-img\" src=\"../assets/img/panel1-building.png\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s7 ws-height valign-wrapper\">\r\n                    <div class=\"ws-container\">\r\n                        <p class=\"ws-content\">\r\n                            You demand the latest, cutting-edge tech and Hardware Sugar gets you. We welcome every PC tinkerer out there; if it's high-end or high-performance parts you're looking for, Hardware Sugar has it. \r\n                            <br><br>\r\n                            Casual builders need not worry though! We also have stuff for first-time builders or if you just want a solid, everyday driver.\r\n                                \r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> \r\n    <div class=\"section welcome-section fp-section fp-table why-shop\" data-anchor=\"whyus\">\r\n        <div class = \"fp-tableCell\">\r\n            <div class=\"row ws-three\">\r\n                <div class=\"col s5 ws-height BG valign-wrapper\">\r\n                    <div class=\"ws-title\">\r\n                        <p class=\"ws-item-text\">what you see is what you get</p>\r\n                        <img class=\"responsive-img\" src=\"../assets/img/panel1-building.png\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s7 ws-height valign-wrapper\">\r\n                    <div class=\"ws-container\">\r\n                        <p class=\"ws-content\">\r\n                            Everything we display is in stock. No more waiting and downpaying and following up when the stock will arrive. You want something? Buy it and enjoy it.  We do not believe in making the customer wait.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>    \r\n        </div>\r\n    </div>  \r\n    <div class=\"section welcome-section fp-section fp-table why-shop\" data-anchor=\"whyus\">\r\n        <div class=\"fp-tableCell\">\r\n            <div class=\"row ws-four\">\r\n                <div class=\"col s5 ws-height BG valign-wrapper\">\r\n                    <div class=\"ws-title\">\r\n                        <p class=\"ws-item-text\">get more than what you bargained for</p>\r\n                        <img class=\"responsive-img\" src=\"../assets/img/panel_four_img.png\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s7 ws-height valign-wrapper\">\r\n                    <div class=\"ws-container\">\r\n                        <p class=\"ws-content\">\r\n                            When you shop here in Hardware Sugar, you get WAY more than your money's worth.\r\n                            <br><br>\r\n                            Get 100 pesos if you let us post and tag you on FB and IG with a picture of you with your purchase. Also, you get <span>candies</span>\r\n                            <br><br>\r\n                            And for our fellow gamers out there, every time Valve has a Steam Sale everything in the shop is 10% off.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>           \r\n        </div>\r\n    </div>  \r\n    <div class=\"section welcome-section fp-section fp-table why-shop\" data-anchor=\"whyus\">\r\n        <div class = \"fp-tableCell\">\r\n            <div class=\"row ws-five\">\r\n                <div class=\"col s5 ws-height BG valign-wrapper\">\r\n                    <div class=\"ws-title\">\r\n                        <p class=\"ws-item-text\">better than free delivery</p>\r\n                        <img class=\"responsive-img\" src=\"../assets/img/panel_five_img.png\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s7 ws-height valign-wrapper\">\r\n                    <div class=\"ws-container\">\r\n                        <p class=\"ws-content\">\r\n                            Yes our delivery is free. But if you come into the store to pick up your purchase you get 100 pesos rebate! We’d like a chance to say hello to all of our customers.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>                           \r\n\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-fullpage */ "./node_modules/ngx-fullpage/ngx-fullpage.js");
/* harmony import */ var ngx_fullpage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_fullpage__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent(fp) {
        this.fp = fp;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        this.fp.destroy('all');
    };
    LandingComponent.prototype.onLeave = function (index, nextIndex, direction) {
        this.isScrolled = true;
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/components/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_fullpage__WEBPACK_IMPORTED_MODULE_1__["MnFullpageService"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/monitors/monitors.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/monitors/monitors.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/******** GLOBAL ***********/\r\n\r\nnav{\r\n    box-shadow: none!important;\r\n}\r\n\r\n.monitors{\r\n    background-color: #1582D0!important;\r\n}\r\n\r\nnav a{\r\n    font-weight: bold;\r\n    font-family: loveloblack;\r\n    margin-left:20px;  \r\n}\r\n\r\n.btn{\r\n    width:100%;\r\n}\r\n\r\n.products-item-content{\r\n    position: relative;\r\n}\r\n\r\n.treat-img, .CS-img {\r\n    position: absolute;\r\n    top:25px;\r\n    left: -11px;\r\n}\r\n\r\n.crossed-out-price{\r\n    text-decoration: line-through;\r\n    color: #ca2f2f;\r\n    font-family: loveloblack;\r\n    font-size: 16px;\r\n}\r\n\r\n.recent-price{\r\n    color:#000;\r\n    font-family: loveloblack;\r\n    font-size: 35px;\r\n    margin-bottom: 0!important;\r\n}\r\n\r\n.total-candies-rec,.num-of-candies{\r\n    font-family: loveloblack;\r\n    font-size:15px;\r\n}\r\n\r\n.received-candies{\r\n    margin-top:0!important;\r\n}\r\n\r\n.candy-img{\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.product-brand{\r\n    margin-top:0!important;\r\n    margin-bottom:0!important;\r\n    font-family: loveloblack;\r\n    font-size: 30px;\r\n    line-height: 25px;\r\n}\r\n\r\nbutton a{\r\n    color:#fff;\r\n}\r\n\r\n.no-pad{\r\n    padding:15px!important;\r\n}\r\n\r\n.monitors-list ul{\r\n    margin-top: 0!important;\r\n}\r\n\r\n.monitors-list li{\r\n    display:inline-block;\r\n    font-family: loveloblack;\r\n    padding-right:12px;\r\n    font-size: 13px;\r\n}\r\n\r\n.prod-available{\r\n    font-family: robotomedium;\r\n    font-size: 9.5px;\r\n    margin:0 auto;\r\n    line-height: 20px;\r\n}\r\n\r\n.upper-cont{\r\n    padding-top:10px;\r\n}\r\n\r\n.no-btm{\r\n    margin-bottom:0!important;\r\n}\r\n\r\n.valign-wrapper{\r\n    margin-top: -13px !important;\r\n}\r\n\r\n/******* MONITORS *******/\r\n\r\n/******* ON HOVER *******/\r\n\r\n.products-item{\r\n    box-shadow: none;\r\n}\r\n\r\n.products-item:hover{\r\n    -webkit-animation: boxShadow .5s;\r\n    animation:  boxShadow .51s;\r\n    box-shadow: 0 5px 15px rgba(0,0,0,0.15); \r\n}\r\n\r\n.products-item:hover .upper-cont{\r\n    opacity: 1;\r\n    -webkit-animation: fadeIn .5s;\r\n    animation: fadeIn .5s;\r\n}\r\n\r\n.products-item:hover .bottom-cont{\r\n    opacity: 1;\r\n    -webkit-animation: fadeIn .5s;\r\n    animation: fadeIn .5s;\r\n}\r\n\r\n.upper-cont, .bottom-cont{\r\n    opacity:0;\r\n}\r\n\r\n/*ANIMATION KEYFRAMES*/\r\n\r\n@-webkit-keyframes fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n\r\n@-webkit-keyframes boxShadow {    \r\n    0% { box-shadow: none }\r\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\r\n}\r\n\r\n@keyframes boxShadow {\r\n    0% { box-shadow: none }\r\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Material Icons';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url('https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');\r\n  }\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    line-height: 1;\r\n    letter-spacing: normal;\r\n    text-transform: none;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    word-wrap: normal;\r\n    direction: ltr;\r\n    -webkit-font-feature-settings: 'liga';\r\n    -webkit-font-smoothing: antialiased;\r\n  }"

/***/ }),

/***/ "./src/app/components/monitors/monitors.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/monitors/monitors.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <nav>\r\n        <div class=\"nav-wrapper monitors\">\r\n            <div class=\"col s6\">\r\n                <a [routerLink]=\"['/']\" class=\"breadcrumb\">HWS</a>\r\n                <a href=\"#prods\" class=\"breadcrumb\">products</a>\r\n                <a href=\"#!\" class=\"breadcrumb\">monitors</a>\r\n            </div>\r\n            <div class=\"col s6\"></div>\r\n            \r\n        </div>\r\n    </nav>\r\n</div>\r\n\r\n<div class=\"row grey lighten-5\">\r\n    <div class=\"col s6 products\">\r\n        <div id=\"product-1\" class=\"products-item\">\r\n            <div class=\"container center products-item-content\" >\r\n                <div class=\"row no-btm\">\r\n                    <div class=\"treat-img\">\r\n                        <div class=\"left\">\r\n                            <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"upper-cont\">\r\n                        <div>\r\n                            <div class=\"right-align\">\r\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\">Php 15,160.00 </span>Php 12,800.00</p>\r\n                                <div class=\"valign-wrapper right received-candies\">\r\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 60 </span> </p>\r\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"middle-cont\">\r\n                        <img class=\"responsive-img\" src=\"../assets/img/LG-32MP58HQ-P-1.png\" >\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"bottom-cont\">\r\n                        <div class=\"col s9 left-align no-pad\">\r\n                            <p class=\"product-brand\" id=\"product-brand\">LG</p>\r\n                            <div class=\"monitors-list\">\r\n                                <ul>\r\n                                    <li>32MP58HQ-P </li>\r\n                                    <li>1080P</li>\r\n                                    <li>32''</li>\r\n                                    <li>Full HD IPS w/ split screen</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col s3 center-align no-pad\">\r\n                            <button class=\"btn waves-effect waves-light\">\r\n                                <a href=\"contact-us-page.html\">Buy Now</a>\r\n                            </button>\r\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col s6 products\">\r\n        <div id=\"product-1\" class=\"products-item\">\r\n            <div class=\"container center products-item-content\" >\r\n                <div class=\"row no-btm\">\r\n                    <div class=\"treat-img\">\r\n                        <div class=\"left\">\r\n                            <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"upper-cont\">\r\n                        <div>\r\n                            <div class=\"right-align\">\r\n                                    <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\">Php 15,160.00 </span>Php 12,800.00</p>\r\n                                <div class=\"valign-wrapper right received-candies\">\r\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 60 </span> </p>\r\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"middle-cont\">\r\n                        <img class=\"responsive-img\" src=\"../assets/img/LG-32MA70HY-P-1.png\" >\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"bottom-cont\">\r\n                        <div class=\"col s9 left-align no-pad\">\r\n                            <p class=\"product-brand\" id=\"product-brand\">LG</p>\r\n                            <div class=\"monitors-list\">\r\n                                <ul>\r\n                                    <li>32MA70HY-P </li>\r\n                                    <li>1080P</li>\r\n                                    <li>32''</li>\r\n                                    <li>Full HD IPS</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col s3 center-align no-pad\">\r\n                            <button class=\"btn waves-effect waves-light\">\r\n                                <a href=\"contact-us-page.html\">Buy Now</a>\r\n                            </button>\r\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row grey lighten-5\">\r\n  <div class=\"col s6 products\">\r\n      <div id=\"product-1\" class=\"products-item\">\r\n          <div class=\"container center products-item-content\" >\r\n              <div class=\"row no-btm\">\r\n                  <div class=\"CS-img\">\r\n                      <div class=\"left\">\r\n                          <img src=\"../assets/img/coming-soon.png\" class=\"responsive-img\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"upper-cont\">\r\n                      <div>\r\n                          <div class=\"right-align\">\r\n                              <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> </span>P29,100</p>\r\n                              <div class=\"valign-wrapper right received-candies\">\r\n                                  <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 116 </span> </p>\r\n                                  <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"middle-cont\">\r\n                      <img class=\"responsive-img\" src=\"../assets/img/XB271HK-bmiprz-1.png\" >\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"bottom-cont\">\r\n                      <div class=\"col s9 left-align no-pad\">\r\n                          <p class=\"product-brand\" id=\"product-brand\">ACER</p>\r\n                          <div class=\"monitors-list\">\r\n                              <ul>\r\n                                  <li>XB271HK bmiprz </li>\r\n                                  <li>3480x2160</li>\r\n                                  <li>27''</li>\r\n                                  <li> 4K UHD IPS </li>\r\n                              </ul>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col s3 center-align no-pad\">\r\n                          <button class=\"btn waves-effect waves-light disabled\">\r\n                              <a href=\"contact-us-page.html\">Buy Now</a>\r\n                          </button>\r\n                          <p class=\"prod-available\">Available: <span>No</span></p>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"col s6 products\">\r\n      <div id=\"product-1\" class=\"products-item\">\r\n          <div class=\"container center products-item-content\" >\r\n              <div class=\"row no-btm\">\r\n                  <div class=\"CS-img\">\r\n                      <div class=\"left\">\r\n                          <img src=\"../assets/img/coming-soon.png\" class=\"responsive-img\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"upper-cont\">\r\n                      <div>\r\n                          <div class=\"right-align\">\r\n                              <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> </span>P64,600</p>\r\n                              <div class=\"valign-wrapper right received-candies\">\r\n                                  <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 258 </span> </p>\r\n                                  <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"middle-cont\">\r\n                      <img class=\"responsive-img\" src=\"../assets/img/ASUS-PA329Q-1.png\" >\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"bottom-cont\">\r\n                      <div class=\"col s9 left-align no-pad\">\r\n                          <p class=\"product-brand\" id=\"product-brand\">ASUS</p>\r\n                          <div class=\"monitors-list\">\r\n                              <ul>\r\n                                  <li>PA329Q</li>\r\n                                  <li>3840x2160</li>\r\n                                  <li>32''</li>\r\n                                  <li>4K/UHD IPS</li>\r\n                              </ul>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col s3 center-align no-pad\">\r\n                          <button class=\"btn waves-effect waves-light disabled\">\r\n                              <a href=\"contact-us-page.html\">Buy Now</a>\r\n                          </button>\r\n                          <p class=\"prod-available\">Available: <span>SOON</span></p>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col s6\">\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/monitors/monitors.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/monitors/monitors.component.ts ***!
  \***********************************************************/
/*! exports provided: MonitorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorsComponent", function() { return MonitorsComponent; });
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

var MonitorsComponent = /** @class */ (function () {
    function MonitorsComponent() {
    }
    MonitorsComponent.prototype.ngOnInit = function () {
    };
    MonitorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monitors',
            template: __webpack_require__(/*! ./monitors.component.html */ "./src/app/components/monitors/monitors.component.html"),
            styles: [__webpack_require__(/*! ./monitors.component.css */ "./src/app/components/monitors/monitors.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MonitorsComponent);
    return MonitorsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    min-width: 1366px;\r\n    }\r\nbody>nav{\r\n    position: fixed;\r\n    z-index:1;\r\n}\r\n.blktext{\r\n    color:#000;\r\n}\r\n.whttext{\r\n    color: #fff;\r\n}\r\n/******************************************\r\n    HEADER \r\n*******************************************/\r\nnav.index_nav{ \r\n    height: 135px!important;\r\n    padding: 20px 0;\r\n    min-width: 1366px;\r\n    position: fixed;\r\n    z-index:1000;\r\n}\r\n.nav-list a{\r\n    color:#000!important;\r\n    font-family: loveloblack;\r\n}\r\nimg#HWS_logo_candy{\r\n    width: 100px;\r\n}\r\n.line{\r\n    background-color: #000;\r\n    height: 1px;\r\n    margin-top: 30px;\r\n}\r\n#unscrolled-header{\r\n    display: block;\r\n}\r\n#logo{\r\n    margin-left:20px;\r\n}\r\n.vl{\r\n    border-left: 1px solid #DBDBDB;\r\n    height: 50px;\r\n    margin: 0 20px;\r\n}\r\n.social-media img{\r\n    margin: 0 10px;\r\n}\r\n.for-shopping a{\r\n    margin: 0 20px;\r\n}\r\n/******************************************/"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav-center white index_nav\" id=\"unscrolled-header\" >\r\n        <div class=\"row blktext center\" >\r\n            <div class=\"col s1 \">\r\n                    <div class=\"col s2 offset-s1\">\r\n                        <a href=\"#\"><img src=\"../assets/img/icon_facebook.png\"></a>\r\n                    </div>\r\n                    <div class=\"col s4 offset-s1\">                                                     \r\n                        <a href=\"#\"><img src=\"../assets/img/icon_instagram.png\"></a>\r\n                    </div>\r\n            </div>\r\n            <div class=\"col s4\">\r\n                <div class=\"row blue\" style=\"margin-bottom:0!important;\">\r\n                    <div class=\"line\"></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col s4 nav-list\"><a href=\"#prods\">Products</a></div>\r\n                    <div class=\"col s4 nav-list\"><a href=\"#candies\">Candy</a></div>\r\n                    <div class=\"col s4 nav-list\"><a href=\"#\">HWS Treats</a></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col s2 center\">\r\n                <img id=\"HWS_logo_candy\" class=\"responsive-img\" src=\"../assets/img/HWS_Logo_Monitor_Candy.png\"> \r\n            </div>\r\n            <div class=\"col s3\">\r\n                <div class=\"row\" style=\"margin-bottom:0!important;\">\r\n                    <div class=\"line\"></div>\r\n                </div>                \r\n                <div class=\"row\">\r\n                    <div class=\"col s4 nav-list\"><a href=\"#\">All</a></div>\r\n                    <div class=\"col s4 nav-list\"><a href=\"#\">Why Us?</a></div>\r\n                    <div class=\"col s4 nav-list\"><a href=\"#\">Hit us Up</a></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col s2\">\r\n                    <div class=\"col s4\">\r\n                        <a href=\"#\"><img src=\"../assets/img/icon_user.png\"></a>\r\n                    </div>\r\n                    <div class=\"col s4\">\r\n                        <a href=\"#\"><img src=\"../assets/img/icon_question_mark.png\"></a>\r\n                    </div>\r\n                    <div class=\"col s4\">\r\n                        <a href=\"#\"><img src=\"../assets/img/icon_cart.png\"></a>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n      </nav>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <nav class=\"nav-center white index_nav\" id=\"unscrolled-header\">\r\n    <div class=\"row blktext center\">\r\n        <div class=\"col s1 \">\r\n            <div class=\"col s2 offset-s1\">\r\n                <a href=\"#\">\r\n                    <img src=\"../assets/img/icon_facebook.png\">\r\n                </a>\r\n            </div>\r\n            <div class=\"col s4 offset-s1\">\r\n                <a href=\"#\">\r\n                    <img src=\"../assets/img/icon_instagram.png\">\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col s4\">\r\n            <div class=\"row blue\" style=\"margin-bottom:0!important;\">\r\n                <div class=\"line\"></div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col s4 nav-list\">\r\n                    <a href=\"#\">Products</a>\r\n                </div>\r\n                <div class=\"col s4 nav-list\">\r\n                    <a href=\"#\">Candy</a>\r\n                </div>\r\n                <div class=\"col s4 nav-list\">\r\n                    <a href=\"#\">HWS Treats</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col s2 center\">\r\n            <img id=\"HWS_logo_candy\" class=\"responsive-img\" src=\"../assets/img/HWS_Logo_Monitor_Candy.png\">\r\n        </div>\r\n        <div class=\"col s3\">\r\n            <div class=\"row\" style=\"margin-bottom:0!important;\">\r\n                <div class=\"line\"></div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col s4 nav-list\">\r\n                    <a href=\"#\">All</a>\r\n                </div>\r\n                <div class=\"col s4 nav-list\">\r\n                    <a href=\"#\">Why Us?</a>\r\n                </div>\r\n                <div class=\"col s4 nav-list\">\r\n                    <a href=\"#\">Hit us Up</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col s2\">\r\n            <div class=\"col s4\">\r\n                <a href=\"#\">\r\n                    <img src=\"../assets/img/icon_user.png\">\r\n                </a>\r\n            </div>\r\n            <div class=\"col s4\">\r\n                <a href=\"#\">\r\n                    <img src=\"../assets/img/icon_question_mark.png\">\r\n                </a>\r\n            </div>\r\n            <div class=\"col s4\">\r\n                <a href=\"#\">\r\n                    <img src=\"../assets/img/icon_cart.png\">\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav> -->"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/productpage/productpage.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/productpage/productpage.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    box-shadow: none!important;\r\n}\r\n.product-item{\r\n    background-color: #2bbbad!important;\r\n}\r\nnav a{\r\n    font-weight: bold;\r\n    font-family: loveloblack;\r\n    margin-left:20px;  \r\n    color:rgb(255, 255, 255);\r\n}\r\n.container{\r\n    margin: 90px auto!important;\r\n    width: 80%!important;\r\n}\r\n.product-brand{\r\n    margin-top:0!important;\r\n    margin-bottom:0!important;\r\n    font-family: loveloblack;\r\n    font-size: 55px;\r\n    line-height: 30px;\r\n}\r\nspan.product-brand-code{\r\n    margin-top:0!important;\r\n    margin-bottom:0!important;\r\n    font-family: loveloblack;\r\n    font-size: 35px;\r\n    line-height: 25px;\r\n}\r\n.pp-price{\r\n    line-height:normal;\r\n}\r\n.recent-price{\r\n    color:#000;\r\n    font-family: loveloblack;\r\n    font-size: 39.55px;\r\n}\r\n.crossed-out-price{\r\n    text-decoration: line-through;\r\n    color: #ca2f2f;\r\n    font-family: loveloblack;\r\n    font-size: 16px;\r\n    margin:0;\r\n}\r\nul{\r\n    margin-top:0;\r\n}\r\nul li{\r\n    font-family: loveloblack;\r\n    font-size: 18px;\r\n    margin-right: 15px;\r\n    display: inline;\r\n}\r\n.received-candies{\r\n    margin-top:0!important;\r\n    line-height: 10px;\r\n}\r\n.total-candies-rec,.num-of-candies{\r\n    font-family: loveloblack;\r\n    font-size:15px;\r\n}\r\n.candy-img{\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n.btn{\r\n    width:100%;\r\n}\r\nbutton a{\r\n    color:#fff;\r\n    font-family: loveloblack;\r\n    font-size: 17px;\r\n}\r\n.no-pad{\r\n    padding:15px!important;\r\n}\r\n.item-desc{\r\n    font-family: robotoregular;\r\n    font-size: 17px;\r\n    padding-top: 25px;\r\n}\r\n@font-face {\r\n    font-family: 'Material Icons';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url('https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');\r\n}\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    line-height: 1;\r\n    letter-spacing: normal;\r\n    text-transform: none;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    word-wrap: normal;\r\n    direction: ltr;\r\n    -webkit-font-feature-settings: 'liga';\r\n    -webkit-font-smoothing: antialiased;\r\n}"

/***/ }),

/***/ "./src/app/components/productpage/productpage.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/productpage/productpage.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <nav>\n        <div class=\"nav-wrapper product-item\">\n            <div class=\"col s6\">\n                <a [routerLink]=\"['/']\" class=\"breadcrumb\">HWS</a>\n                <a href=\"#prods\" class=\"breadcrumb\">products</a>\n                <a href=\"#!\" class=\"breadcrumb\">monitors</a>\n                <a href=\"#!\" class=\"breadcrumb\">item</a>\n            </div>\n            <div class=\"col s6\"></div>\n        </div>\n    </nav>\n</div>\n\n<div class=\"row\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s7\">\n        <img class=\"responsive-img\" src=\"../assets/img/LG-32MA70HY-P.png\">\n      </div>\n      <div class=\"col s5\">\n        <div>\n          <p class=\"product-brand\">LG <span class=\"product-brand-code\">32MA70HY</span></p>\n        </div>\n        <div>\n          <ul>\n            <li>1080p</li>\n            <li>32\"</li>\n            <li>Full HD IPS</li>\n          </ul>\n        </div>\n        <div class=\"pp-price\">\n          <p class=\"crossed-out-price\">Php 15,160.00</p>\n          <span class=\"recent-price\">Php 12,800.00</span>\n        </div>\n        <div>\n          <div class=\"valign-wrapper received-candies\">\n            <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 51 </span> </p>\n            <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n          </div>\n          <div class=\"center-align\">\n            <button class=\"btn waves-effect waves-light\">\n              <a>Buy Now</a>\n            </button>\n            \n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col s7\">\n        <p class=\"item-desc\">A 32-inch class (31.5\" measured diagonally) 16:9 monitor offers more than a 70% larger \n          screen area vs. a 24-inch class monitor*. That's plenty of room for work on spreadsheets, \n          editing documents, watching videos, viewing photos and more.</p>\n      </div>\n      <div class=\"col s5\">\n        \n      </div>\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/productpage/productpage.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/productpage/productpage.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductpageComponent", function() { return ProductpageComponent; });
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

var ProductpageComponent = /** @class */ (function () {
    function ProductpageComponent() {
    }
    ProductpageComponent.prototype.ngOnInit = function () {
    };
    ProductpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productpage',
            template: __webpack_require__(/*! ./productpage.component.html */ "./src/app/components/productpage/productpage.component.html"),
            styles: [__webpack_require__(/*! ./productpage.component.css */ "./src/app/components/productpage/productpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductpageComponent);
    return ProductpageComponent;
}());



/***/ }),

/***/ "./src/app/components/ssd/ssd.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/ssd/ssd.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background-color: #fafafa ;\r\n}\r\n.ssd{\r\n    background-color: #19cc74!important;\r\n}\r\nnav{\r\n    box-shadow: none!important;\r\n}\r\nnav a{\r\n    font-weight: bold;\r\n    font-family: loveloblack;\r\n    margin-left:20px;  \r\n}\r\n/**** UPPER CONTENT****/\r\n.upper-cont{\r\n    padding-top:10px;\r\n}\r\n.products-item-content{\r\n    position: relative;\r\n}\r\n.recent-price{\r\n    color:#000;\r\n    font-family: loveloblack;\r\n    font-size: 35px;\r\n    margin-bottom: 0!important;\r\n}\r\n.treat-img, .CS-img {\r\n    position: absolute;\r\n    top:25px;\r\n    left: -11px;\r\n}\r\n.total-candies-rec,.num-of-candies{\r\n    font-family: loveloblack;\r\n    font-size:15px;\r\n}\r\n.received-candies{\r\n    margin-top:0!important;\r\n}\r\n.candy-img{\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n.crossed-out-price{\r\n    text-decoration: line-through;\r\n    color: #ca2f2f;\r\n    font-family: loveloblack;\r\n    font-size: 16px;\r\n}\r\n/************************/\r\n/**** MIDDLE CONTENT****/\r\n/************************/\r\n/**** BOTTOM CONTENT ****/\r\n.btn{\r\n    width:100%;\r\n}\r\n.product-brand{\r\n    margin-top:0!important;\r\n    margin-bottom:0!important;\r\n    font-family: loveloblack;\r\n    font-size: 30px;\r\n    line-height: 25px;\r\n}\r\nbutton a{\r\n    color:#fff;\r\n}\r\n.no-pad{\r\n    padding:15px!important;\r\n}\r\n.ssd-list ul{\r\n    margin-top: 0!important;\r\n}\r\n.ssd-list li{\r\n    display:inline-block;\r\n    font-family: loveloblack;\r\n    padding-right:12px;\r\n    font-size: 13px;\r\n}\r\n/************************/\r\n/******* ON HOVER *******/\r\n.products-item{\r\n    box-shadow: none;\r\n}\r\n.products-item:hover{\r\n    -webkit-animation: boxShadow .5s;\r\n    animation:  boxShadow .51s;\r\n    box-shadow: 0 5px 15px rgba(0,0,0,0.15); \r\n}\r\n.products-item:hover .upper-cont{\r\n    opacity: 1;\r\n    -webkit-animation: fadeIn .5s;\r\n    animation: fadeIn .5s;\r\n}\r\n.products-item:hover .bottom-cont{\r\n    opacity: 1;\r\n    -webkit-animation: fadeIn .5s;\r\n    animation: fadeIn .5s;\r\n}\r\n.upper-cont, .bottom-cont{\r\n    opacity:0;\r\n}\r\n/*ANIMATION KEYFRAMES*/\r\n@-webkit-keyframes fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n@keyframes fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n@-webkit-keyframes boxShadow {    \r\n    0% { box-shadow: none }\r\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\r\n}\r\n@keyframes boxShadow {\r\n    0% { box-shadow: none }\r\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\r\n}\r\n/******************************************/\r\n@font-face {\r\n    font-family: 'Material Icons';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url('https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');\r\n}\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    line-height: 1;\r\n    letter-spacing: normal;\r\n    text-transform: none;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    word-wrap: normal;\r\n    direction: ltr;\r\n    -webkit-font-feature-settings: 'liga';\r\n    -webkit-font-smoothing: antialiased;\r\n}"

/***/ }),

/***/ "./src/app/components/ssd/ssd.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/ssd/ssd.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <nav>\n        <div class=\"nav-wrapper ssd\">\n            <div class=\"col s6\">\n                <a [routerLink]=\"['/']\" class=\"breadcrumb\">HWS</a>\n                <a href=\"#prods\" class=\"breadcrumb\">products</a>\n                <a href=\"#!\" class=\"breadcrumb\">SSD</a>\n            </div>\n            <div class=\"col s6\"></div>\n        </div>\n    </nav>\n</div>\n\n<div class=\"row grey lighten-5\">\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 16,150.00 </span>Php 13,700</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 54 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/crucial-mx500.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Crucial mx500</p>\n                            <div class=\"ssd-list\">\n                                <ul>\n                                    <li>1TB</li>\n                                    <li>3D NAND SATA</li>\n                                    <li>2.5-inch internal SSD</li>\n                                    <li></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 8,400.00 </span>Php 7,100</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 28 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/crucial-mx500.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Crucial mx500</p>\n                            <div class=\"ssd-list\">\n                                <ul>\n                                    <li>500GB</li>\n                                    <li>3D NAND Sata</li>\n                                    <li>2.5-inch internal SSD</li>\n                                    <li></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row grey lighten-5\">\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 18,800.00 </span>Php 15,900</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 63 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/samsung-860-evo.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Samsung 860 evo</p>\n                            <div class=\"ssd-list\">\n                                <ul>\n                                    <li>1tb</li>\n                                    <li>2.5 inch sata ssd</li>\n                                    <li></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 9,100.00 </span>Php 7,700</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 30 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/samsung-860-evo.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Samsung 860 evo</p>\n                            <div class=\"ssd-list\">\n                                <ul>\n                                    <li>500gb</li>\n                                    <li>2.5 inch sata ssd</li>\n                                    <li></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row grey lighten-5\">\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\">\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 7,800.00 </span>Php 6,600</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 26 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/samsung-860-evo.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Samsung 860 evo</p>\n                            <div class=\"ssd-list\">\n                                <ul>\n                                    <li>500gb</li>\n                                    <li>2.5 inch sata ssd</li>\n                                    <li></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 16,150.00 </span>Php 13,700</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 54 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/sandisk-ultra.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Sandisk Ultra</p>\n                            <div class=\"ssd-list\">\n                                <ul>\n                                    <li>1tb</li>\n                                    <li>2.5 inch</li>\n                                    <li>3d nand sata iii ssd</li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/ssd/ssd.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/ssd/ssd.component.ts ***!
  \*************************************************/
/*! exports provided: SsdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsdComponent", function() { return SsdComponent; });
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

var SsdComponent = /** @class */ (function () {
    function SsdComponent() {
    }
    SsdComponent.prototype.ngOnInit = function () {
    };
    SsdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ssd',
            template: __webpack_require__(/*! ./ssd.component.html */ "./src/app/components/ssd/ssd.component.html"),
            styles: [__webpack_require__(/*! ./ssd.component.css */ "./src/app/components/ssd/ssd.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SsdComponent);
    return SsdComponent;
}());



/***/ }),

/***/ "./src/app/components/treats/treats.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/treats/treats.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".treats{\r\n    background-color: #fafafa;\r\n}\r\n\r\n.treats-item-title{\r\n    font-family: loveloblack;\r\n    color:rgb(0, 0, 0);\r\n    font-size:30px;\r\n    margin: 10px auto!important;\r\n}\r\n\r\n.monitors{\r\n    background-color: #1582D0!important;\r\n}\r\n\r\n.keyboards{\r\n    background-color: #94a7f4!important;\r\n}\r\n\r\n.ssd{\r\n    background-color: #19cc74!important;\r\n}\r\n\r\n.etc{\r\n    background-color: #4532dc!important;\r\n}\r\n\r\nnav{\r\n    box-shadow: none!important;\r\n}\r\n\r\nnav a{\r\n    font-weight: bold;\r\n    font-family: loveloblack;\r\n    margin-left:20px;  \r\n    color: #000;\r\n}\r\n\r\n/**** UPPER CONTENT****/\r\n\r\n.upper-cont{\r\n    padding-top:10px;\r\n}\r\n\r\n.products-item-content{\r\n    position: relative;\r\n}\r\n\r\n.recent-price{\r\n    color:#000;\r\n    font-family: loveloblack;\r\n    font-size: 35px;\r\n    margin-bottom: 0!important;\r\n}\r\n\r\n.treat-img, .CS-img {\r\n    position: absolute;\r\n    top:25px;\r\n    left: -11px;\r\n}\r\n\r\n.total-candies-rec,.num-of-candies{\r\n    font-family: loveloblack;\r\n    font-size:15px;\r\n}\r\n\r\n.received-candies{\r\n    margin-top:0!important;\r\n}\r\n\r\n.candy-img{\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.crossed-out-price{\r\n    text-decoration: line-through;\r\n    color: #ca2f2f;\r\n    font-family: loveloblack;\r\n    font-size: 16px;\r\n}\r\n\r\n/************************************/\r\n\r\n/**** BOTTOM CONTENT ****/\r\n\r\n.btn{\r\n    width:100%;\r\n}\r\n\r\n.product-brand{\r\n    margin-top:0!important;\r\n    margin-bottom:0!important;\r\n    font-family: loveloblack;\r\n    font-size: 30px;\r\n    line-height: 25px;\r\n}\r\n\r\nbutton a{\r\n    color:#fff;\r\n}\r\n\r\n.no-pad{\r\n    padding:15px!important;\r\n}\r\n\r\n.treats-list ul{\r\n    margin-top: 0!important;\r\n}\r\n\r\n.treats-list li{\r\n    display:inline-block;\r\n    font-family: loveloblack;\r\n    padding-right:12px;\r\n    font-size: 13px;\r\n}\r\n\r\n/************************/\r\n\r\n@font-face {\r\n    font-family: 'Material Icons';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url('https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');\r\n}\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    line-height: 1;\r\n    letter-spacing: normal;\r\n    text-transform: none;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    word-wrap: normal;\r\n    direction: ltr;\r\n    -webkit-font-feature-settings: 'liga';\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n/*****On Hover*******/\r\n\r\n.received-candies, ul, .prod-available{\r\n    opacity:0;\r\n}\r\n\r\n.received-candies:hover, \r\nul:hover, \r\n.prod-available:hover{\r\n    opacity:1;\r\n}"

/***/ }),

/***/ "./src/app/components/treats/treats.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/treats/treats.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <nav>\n        <div class=\"nav-wrapper treats\">\n            <div class=\"col s6\">\n                <a [routerLink]=\"['/']\" class=\"breadcrumb\">HWS</a>\n                <a href=\"#prods\" class=\"breadcrumb\">products</a>\n                <a href=\"#prods\" class=\"breadcrumb\">treats</a>\n            </div>\n            <div class=\"col s6\"></div>\n        </div>\n    </nav>\n</div>\n<!-- Monitors -->\n<div class=\"row monitors\">\n  <div class=\"col s12\">\n    <p class=\"treats-item-title center\">Monitors</p>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col s6 products\">\n      <div id=\"product-1\" class=\"products-item\">\n        <div class=\"container center products-item-content\" >\n          <div class=\"row no-btm\">\n              <div class=\"treat-img\">\n                  <div class=\"left\">\n                      <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\">\n                  </div>\n              </div>\n              <div class=\"upper-cont\">\n                  <div>\n                      <div class=\"right-align\">\n                          <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> </span>P15,200</p>\n                          <div class=\"valign-wrapper right received-candies\">\n                              <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 60 </span> </p>\n                              <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"middle-cont\">\n                  <img class=\"responsive-img\" src=\"../assets/img/LG-32MP58HQ-P-1.png\" >\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"bottom-cont\">\n                  <div class=\"col s9 left-align no-pad\">\n                      <p class=\"product-brand\" id=\"product-brand\">LG</p>\n                      <div class=\"treats-list\">\n                          <ul>\n                              <li>32MP58HQ-P </li>\n                              <li>1080P</li>\n                              <li>32''</li>\n                              <li>Full HD IPS</li>\n                          </ul>\n                      </div>\n                  </div>\n                  <div class=\"col s3 center-align no-pad\">\n                      <button class=\"btn waves-effect waves-light\">\n                          <a href=\"contact-us-page.html\">Buy Now</a>\n                      </button>\n                      <p class=\"prod-available\">Available: <span>YES</span></p>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"col s6 products\">\n      <div id=\"product-1\" class=\"products-item\">\n          <div class=\"container center products-item-content\" >\n              <div class=\"row no-btm\">\n                  <div class=\"treat-img\">\n                      <div class=\"left\">\n                          <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\">\n                      </div>\n                  </div>\n                  <div class=\"upper-cont\">\n                      <div>\n                          <div class=\"right-align\">\n                              <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> </span>P15,200</p>\n                              <div class=\"valign-wrapper right received-candies\">\n                                  <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 60 </span> </p>\n                                  <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"middle-cont\">\n                      <img class=\"responsive-img\" src=\"../assets/img/LG-32MA70HY-P-1.png\" >\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"bottom-cont\">\n                      <div class=\"col s9 left-align no-pad\">\n                          <p class=\"product-brand\" id=\"product-brand\">LG</p>\n                          <div class=\"treats-list\">\n                              <ul>\n                                  <li>32MA70HY-P </li>\n                                  <li>1080P</li>\n                                  <li>32''</li>\n                                  <li>Full HD IPS</li>\n                              </ul>\n                          </div>\n                      </div>\n                      <div class=\"col s3 center-align no-pad\">\n                          <button class=\"btn waves-effect waves-light\">\n                              <a href=\"contact-us-page.html\">Buy Now</a>\n                          </button>\n                          <p class=\"prod-available\">Available: <span>YES</span></p>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<!--Monitor Ends-->\n\n<!-- Keyboards -->\n<div class=\"row keyboards\">\n  <div class=\"col s12\">\n    <p class=\"treats-item-title center\">Keyboards</p>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col s6 products\">\n    <div id=\"product-1\" class=\"products-item\">\n      <div class=\"container center products-item-content\" >\n        <div class=\"row no-btm\">\n          <div class=\"treat-img\">\n            <div class=\"left\">\n                <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n            </div>\n          </div>\n          <div class=\"upper-cont\">\n              <div>\n                  <div class=\"right-align\">\n                      <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 7000.00  </span>Php 5,950</p>\n                      <div class=\"valign-wrapper right received-candies\">\n                          <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 28 </span> </p>\n                          <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                      </div>\n                  </div>\n              </div>\n          </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"middle-cont\">\n            <img class=\"responsive-img\" src=\"../assets/img/krbn-steampunk-keyboard.png\" >\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"bottom-cont\">\n            <div class=\"col s9 left-align no-pad\">\n                <p class=\"product-brand\" id=\"product-brand\">KrBN </p>\n                <div class=\"treats-list\">\n                    <ul>\n                        <li>Keyboard</li>\n                        <li>Oarmy Blue Switch</li>\n                        <li>Steampunk Look</li>\n                        <li>LED Backlit </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col s3 center-align no-pad\">\n                <button class=\"btn waves-effect waves-light\">\n                    <a href=\"contact-us-page.html\">Buy Now</a>\n                </button>\n                <p class=\"prod-available\">Available: <span>YES</span></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Keyboards Ends-->\n\n<!--SSDs-->\n<div class=\"row ssd\">\n  <div class=\"col s12\">\n    <p class=\"treats-item-title center\">SSD</p>\n  </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 16,150.00 </span>Php 13,700</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 54 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/crucial-mx500.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Crucial mx500</p>\n                            <div class=\"treats-list\">\n                                <ul>\n                                    <li>1TB</li>\n                                    <li>3D NAND SATA</li>\n                                    <li>2.5-inch internal SSD</li>\n                                    <li></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 8,400.00 </span>Php 7,100</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 28 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/crucial-mx500.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Crucial mx500</p>\n                            <div class=\"treats-list\">\n                                <ul>\n                                    <li>500GB</li>\n                                    <li>3D NAND Sata</li>\n                                    <li>2.5-inch internal SSD</li>\n                                    <li></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 18,800.00 </span>Php 15,900</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 63 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/samsung-860-evo.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Samsung 860 evo</p>\n                            <div class=\"treats-list\">\n                                <ul>\n                                    <li>1tb</li>\n                                    <li>2.5 inch sata ssd</li>\n                                    <li></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 9,100.00 </span>Php 7,700</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 30 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/samsung-860-evo.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Samsung 860 evo</p>\n                            <div class=\"treats-list\">\n                                <ul>\n                                    <li>500gb</li>\n                                    <li>2.5 inch sata ssd</li>\n                                    <li></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\">\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 7,800.00 </span>Php 6,600</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 26 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/samsung-860-evo.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Samsung 860 evo</p>\n                            <div class=\"ssd-list\">\n                                <ul>\n                                    <li>500gb</li>\n                                    <li>2.5 inch sata ssd</li>\n                                    <li></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 16,150.00 </span>Php 13,700</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 54 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/sandisk-ultra.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Sandisk Ultra</p>\n                            <div class=\"treats-list\">\n                                <ul>\n                                    <li>1tb</li>\n                                    <li>2.5 inch</li>\n                                    <li>3d nand sata iii ssd</li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--SSD Ends-->\n\n<!--ETC-->\n<div class=\"row ssd\">\n  <div class=\"col s12\">\n    <p class=\"treats-item-title center\">Etc</p>\n  </div>\n</div>\n<div class=\"row \">\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 1200.00  </span>Php 1,000</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 4 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/cryorig-cooler.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">CryOrig </p>\n                            <div class=\"treats-list\">\n                                <ul>\n                                    <li>Cooler</li>\n                                    <li>m9i mini tower</li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--ETC ends-->"

/***/ }),

/***/ "./src/app/components/treats/treats.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/treats/treats.component.ts ***!
  \*******************************************************/
/*! exports provided: TreatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatsComponent", function() { return TreatsComponent; });
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

var TreatsComponent = /** @class */ (function () {
    function TreatsComponent() {
    }
    TreatsComponent.prototype.ngOnInit = function () {
    };
    TreatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-treats',
            template: __webpack_require__(/*! ./treats.component.html */ "./src/app/components/treats/treats.component.html"),
            styles: [__webpack_require__(/*! ./treats.component.css */ "./src/app/components/treats/treats.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreatsComponent);
    return TreatsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ren\Documents\projects\hwsangular\hwsangular\ng-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map