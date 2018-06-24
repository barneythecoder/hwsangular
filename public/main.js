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
/* harmony import */ var _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/order-form/order-form.component */ "./src/app/components/order-form/order-form.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_ssd_ssd_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ssd/ssd.component */ "./src/app/components/ssd/ssd.component.ts");
/* harmony import */ var _components_etc_etc_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/etc/etc.component */ "./src/app/components/etc/etc.component.ts");
/* harmony import */ var _components_treats_treats_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/treats/treats.component */ "./src/app/components/treats/treats.component.ts");
/* harmony import */ var _components_productpage_productpage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/productpage/productpage.component */ "./src/app/components/productpage/productpage.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_mailorder_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/mailorder.service */ "./src/app/services/mailorder.service.ts");
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
    { path: 'products/ssd', component: _components_ssd_ssd_component__WEBPACK_IMPORTED_MODULE_13__["SsdComponent"] },
    { path: 'products/etc', component: _components_etc_etc_component__WEBPACK_IMPORTED_MODULE_14__["EtcComponent"] },
    { path: 'products/treats', component: _components_treats_treats_component__WEBPACK_IMPORTED_MODULE_15__["TreatsComponent"] },
    { path: 'productpage', component: _components_productpage_productpage_component__WEBPACK_IMPORTED_MODULE_16__["ProductpageComponent"] }
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
                _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_9__["OrderFormComponent"],
                _components_ssd_ssd_component__WEBPACK_IMPORTED_MODULE_13__["SsdComponent"],
                _components_etc_etc_component__WEBPACK_IMPORTED_MODULE_14__["EtcComponent"],
                _components_treats_treats_component__WEBPACK_IMPORTED_MODULE_15__["TreatsComponent"],
                _components_productpage_productpage_component__WEBPACK_IMPORTED_MODULE_16__["ProductpageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_fullpage__WEBPACK_IMPORTED_MODULE_5__["MnFullpageModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_18__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"]
            ],
            entryComponents: [_components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_9__["OrderFormComponent"]],
            providers: [_services_mailorder_service__WEBPACK_IMPORTED_MODULE_20__["MailorderService"]],
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

module.exports = "body{\n    background-color: #fafafa ;\n}\n.etc{\n    background-color: #4532dc!important;\n}\nnav{\n    box-shadow: none!important;\n}\nnav a{\n    font-weight: bold;\n    font-family: loveloblack;\n    margin-left:20px;  \n}\n/**** UPPER CONTENT****/\n.upper-cont{\n    padding-top:10px;\n}\n.products-item-content{\n    position: relative;\n}\n.recent-price{\n    color:#000;\n    font-family: loveloblack;\n    font-size: 35px;\n    margin-bottom: 0!important;\n}\n.treat-img, .CS-img {\n    position: absolute;\n    top:25px;\n    left: -11px;\n}\n.total-candies-rec,.num-of-candies{\n    font-family: loveloblack;\n    font-size:15px;\n}\n.received-candies{\n    margin-top:0!important;\n}\n.candy-img{\n    margin-left: 5px;\n    margin-right: 5px;\n}\n.crossed-out-price{\n    text-decoration: line-through;\n    color: #ca2f2f;\n    font-family: loveloblack;\n    font-size: 16px;\n}\n/************************/\n/**** MIDDLE CONTENT****/\n/************************/\n/**** BOTTOM CONTENT ****/\n.btn{\n    width:100%;\n}\n.product-brand{\n    margin-top:0!important;\n    margin-bottom:0!important;\n    font-family: loveloblack;\n    font-size: 30px;\n    line-height: 25px;\n}\nbutton a{\n    color:#fff;\n}\n.no-pad{\n    padding:15px!important;\n}\n.etc-list ul{\n    margin-top: 0!important;\n}\n.etc-list li{\n    display:inline-block;\n    font-family: loveloblack;\n    padding-right:12px;\n    font-size: 13px;\n}\n/************************/\n/******* ON HOVER *******/\n.products-item{\n    box-shadow: none;\n}\n.products-item:hover{\n    -webkit-animation: boxShadow .5s;\n    animation:  boxShadow .51s;\n    box-shadow: 0 5px 15px rgba(0,0,0,0.15); \n}\n.products-item:hover .upper-cont{\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n.products-item:hover .bottom-cont{\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n.upper-cont, .bottom-cont{\n    opacity:0;\n}\n/*ANIMATION KEYFRAMES*/\n@-webkit-keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n@-webkit-keyframes boxShadow {    \n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}\n@keyframes boxShadow {\n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}\n/**************************************/\n@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url('https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');\n}\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: 'liga';\n    -webkit-font-smoothing: antialiased;\n} "

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

module.exports = "body{\n    background-color: #fafafa ;\n}\n.keyboards{\n    background-color: #94a7f4!important;\n}\nnav{\n    box-shadow: none!important;\n}\nnav a{\n    font-weight: bold;\n    font-family: loveloblack;\n    margin-left:20px;  \n}\n/**** UPPER CONTENT****/\n.upper-cont{\n    padding-top:10px;\n}\n.products-item-content{\n    position: relative;\n}\n.recent-price{\n    color:#000;\n    font-family: loveloblack;\n    font-size: 35px;\n    margin-bottom: 0!important;\n}\n.treat-img, .CS-img {\n    position: absolute;\n    top:25px;\n    left: -11px;\n}\n.total-candies-rec,.num-of-candies{\n    font-family: loveloblack;\n    font-size:15px;\n}\n.received-candies{\n    margin-top:0!important;\n}\n.candy-img{\n    margin-left: 5px;\n    margin-right: 5px;\n}\n.crossed-out-price{\n    text-decoration: line-through;\n    color: #ca2f2f;\n    font-family: loveloblack;\n    font-size: 16px;\n}\n/************************/\n/**** MIDDLE CONTENT****/\n/************************/\n/**** BOTTOM CONTENT ****/\n.btn{\n    width:100%;\n}\n.product-brand{\n    margin-top:0!important;\n    margin-bottom:0!important;\n    font-family: loveloblack;\n    font-size: 30px;\n    line-height: 25px;\n}\nbutton a{\n    color:#fff;\n}\n.no-pad{\n    padding:15px!important;\n}\n.keyboards-list ul{\n    margin-top: 0!important;\n}\n.keyboards-list li{\n    display:inline-block;\n    font-family: loveloblack;\n    padding-right:12px;\n    font-size: 13px;\n}\n/************************/\n/******* ON HOVER *******/\n.products-item{\n    box-shadow: none;\n}\n.products-item:hover{\n    -webkit-animation: boxShadow .5s;\n    animation:  boxShadow .51s;\n    box-shadow: 0 5px 15px rgba(0,0,0,0.15); \n}\n.products-item:hover .upper-cont{\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n.products-item:hover .bottom-cont{\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n.upper-cont, .bottom-cont{\n    opacity:0;\n}\n/*ANIMATION KEYFRAMES*/\n@-webkit-keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n@-webkit-keyframes boxShadow {    \n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}\n@keyframes boxShadow {\n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}\n/**************************************/\n@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url('https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');\n}\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: 'liga';\n    -webkit-font-smoothing: antialiased;\n}"

/***/ }),

/***/ "./src/app/components/keyboards/keyboards.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/keyboards/keyboards.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <nav>\n        <div class=\"nav-wrapper keyboards\">\n            <div class=\"col s6\">\n                <a [routerLink]=\"['/']\" class=\"breadcrumb\">HWS</a>\n                <a href=\"#prods\" class=\"breadcrumb\">products</a>\n                <a href=\"#!\" class=\"breadcrumb\">keyboards</a>\n            </div>\n            <div class=\"col s6\"></div>\n        </div>\n    </nav>\n</div>\n\n<div class=\"row grey lighten-5\">\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 7000.00  </span>Php 5,950</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 28 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/krbn-steampunk-keyboard.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">KrBN </p>\n                            <div class=\"keyboards-list\">\n                                <ul>\n                                    <li>Keyboard</li>\n                                    <li>Oarmy Blue Switch</li>\n                                    <li>Steampunk Look</li>\n                                    <li>LED Backlit </li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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

module.exports = "body{\n    min-width: 1366px;\n    background-color: #fafafa!important;\n    }\nnav{\n    position: fixed!important;\n    z-index:1;\n}\n.blktext{\n    color:#000;\n}\n.whttext{\n    color: #fff;\n}\n.hide{\n    background-color: #1582D0;\n}\n/******************************************\n    HEADER \n*******************************************/\nnav.index_nav{ \n    height: 135px!important;\n    padding: 20px 0;\n    min-width: 1366px;\n    position: fixed;\n    z-index:1000;\n}\n.nav-list a{\n    color:#000!important;\n    font-family: loveloblack;\n}\nimg#HWS_logo_candy{\n    width: 100px;\n}\n.line{\n    background-color: #000;\n    height: 1px;\n    margin-top: 30px;\n}\n#unscrolled-header{\n    display: block;\n}\n#logo{\n    margin-left:20px;\n}\n.vl{\n    border-left: 1px solid #DBDBDB;\n    height: 50px;\n    margin: 0 20px;\n}\n.social-media img{\n    margin: 0 10px;\n}\n.for-shopping a{\n    margin: 0 20px;\n}\n/******************************************/\ndiv.index-cont-one{\n}\ndiv.index-cont-two{\n    background-color:#fff;\n}\ndiv.index-cont-three{\n    background-color:#1582D0;\n}\ndiv.index-cont-three p{\nmargin-top:0!important;\n}\n.index-right{\n    float: right;\n    top:50%;\n    right: 16px;\n}\n.index{\n    background-color: #fafafa;  \n}\n.product{\n    background-color: #fff;\n}\n.link-earn-candy{\n    color: #5A99E3;\n    font-family: loveloline;\n    font-size:45px;\n    position: absolute;\n    bottom:0;\n    left:0;\n    right:0;\n}\n.img-promo{\n    position: absolute;\n    bottom:0;\n    left:0;\n    right:0;\n}\n/******************************************\n    PRODUCT PANEL\n*******************************************/\n.product-icon-hover{\n    position: absolute;\n    border-style: solid;\n    border-width: 5px;\n    border-color: red;\n    height: 100vh;\n    top: 0;    \n    left: 0;\n    width: 25%;\n    z-index: -1;\n}\n.product-title{\n    font-family: loveloblack;\n    font-size: 20px;\n    color:#737373;\n    margin: 20PX 0 10px 0px;\n}\n.product-list{\n    font-family: loveloblack;\n    font-size: 15px;\n}\n.product-list li{\n    margin: 5px 0 5px 0px;\n    line-height: 30px;\n}\n.product-list li a{\n    color:#737373;\n}\n/***********************************************************/\n/******************************************\n    MORE THAN EYE CANDY PANEL\n*******************************************/\n.candy-sec{\n    background-color: #1582D0; \n    height: 100vh;\n}\n.candy-sec ul{\n    margin-left: 45px;\n}\n.candy-sec ul li{\n    margin: 10px 0 10px 0;\n    font-family: robotomedium;\n    font-size: 20px;\n    line-height: 30px;\n}\n.candy-title{\n    width: 95%;\n    font-size: 85px;\n    position: relative;\n    font-family: loveloblack;\n    line-height: normal;\n    margin: 0;\n}\n.candy-text{\n    width: 75%;\n    font-family: robotolight;\n    line-height: 28px;\n    font-size: 20px;\n}\n.candy-img{\n    min-width: 1366px;\n}\n.btn-flat{\n    border-color: #fff;\n    border-style: solid;\n    border-width: 1px;\n    color:#fff!important;\n    width: 75%;\n    border-radius: 25px;\n    font-family: loveloblack;\n    font-size:20px;\n}\n/**************************************************************/\n/**************************************************************/\n#mon-hover, #key-hover, \n#graph-card-hover, \n#ssd-hover, #mobo-hover,\n#mice-hover, #etc-hover,\n#psu-hover, #memory-hover,\n#cpu-hover, #candy-hover {\n    opacity: 0;\n}\n#mon .mon_color,\n#key .key_color,\n#psu .psu_color,\n#ssd .ssd_color,\n#cpu .cpu_color,\n#memory .mem_color,\n#mobo .mobo_color,\n#graph-card .gcard_color,\n#etc .etc_color{\n    display: none;\n    \n}\n#mon:hover .mon_blk,\n#key:hover .key_blk,\n#psu:hover .psu_blk,\n#ssd:hover .ssd_blk,\n#cpu:hover .cpu_blk,\n#memory:hover .mem_blk,\n#mobo:hover .mobo_blk,\n#graph-card:hover .gcard_blk,\n#etc:hover .etc_blk,\n#candy:hover .candy_blk{\n    display: none;\n    \n}\n#mon:hover .mon_color,\n#key:hover .key_color,\n#psu:hover .psu_color,\n#ssd:hover .ssd_color,\n#cpu:hover .cpu_color,\n#memory:hover .mem_color,\n#mobo:hover .mobo_color,\n#graph-card:hover .gcard_color,\n#etc:hover .etc_color,\n#candy:hover .candy_color{\n    display: inline;\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n#mon:hover #mon-hover, \n#key:hover #key-hover,\n#graph-card:hover #graph-card-hover,\n#ssd:hover #ssd-hover,\n#mobo:hover #mobo-hover,\n#mice:hover #mice-hover,\n#psu:hover #psu-hover,\n#etc:hover #etc-hover,\n#memory:hover #memory-hover,\n#cpu:hover #cpu-hover,\n#candy:hover #candy-hover{\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n#mon:hover,\n#key:hover,\n#graph-card:hover,\n#ssd:hover,\n#mice:hover,\n#mobo:hover,\n#psu:hover,\n#etc:hover,\n#memory:hover,\n#cpu:hover,\n#candy:hover{\n    box-shadow: 0 5px 15px rgba(0,0,0,0.15);\n    -webkit-animation: boxShadow .5s;\n    animation:  boxShadow .51s;\n}\n/*ANIMATION KEYFRAMES*/\n@-webkit-keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n@-webkit-keyframes boxShadow {    \n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}\n@keyframes boxShadow {\n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}\n/******************************************\n    WHY SHOP WITH US PANEL\n*******************************************/\n.why-shop{\n    background: #663AF5;\n    height: 100vh;\n    background:linear-gradient(to right, #fff 0%, #fff 42%, #fff 42%, #663AF5 42%, #663AF5 100%);\n}\n.BG{\n    background-size: cover;\n}\n.ws-height{\n    height: 100vh;\n}\n.ws-text{\n    font-family: loveloline;\n    font-size: 10vmin;\n    color: #663AF5;\n    line-height: normal; \n}\n.ws-item-text{\n    font-family: loveloline;\n    font-size: 5vmin;\n    color: #663AF5;\n    line-height: normal; \n}\n.ws-title{\n    position: relative;\n    border-style: solid;\n    border-color: transparent;\n    border-width: 2px;\n    width: 80%;\n    margin: 0 20px 0 auto;\n}\n.ws-container{\n    border-style: solid;\n    border-color: transparent;\n    border-width: 2px;\n    width: 80%;\n    height:300px;\n    margin: 0 35px;\n}\n.ws-content{\n    font-family: Robotoregular;\n    font-style: normal;\n    font-weight: normal;\n    line-height: normal;\n    font-size: 2.333vmin;\n    color: #FFFFFF;\n}\n.btn-container{\n    margin-top: 50px;\n}\n.btn-container a{\n    margin: 5px 5px;\n}\n.btn-container p{\n    width:90%;\n    font-family: loveloblack;\n    margin:0 auto;\n}\n#ws-shop-btn{\n    background: #fff;  \n}\n#ws-shop-btn p{\n    color: #663AF5;\n}\n/******************************************\n    MORE THAN EYE TreatsEX PANEL\n*******************************************/\n.treatsEx-sec{\n    background-color: #3d3d3d; \n    height: 100vh;\n}\n.treatsEx-sec ul{\n    margin-left: 45px;\n}\n.treatsEx-sec ul li{\n    margin: 10px 0 10px 0;\n    font-family: robotomedium;\n    font-size: 20px;\n    line-height: 30px;\n}\n.treatsEx-title{\n    width: 95%;\n    font-size: 85px;\n    position: relative;\n    font-family: loveloblack;\n    line-height: normal;\n    margin: 0;\n}\n.treatsEx-text{\n    width: 75%;\n    font-family: robotomedium;\n    line-height: 28px;\n    font-size: 20px;\n}\n.treatsEx-img{\n    min-width: 1366px;\n}\n.btn-flat{\n    border-color: #fff;\n    border-style: solid;\n    border-width: 1px;\n    color:#fff!important;\n    width: 75%;\n    border-radius: 25px;\n    font-family: loveloblack;\n    font-size:20px;\n}\n/**************************************************************/\n"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mnFullpage [mnFullpageOnLeave]=\"onLeave\" [mnFullpageNavigation]=\"true\" [mnFullpageAnchors]=\"['landing','prods','candies','whyus','whyus2','whyus3','whyus4','whyus5','treatsEx']\">\n\n    <nav [class.hide]=\"isScrolled\" class=\"nav-center white index_nav\" id=\"unscrolled-header\" >\n        <div class=\"row blktext center\" >\n            <div class=\"col s1 \">\n                <div class=\"col s2 offset-s1\">\n                    <a href=\"https://www.facebook.com/hwsugar/\"><img src=\"../assets/img/icon_facebook.png\"></a>\n                </div>\n                <div class=\"col s4 offset-s1\">                                                     \n                    <a href=\"https://www.instagram.com/hardwaresugar/\"><img src=\"../assets/img/icon_instagram.png\"></a>\n                </div>\n            </div>\n            <div class=\"col s4\">\n                <div class=\"row blue\" style=\"margin-bottom:0!important;\">\n                    <div class=\"line\"></div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col s4 nav-list\"><a href=\"#prods\">Products</a></div>\n                    <div class=\"col s4 nav-list\"><a href=\"#candies\">Candy</a></div>\n                    <div class=\"col s4 nav-list\"><a [routerLink]=\"['/products/treats']\">HWS Treats</a></div>\n                </div>\n            </div>\n            <div class=\"col s2 center\">\n                <img id=\"HWS_logo_candy\" class=\"responsive-img\" src=\"../assets/img/HWS_Logo_Monitor_Candy.png\"> \n            </div>\n            <div class=\"col s3\">\n                <div class=\"row\" style=\"margin-bottom:0!important;\">\n                    <div class=\"line\"></div>\n                </div>                \n                <div class=\"row\">\n                    <div class=\"col s4 nav-list\"><a href=\"https://docs.google.com/spreadsheets/d/1ewWrIVHcWtQ9PxkM5UHblbWmgT8fn6p7_B-L9hndq7I/edit#gid=0\">All</a></div>\n                    <div class=\"col s4 nav-list\"><a href=\"#whyus\">Why Us?</a></div>\n                    <div class=\"col s4 nav-list\"><a href=\"#\">Hit us Up</a></div>\n                </div>\n            </div>\n            <div class=\"col s2\">\n                <div class=\"col s4\">\n                    <a href=\"#\"><img src=\"../assets/img/icon_user.png\"></a>\n                </div>\n                <div class=\"col s4\">\n                    <a href=\"#\"><img src=\"../assets/img/icon_question_mark.png\"></a>\n                </div>\n                <div class=\"col s4\">\n                    <a href=\"#\"><img src=\"../assets/img/icon_cart.png\"></a>\n                </div>\n            </div>\n        </div>\n    </nav>\n\n    <div class=\"section welcome-section fp-section fp-table index\" data-anchor=\"landing\">\n        <div class = \"fp-tableCell\">\n            <div class=\"row\">\n                <img class=\"responsive-img img-promo\" src=\"../assets/img/img_index_promo.png\">\n            </div>\n        </div>\n    </div>\n\n    <div class=\"section welcome-section fp-section fp-table product\" data-anchor=\"prods\">\n        <div class = \"fp-tableCell\">          \n            <div class=\"row center valign-wrapper\" >\n                <div class=\"col s1 center-align\"></div>\n                <div class=\"col s2 center-align\" id=\"mon\">\n                    <a [routerLink]=\"['/products/treats']\">\n                        <img class=\"responsive-img mon_color\"  src=\"../assets/img/icon_monitor.png\">\n                        <img class=\"responsive-img mon_blk\" src=\"../assets/img/icon_monitor_blk.png\">\n                    </a>\n                    <div id=\"mon-hover\">\n                        <p class=\"product-title\">Monitors</p>\n                    </div>\n                </div>\n                <div class=\"col s2 center-align\" id=\"key\" >\n                    <a  [routerLink]=\"['/products/treats']\">\n                        <img class=\"responsive-img key_blk\" src=\"../assets/img/icon_keyboard_blk.png\">\n                        <img class=\"responsive-img key_color\" src=\"../assets/img/icon_keyboard.png\">\n                    </a>\n                    <div id =\"key-hover\">\n                        <p class=\"product-title\">Keyboards</p>\n                    </div>\n                </div>\n                <div class=\"col s2 center-align\" id=\"candy\">\n                    <a [routerLink]=\"['/products/treats']\">\n                        <img class=\"responsive-img candy_color\" src=\"../assets/img/icon_logo.png\">\n                    </a>\n                    <div id =\"candy-hover-disabled-for-now\">\n                        <p class=\"product-title\">Steam Sale!</p>\n                    </div>\n                </div>\n                <div class=\"col s2 center-align\" id=\"psu\">\n                    <a href=\"#\">\n                        <img class=\"responsive-img psu_blk\" src=\"../assets/img/icon_psu_blk.png\">\n                        <img class=\"responsive-img psu_color\" src=\"../assets/img/CS_psu.png\">\n                    </a>\n                    <div id=\"psu-hover\">\n                        <p class=\"product-title\">Power Supply Unit</p>\n                    </div>\n                </div>\n                <div class=\"col s2 center-align\" id=\"ssd\">\n                    <a [routerLink]=\"['/products/treats']\">\n                        <img class=\"responsive-img ssd_blk\" src=\"../assets/img/icon_ssd_blk.png\">\n                        <img class=\"responsive-img ssd_color\" src=\"../assets/img/icon_ssd.png\">\n                    </a>\n                    <div id =\"ssd-hover\">\n                        <p class=\"product-title\"> Solid-State Drives</p>\n                    </div>\n                    <div class=\"product-icon-hover\"></div>\n                </div>\n                <div class=\"col s1 center-align\"></div>\n            </div>\n\n            <div class=\"row center valign-wrapper\">\n                <div class=\"col s1 center-align\"></div>\n                <div class=\"col s2 center-align\" id=\"cpu\">\n                    <a href=\"#\">\n                        <img class=\"responsive-img cpu_blk\" src=\"../assets/img/icon_cpu_blk.png\">\n                        <img class=\"responsive-img cpu_color\" src=\"../assets/img/CS_cpu.png\">\n                    </a>\n                    <div id=\"cpu-hover\">\n                        <p class=\"product-title\">Central Processing Unit</p>\n                    </div>\n                    <div class=\"product-icon-hover\"></div>\n                </div>\n                <div class=\"col s2 center-align\" id=\"memory\">\n                    <a href=\"#\">\n                        <img class=\"responsive-img mem_blk\" src=\"../assets/img/icon_memory_blk.png\">\n                        <img class=\"responsive-img mem_color\" src=\"../assets/img/CS_memory.png\">\n                    </a>\n                    <div id=\"memory-hover\">\n                        <p class=\"product-title\">Memory</p>\n                    </div>\n                    <div class=\"product-icon-hover\"></div>\n                </div>\n\n                <div class=\"col s2 center-align\" id=\"mobo\" >\n                    <a href=\"#\">\n                        <img class=\"responsive-img mobo_blk\" src=\"../assets/img/icon_motherboard_blk.png\">\n                        <img class=\"responsive-img mobo_color\" src=\"../assets/img/CS_motherboard.png\">\n                    </a>\n                    <div id =\"mobo-hover\">\n                        <p class=\"product-title\">Motherboards</p>\n                    </div>\n                    <div class=\"product-icon-hover\"></div>\n                </div>\n\n                <div class=\"col s2 center-align\" id=\"graph-card\">\n                    <a href=\"#\">\n                        <img class=\"responsive-img gcard_blk\" src=\"../assets/img/icon_graphic_card_blk.png\">\n                        <img class=\"responsive-img gcard_color\" src=\"../assets/img/CS_graphic_card.png\">\n                    </a>\n                    <div id =\"graph-card-hover\">\n                        <p class=\"product-title\">Graphic Cards</p>\n                    </div>\n                    <div class=\"product-icon-hover\"></div>\n                </div>\n                <div class=\"col s2 center-align\" id=\"etc\">\n                    <a  [routerLink]=\"['/products/treats']\">\n                        <img class=\"responsive-img etc_blk\" src=\"../assets/img/icon_etc_blk.png\">\n                        <img class=\"responsive-img etc_color\" src=\"../assets/img/icon_etc.png\">\n                    </a>\n                    <div id=\"etc-hover\">\n                        <p class=\"product-title\">ETC</p>\n                    </div>\n                    <div class=\"product-icon-hover\"></div>\n                </div>\n                <div class=\"col s1 center-align\"></div>\n                <a href=\"#candies\"><p class=\"link-earn-candy\">earn candies when you shop</p></a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"section welcome-section fp-section fp-table candy-sec\" data-anchor=\"candies\">\n        <div class = \"fp-tableCell\">\n            <div class=\"row\">\n                <div class=\"valign-wrapper\">\n                    <div class=\"col s5 right-align\" style=\"padding-right:100px;\">\n                        <img class=\"responsive-img\" src=\"../assets/img/HWS_Index_CANDY_Panel.png\">\n                    </div>\n                    <div class=\"col s7\">\n                        <p class=\"candy-title whttext\">More than just <br>eyecandy</p>\n                        <p class=\"candy-text whttext\">\n                            When you shop here in Hardware Sugar, you get candies! For every 250Php you spend in the shop, you are rewarded with one candy. You can use your candies to:  \n                        </p>\n                        <ul class=\"whttext\">\n                            <li>1. Apply as a discount for your next purchase</li>\n                            <li>2. Trade in to buy steam games</li>\n                            <li>3. Use as raffle entries to win exciting prizes</li>\n                        </ul>\n                        <a href=\"#prods\"class=\"waves-effect waves-teal btn-flat center\">shop</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"section welcome-section fp-section fp-table why-shop\" data-anchor=\"whyus\">\n        <div class=\"fp-tableCell\">\n            <div class=\"row ws-one\">\n                <div class=\"col s5 ws-height valign-wrapper\">\n                    <div class=\"ws-title\">\n                        <p class=\"ws-text \">Why <br/> shop <br/>with us</p>\n                    </div>\n                </div>\n                <div class=\"col s7 ws-height valign-wrapper\">\n                    <div class=\"ws-container\">\n                        <p class=\"ws-content\">\n                            Go to any PC store near you, and what do you see? First, the store is guaranteed to be cramped. Stacks of printer boxes in the middle, typical glass displays featuring laptops from 3 years ago and a buch of sealed, untestable other stuff. It's like going through a government office. \n                            <br/>NOT. FUN. AT. ALL\n                            <br/> <br/>\n                            Hardware Sugar was founded by 2 gamers who were tired of the lousy customer service of most local pc shops. Our aim is to make buying hardware FUN. \n                            <br/><br/>\n                            Scroll down below and we'll let you know how!\n                        </p>\n                    </div>\n                </div>\n            </div>     \n        </div>\n    </div>\n    <div class=\"section welcome-section fp-section fp-table why-shop\"data-anchor=\"whyus2\">\n        <div class = \"fp-tableCell\">\n            <div class=\"row ws-two\">\n                <div class=\"col s5 ws-height BG valign-wrapper\">\n                    <div class=\"ws-title\">\n                        <p class=\"ws-item-text\">a modern store in a modern world</p>\n                        <img class=\"responsive-img\" src=\"../assets/img/panel1-building.png\">\n                    </div>\n                </div>\n                <div class=\"col s7 ws-height valign-wrapper\">\n                    <div class=\"ws-container\">\n                        <p class=\"ws-content\">\n                            You demand the latest, cutting-edge tech and Hardware Sugar gets you. We welcome every PC tinkerer out there; if it's high-end or high-performance parts you're looking for, Hardware Sugar has it. \n                            <br><br>\n                            Casual builders need not worry though! We also have stuff for first-time builders or if you just want a solid, everyday driver.\n                                \n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> \n    <div class=\"section welcome-section fp-section fp-table why-shop\"data-anchor=\"whyus3\">\n        <div class = \"fp-tableCell\">\n            <div class=\"row ws-three\">\n                <div class=\"col s5 ws-height BG valign-wrapper\">\n                    <div class=\"ws-title\">\n                        <p class=\"ws-item-text\">what you see is what you get</p>\n                        <img class=\"responsive-img\" src=\"../assets/img/panel1-building.png\">\n                    </div>\n                </div>\n                <div class=\"col s7 ws-height valign-wrapper\">\n                    <div class=\"ws-container\">\n                        <p class=\"ws-content\">\n                            Everything we display is in stock. No more waiting and downpaying and following up when the stock will arrive. You want something? Buy it and enjoy it.  We do not believe in making the customer wait.\n                        </p>\n                    </div>\n                </div>\n            </div>    \n        </div>\n    </div>  \n    <div class=\"section welcome-section fp-section fp-table why-shop\"data-anchor=\"whyus4\">\n        <div class=\"fp-tableCell\">\n            <div class=\"row ws-four\">\n                <div class=\"col s5 ws-height BG valign-wrapper\">\n                    <div class=\"ws-title\">\n                        <p class=\"ws-item-text\">get more than what you bargained for</p>\n                        <img class=\"responsive-img\" src=\"../assets/img/panel_four_img.png\">\n                    </div>\n                </div>\n                <div class=\"col s7 ws-height valign-wrapper\">\n                    <div class=\"ws-container\">\n                        <p class=\"ws-content\">\n                            When you shop here in Hardware Sugar, you get WAY more than your money's worth.\n                            <br><br>\n                            Get 100 pesos if you let us post and tag you on FB and IG with a picture of you with your purchase. Also, you get <span>candies</span>\n                            <br><br>\n                            And for our fellow gamers out there, every time Valve has a Steam Sale everything in the shop is 10% off.\n                        </p>\n                    </div>\n                </div>\n            </div>           \n        </div>\n    </div>  \n    <div class=\"section welcome-section fp-section fp-table why-shop\"data-anchor=\"whyus5\">\n        <div class = \"fp-tableCell\">\n            <div class=\"row ws-five\">\n                <div class=\"col s5 ws-height BG valign-wrapper\">\n                    <div class=\"ws-title\">\n                        <p class=\"ws-item-text\">better than free delivery</p>\n                        <img class=\"responsive-img\" src=\"../assets/img/panel_five_img.png\">\n                    </div>\n                </div>\n                <div class=\"col s7 ws-height valign-wrapper\">\n                    <div class=\"ws-container\">\n                        <p class=\"ws-content\">\n                            Yes our delivery is free. But if you come into the store to pick up your purchase you get 100 pesos rebate! We’d like a chance to say hello to all of our customers.\n                        </p>\n                        <a href=\"#landing\"class=\"waves-effect waves-teal btn-flat center\">Back to top</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>      \n\n\n    <div class=\"section welcome-section fp-section fp-table treatsEx-sec\" data-anchor=\"treatsEx\">\n        <div class = \"fp-tableCell\">\n            <div class=\"row\">\n                <div class=\"valign-wrapper\">\n                    <div class=\"col s5 right-align\" style=\"padding-right:100px;\">\n                        <img class=\"responsive-img\" src=\"../assets/img/treats-stamp-img.png\">\n                    </div>\n                    <div class=\"col s7\">\n                        <p class=\"treatsEx-title whttext\">You're in for <br>a treat</p>\n                        <p class=\"treatsEx-text whttext\">\n                            Our Hardware Sugar Treats are US-stock refurbished items. You get the same quality, same guarantee, and same warranty, but all for a sweeter deal!\n                        </p>\n                        \n                        <a href=\"#prods\"class=\"waves-effect waves-teal btn-flat center\">shop</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>                     \n\n\n\n</div>\n\n"

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

module.exports = "\n/******** GLOBAL ***********/\n\nnav{\n    box-shadow: none!important;\n}\n\n.monitors{\n    background-color: #1582D0!important;\n}\n\nnav a{\n    font-weight: bold;\n    font-family: loveloblack;\n    margin-left:20px;  \n}\n\n.btn{\n    width:100%;\n}\n\n.products-item-content{\n    position: relative;\n}\n\n.treat-img, .CS-img {\n    position: absolute;\n    top:25px;\n    left: -11px;\n}\n\n.crossed-out-price{\n    text-decoration: line-through;\n    color: #ca2f2f;\n    font-family: loveloblack;\n    font-size: 16px;\n}\n\n.recent-price{\n    color:#000;\n    font-family: loveloblack;\n    font-size: 35px;\n    margin-bottom: 0!important;\n}\n\n.total-candies-rec,.num-of-candies{\n    font-family: loveloblack;\n    font-size:15px;\n}\n\n.received-candies{\n    margin-top:0!important;\n}\n\n.candy-img{\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.product-brand{\n    margin-top:0!important;\n    margin-bottom:0!important;\n    font-family: loveloblack;\n    font-size: 30px;\n    line-height: 25px;\n}\n\nbutton a{\n    color:#fff;\n}\n\n.no-pad{\n    padding:15px!important;\n}\n\n.monitors-list ul{\n    margin-top: 0!important;\n}\n\n.monitors-list li{\n    display:inline-block;\n    font-family: loveloblack;\n    padding-right:12px;\n    font-size: 13px;\n}\n\n.prod-available{\n    font-family: robotomedium;\n    font-size: 9.5px;\n    margin:0 auto;\n    line-height: 20px;\n}\n\n.upper-cont{\n    padding-top:10px;\n}\n\n.no-btm{\n    margin-bottom:0!important;\n}\n\n.valign-wrapper{\n    margin-top: -13px !important;\n}\n\n/******* MONITORS *******/\n\n/******* ON HOVER *******/\n\n.products-item{\n    box-shadow: none;\n}\n\n.products-item:hover{\n    -webkit-animation: boxShadow .5s;\n    animation:  boxShadow .51s;\n    box-shadow: 0 5px 15px rgba(0,0,0,0.15); \n}\n\n.products-item:hover .upper-cont{\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n\n.products-item:hover .bottom-cont{\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n\n.upper-cont, .bottom-cont{\n    opacity:0;\n}\n\n/*ANIMATION KEYFRAMES*/\n\n@-webkit-keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n\n@-webkit-keyframes boxShadow {    \n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}\n\n@keyframes boxShadow {\n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}\n\n@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url('https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');\n    }\n\n.material-icons {\n        font-family: 'Material Icons';\n        font-weight: normal;\n        font-style: normal;\n        font-size: 24px;\n        line-height: 1;\n        letter-spacing: normal;\n        text-transform: none;\n        display: inline-block;\n        white-space: nowrap;\n        word-wrap: normal;\n        direction: ltr;\n        -webkit-font-feature-settings: 'liga';\n        -webkit-font-smoothing: antialiased;\n    }"

/***/ }),

/***/ "./src/app/components/monitors/monitors.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/monitors/monitors.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <nav>\n        <div class=\"nav-wrapper monitors\">\n            <div class=\"col s6\">\n                <a [routerLink]=\"['/']\" class=\"breadcrumb\">HWS</a>\n                <a href=\"#prods\" class=\"breadcrumb\">products</a>\n                <a href=\"#!\" class=\"breadcrumb\">monitors</a>\n            </div>\n            <div class=\"col s6\"></div>\n            \n        </div>\n    </nav>\n</div>\n\n<div class=\"row grey lighten-5\">\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\">\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 15,160.00 </span>Php 12,800.00</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 60 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/LG-32MP58HQ-P-1.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">LG <span style=\"font-size: 25px; \">32 inches</span></p>\n                            <div class=\"monitors-list\">\n                                <ul>\n                                    <li>32MP58HQ-P </li>\n                                    <li>1080P</li>\n                                    <li>32''</li>\n                                    <li>Full HD IPS</li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\">\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 15,160.00 </span>Php 12,800.00</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 60 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/LG-32MA70HY-P-1.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">LG <span style=\"font-size: 25px; \">32 inches</span></p>\n                            <div class=\"monitors-list\">\n                                <ul>\n                                    <li #prodName>32MA70HY-P </li>\n                                    <li>1080P</li>\n                                    <li>32''</li>\n                                    <li>Full HD IPS</li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button (click)=\"openOrderFormDialog({itemName:prodName.innerText})\" class=\"btn waves-effect waves-light\">\n                                Buy Now\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n    <div class=\"row grey lighten-5\">\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"CS-img\">\n                        <div class=\"left\">\n                            <img src=\"../assets/img/coming-soon.png\" class=\"responsive-img\">\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> </span>P29,100</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 116 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/XB271HK-bmiprz-1.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">ACER</p>\n                            <div class=\"monitors-list\">\n                                <ul>\n                                    <li>XB271HK bmiprz </li>\n                                    <li>3480x2160</li>\n                                    <li>27''</li>\n                                    <li> 4K UHD IPS </li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button class=\"btn waves-effect waves-light disabled\">\n                                <a href=\"contact-us-page.html\">Buy Now</a>\n                            </button>\n                            <p class=\"prod-available\">Available: <span>No</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"CS-img\">\n                        <div class=\"left\">\n                            <img src=\"../assets/img/coming-soon.png\" class=\"responsive-img\">\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> </span>P64,600</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 258 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/ASUS-PA329Q-1.png\" >\n                    </div>\n                </div>\n\n                \n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">ASUS</p>\n                            <div class=\"monitors-list\">\n                                <ul>\n                                    <li>PA329Q</li>\n                                    <li>3840x2160</li>\n                                    <li>32''</li>\n                                    <li>4K/UHD IPS</li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button  class=\"btn waves-effect waves-light disabled\">\n                                Buy Now\n                            </button>\n                            <p class=\"prod-available\">Available: <span>SOON</span></p>\n                        </div>\n                    </div>\n                </div>\n\n\n\n\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col s6\">\n\n    </div>\n</div>"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order-form/order-form.component */ "./src/app/components/order-form/order-form.component.ts");
/* harmony import */ var _services_mailorder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mailorder.service */ "./src/app/services/mailorder.service.ts");
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
    function MonitorsComponent(dialog, mailorderService, snackBar) {
        this.dialog = dialog;
        this.mailorderService = mailorderService;
        this.snackBar = snackBar;
    }
    MonitorsComponent.prototype.openOrderFormDialog = function (items) {
        var _this = this;
        var config = {
            width: '',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            },
            data: {
                itemName: items.itemName,
                itemPrice: items.itemPrice
            }
        };
        this.orderFormDialogRef = this.dialog.open(_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__["OrderFormComponent"], config);
        this.orderFormDialogRef
            .afterClosed()
            .pipe(function (order) { return order; })
            .subscribe(function (order) {
            _this.mailorderService.mailReceivedOrder(order);
        });
        this.snackBar.open("Order Received!", "DONE", {
            duration: 10000,
        });
    };
    MonitorsComponent.prototype.ngOnInit = function () {
    };
    MonitorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monitors',
            template: __webpack_require__(/*! ./monitors.component.html */ "./src/app/components/monitors/monitors.component.html"),
            styles: [__webpack_require__(/*! ./monitors.component.css */ "./src/app/components/monitors/monitors.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services_mailorder_service__WEBPACK_IMPORTED_MODULE_3__["MailorderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
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

module.exports = "body{\n    min-width: 1366px;\n    }\nbody>nav{\n    position: fixed;\n    z-index:1;\n}\n.blktext{\n    color:#000;\n}\n.whttext{\n    color: #fff;\n}\n/******************************************\n    HEADER \n*******************************************/\nnav.index_nav{ \n    height: 135px!important;\n    padding: 20px 0;\n    min-width: 1366px;\n    position: fixed;\n    z-index:1000;\n}\n.nav-list a{\n    color:#000!important;\n    font-family: loveloblack;\n}\nimg#HWS_logo_candy{\n    width: 100px;\n}\n.line{\n    background-color: #000;\n    height: 1px;\n    margin-top: 30px;\n}\n#unscrolled-header{\n    display: block;\n}\n#logo{\n    margin-left:20px;\n}\n.vl{\n    border-left: 1px solid #DBDBDB;\n    height: 50px;\n    margin: 0 20px;\n}\n.social-media img{\n    margin: 0 10px;\n}\n.for-shopping a{\n    margin: 0 20px;\n}\n/******************************************/"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav-center white index_nav\" id=\"unscrolled-header\" >\n        <div class=\"row blktext center\" >\n            <div class=\"col s1 \">\n                    <div class=\"col s2 offset-s1\">\n                        <a href=\"#\"><img src=\"../assets/img/icon_facebook.png\"></a>\n                    </div>\n                    <div class=\"col s4 offset-s1\">                                                     \n                        <a href=\"#\"><img src=\"../assets/img/icon_instagram.png\"></a>\n                    </div>\n            </div>\n            <div class=\"col s4\">\n                <div class=\"row blue\" style=\"margin-bottom:0!important;\">\n                    <div class=\"line\"></div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col s4 nav-list\"><a href=\"#prods\">Products</a></div>\n                    <div class=\"col s4 nav-list\"><a href=\"#candies\">Candy</a></div>\n                    <div class=\"col s4 nav-list\"><a href=\"#\">HWS Treats</a></div>\n                </div>\n            </div>\n            <div class=\"col s2 center\">\n                <img id=\"HWS_logo_candy\" class=\"responsive-img\" src=\"../assets/img/HWS_Logo_Monitor_Candy.png\"> \n            </div>\n            <div class=\"col s3\">\n                <div class=\"row\" style=\"margin-bottom:0!important;\">\n                    <div class=\"line\"></div>\n                </div>                \n                <div class=\"row\">\n                    <div class=\"col s4 nav-list\"><a href=\"#\">All</a></div>\n                    <div class=\"col s4 nav-list\"><a href=\"#\">Why Us?</a></div>\n                    <div class=\"col s4 nav-list\"><a href=\"#\">Hit us Up</a></div>\n                </div>\n            </div>\n            <div class=\"col s2\">\n                    <div class=\"col s4\">\n                        <a href=\"#\"><img src=\"../assets/img/icon_user.png\"></a>\n                    </div>\n                    <div class=\"col s4\">\n                        <a href=\"#\"><img src=\"../assets/img/icon_question_mark.png\"></a>\n                    </div>\n                    <div class=\"col s4\">\n                        <a href=\"#\"><img src=\"../assets/img/icon_cart.png\"></a>\n                    </div>\n            </div>\n        </div>\n      </nav>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <nav class=\"nav-center white index_nav\" id=\"unscrolled-header\">\n    <div class=\"row blktext center\">\n        <div class=\"col s1 \">\n            <div class=\"col s2 offset-s1\">\n                <a href=\"#\">\n                    <img src=\"../assets/img/icon_facebook.png\">\n                </a>\n            </div>\n            <div class=\"col s4 offset-s1\">\n                <a href=\"#\">\n                    <img src=\"../assets/img/icon_instagram.png\">\n                </a>\n            </div>\n        </div>\n        <div class=\"col s4\">\n            <div class=\"row blue\" style=\"margin-bottom:0!important;\">\n                <div class=\"line\"></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col s4 nav-list\">\n                    <a href=\"#\">Products</a>\n                </div>\n                <div class=\"col s4 nav-list\">\n                    <a href=\"#\">Candy</a>\n                </div>\n                <div class=\"col s4 nav-list\">\n                    <a href=\"#\">HWS Treats</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col s2 center\">\n            <img id=\"HWS_logo_candy\" class=\"responsive-img\" src=\"../assets/img/HWS_Logo_Monitor_Candy.png\">\n        </div>\n        <div class=\"col s3\">\n            <div class=\"row\" style=\"margin-bottom:0!important;\">\n                <div class=\"line\"></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col s4 nav-list\">\n                    <a href=\"#\">All</a>\n                </div>\n                <div class=\"col s4 nav-list\">\n                    <a href=\"#\">Why Us?</a>\n                </div>\n                <div class=\"col s4 nav-list\">\n                    <a href=\"#\">Hit us Up</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col s2\">\n            <div class=\"col s4\">\n                <a href=\"#\">\n                    <img src=\"../assets/img/icon_user.png\">\n                </a>\n            </div>\n            <div class=\"col s4\">\n                <a href=\"#\">\n                    <img src=\"../assets/img/icon_question_mark.png\">\n                </a>\n            </div>\n            <div class=\"col s4\">\n                <a href=\"#\">\n                    <img src=\"../assets/img/icon_cart.png\">\n                </a>\n            </div>\n        </div>\n    </div>\n</nav> -->"

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

/***/ "./src/app/components/order-form/order-form.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/order-form/order-form.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  input:not([type]), input[type=text], input[type=password], input[type=email], input[type=url], input[type=time], input[type=date], input[type=datetime], input[type=datetime-local], input[type=tel], input[type=number], input[type=search], textarea.materialize-textarea {\n    background-color: transparent!important;\n    border: none!important;\n    border-bottom: 0px solid #9e9e9e!important;\n    border-radius: 0!important;\n    outline: none!important;\n    height: 3rem!important;\n    width: 100%!important;\n    font-size: 1rem!important;\n    margin: 0 0 20px 0!important;\n    padding: 0!important;\n    box-shadow: none!important;\n    box-sizing: content-box!important;\n    transition: all 0.3s!important;\n}"

/***/ }),

/***/ "./src/app/components/order-form/order-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/order-form/order-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"submit(form)\" class=\"example-form\">\n<h1 mat-dialog-title>You are ordering item: {{items.itemName}}</h1>\n<p>Our online store is going online soon! For now, please place your order by filling in the form below. We will get in touch with you immediately.</p>\n<p>Alternatively, you can reach us at 0917-140-33-44</p>\n<p>All fields are REQUIRED</p>\n\n<mat-dialog-content>\n\n    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n      <input formControlName=\"customerName\"  matInput placeholder=\"Name\" required >\n\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\" appearance=\"outline\" >\n      <textarea formControlName=\"customerAddress\" matInput placeholder=\"Delivery Address\" required></textarea>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n      <input formControlName=\"customerPhoneNumber\"  matInput placeholder=\"Mobile Number\" required>\n    </mat-form-field>  \n  \n  \n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button class=\"btn waves-effect waves-light\" type=\"submit\" >Order</button>\n  <button class=\"btn waves-effect waves-light\" mat-dialog-close>Cancel</button>\n</mat-dialog-actions>\n</form>"

/***/ }),

/***/ "./src/app/components/order-form/order-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/order-form/order-form.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function() { return OrderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var OrderFormComponent = /** @class */ (function () {
    function OrderFormComponent(formBuilder, dialogRef, data) {
        /*     this.form = new FormGroup({
              customerName: new FormControl(),
              customerAddress: new FormControl(),
              customerPhoneNumber: new FormControl(),
            }); */
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.form = formBuilder.group({
            customerName: '',
            customerAddress: '',
            customerPhoneNumber: '',
        });
        this.items = {
            itemName: data.itemName,
            itemPrice: data.itemPrice,
            customerName: '',
            customerAddress: '',
            customerNumber: ''
        };
    }
    OrderFormComponent.prototype.ngOnInit = function () {
    };
    OrderFormComponent.prototype.submit = function (form) {
        var custName = form.controls.customerName.value;
        var custAddress = form.controls.customerAddress.value;
        var custPhone = form.controls.customerPhoneNumber.value;
        if ((!custName || custName.length === 0 || /^\s*$/.test(custName))) {
            console.log("Enter Name");
        }
        else if (!custAddress || custAddress.length === 0 || /^\s*$/.test(custAddress)) {
        }
        else if (!custPhone || custPhone.length === 0 || /^\s*$/.test(custPhone)) {
        }
        else {
            this.items.customerName = form.controls.customerName.value;
            this.items.customerAddress = form.controls.customerAddress.value;
            this.items.customerNumber = form.controls.customerPhoneNumber.value;
            this.dialogRef.close(this.items);
        }
    };
    OrderFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-form',
            template: __webpack_require__(/*! ./order-form.component.html */ "./src/app/components/order-form/order-form.component.html"),
            styles: [__webpack_require__(/*! ./order-form.component.css */ "./src/app/components/order-form/order-form.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], OrderFormComponent);
    return OrderFormComponent;
}());



/***/ }),

/***/ "./src/app/components/productpage/productpage.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/productpage/productpage.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\n    box-shadow: none!important;\n}\n.product-item{\n    background-color: #2bbbad!important;\n}\nnav a{\n    font-weight: bold;\n    font-family: loveloblack;\n    margin-left:20px;  \n    color:rgb(255, 255, 255);\n}\n.container{\n    margin: 90px auto!important;\n    width: 80%!important;\n}\n.product-brand{\n    margin-top:0!important;\n    margin-bottom:0!important;\n    font-family: loveloblack;\n    font-size: 55px;\n    line-height: 30px;\n}\nspan.product-brand-code{\n    margin-top:0!important;\n    margin-bottom:0!important;\n    font-family: loveloblack;\n    font-size: 35px;\n    line-height: 25px;\n}\n.pp-price{\n    line-height:normal;\n}\n.recent-price{\n    color:#000;\n    font-family: loveloblack;\n    font-size: 39.55px;\n}\n.crossed-out-price{\n    text-decoration: line-through;\n    color: #ca2f2f;\n    font-family: loveloblack;\n    font-size: 16px;\n    margin:0;\n}\nul{\n    margin-top:0;\n}\nul li{\n    font-family: loveloblack;\n    font-size: 18px;\n    margin-right: 15px;\n    display: inline;\n}\n.received-candies{\n    margin-top:0!important;\n    line-height: 10px;\n}\n.total-candies-rec,.num-of-candies{\n    font-family: loveloblack;\n    font-size:15px;\n}\n.candy-img{\n    margin-left: 5px;\n    margin-right: 5px;\n}\n.btn{\n    width:100%;\n}\nbutton a{\n    color:#fff;\n    font-family: loveloblack;\n    font-size: 17px;\n}\n.no-pad{\n    padding:15px!important;\n}\n.item-desc{\n    font-family: robotoregular;\n    font-size: 17px;\n    padding-top: 25px;\n}\n@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url('https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');\n}\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: 'liga';\n    -webkit-font-smoothing: antialiased;\n}"

/***/ }),

/***/ "./src/app/components/productpage/productpage.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/productpage/productpage.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <nav>\n        <div class=\"nav-wrapper product-item\">\n            <div class=\"col s6\">\n                <a [routerLink]=\"['/']\" class=\"breadcrumb\">HWS</a>\n                <a href=\"#prods\" class=\"breadcrumb\">products</a>\n                <a href=\"#!\" class=\"breadcrumb\">monitors</a>\n                <a href=\"#!\" class=\"breadcrumb\">item</a>\n            </div>\n            <div class=\"col s6\"></div>\n        </div>\n    </nav>\n</div>\n\n<div class=\"row\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s7 pp-img\">\n        <div i-cont>\n          <img class=\"responsive-img\" src=\"../assets/img/LG-32MA70HY-P.png\">\n        </div>\n      </div>\n      <div class=\"col s5\">\n        <div>\n          <p class=\"product-brand\">LG <span class=\"product-brand-code\">32MA70HY</span></p>\n        </div>\n        <div>\n          <ul>\n            <li>1080p</li>\n            <li>32\"</li>\n            <li>Full HD IPS</li>\n          </ul>\n        </div>\n        <div class=\"pp-price\">\n          <p class=\"crossed-out-price\">Php 15,160.00</p>\n          <span class=\"recent-price\">Php 12,800.00</span>\n\n          <div class=\"valign-wrapper received-candies\">\n            <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 51 </span> </p>\n            <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n          </div>\n        </div>\n        <div>\n          <div class=\"center-align pp-btn\">\n            <button class=\"btn waves-effect waves-light\">\n              <a>Buy Now</a>\n            </button>\n            \n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col s7\">\n        <p class=\"pp-item-desc\">A 32-inch class (31.5\" measured diagonally) 16:9 monitor offers more than a 70% larger \n          screen area vs. a 24-inch class monitor*. That's plenty of room for work on spreadsheets, \n          editing documents, watching videos, viewing photos and more.</p>\n\n        <ul>\n          <li>ds</li>\n          <li>sd</li>\n          <li>sds</li>\n        </ul>\n      </div>\n      <div class=\"col s5\">\n        <ul>\n          <li>ds</li>\n          <li>sd</li>\n          <li>sds</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "body{\n    background-color: #fafafa ;\n}\n.ssd{\n    background-color: #19cc74!important;\n}\nnav{\n    box-shadow: none!important;\n}\nnav a{\n    font-weight: bold;\n    font-family: loveloblack;\n    margin-left:20px;  \n}\n/**** UPPER CONTENT****/\n.upper-cont{\n    padding-top:10px;\n}\n.products-item-content{\n    position: relative;\n}\n.recent-price{\n    color:#000;\n    font-family: loveloblack;\n    font-size: 35px;\n    margin-bottom: 0!important;\n}\n.treat-img, .CS-img {\n    position: absolute;\n    top:25px;\n    left: -11px;\n}\n.total-candies-rec,.num-of-candies{\n    font-family: loveloblack;\n    font-size:15px;\n}\n.received-candies{\n    margin-top:0!important;\n}\n.candy-img{\n    margin-left: 5px;\n    margin-right: 5px;\n}\n.crossed-out-price{\n    text-decoration: line-through;\n    color: #ca2f2f;\n    font-family: loveloblack;\n    font-size: 16px;\n}\n/************************/\n/**** MIDDLE CONTENT****/\n/************************/\n/**** BOTTOM CONTENT ****/\n.btn{\n    width:100%;\n}\n.product-brand{\n    margin-top:0!important;\n    margin-bottom:0!important;\n    font-family: loveloblack;\n    font-size: 30px;\n    line-height: 25px;\n}\nbutton a{\n    color:#fff;\n}\n.no-pad{\n    padding:15px!important;\n}\n.ssd-list ul{\n    margin-top: 0!important;\n}\n.ssd-list li{\n    display:inline-block;\n    font-family: loveloblack;\n    padding-right:12px;\n    font-size: 13px;\n}\n/************************/\n/******* ON HOVER *******/\n.products-item{\n    box-shadow: none;\n}\n.products-item:hover{\n    -webkit-animation: boxShadow .5s;\n    animation:  boxShadow .51s;\n    box-shadow: 0 5px 15px rgba(0,0,0,0.15); \n}\n.products-item:hover .upper-cont{\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n.products-item:hover .bottom-cont{\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n.upper-cont, .bottom-cont{\n    opacity:0;\n}\n/*ANIMATION KEYFRAMES*/\n@-webkit-keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n@-webkit-keyframes boxShadow {    \n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}\n@keyframes boxShadow {\n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}\n/******************************************/\n@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url('https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');\n}\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: 'liga';\n    -webkit-font-smoothing: antialiased;\n}"

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

module.exports = ".treats{\n    background-color: #fafafa;\n}\n\n.treats-item-title{\n    font-family: loveloblack;\n    color:#fff;\n    font-size:30px;\n    margin: 10px auto!important;\n    padding-left:40px;\n}\n\n.breadcrumb::before {\n    color: #000!important;\n}\n\n.monitors{\n    background-color: #1582D0!important;\n}\n\n.keyboards{\n    background-color: #94a7f4!important;\n}\n\n.ssd{\n    background-color: #19cc74!important;\n}\n\n.etc{\n    background-color: #4532dc!important;\n}\n\nnav{\n    box-shadow: none!important;\n}\n\nnav a{\n    font-weight: bold;\n    font-family: loveloblack;\n    margin-left:20px;  \n    color: #000;\n}\n\n/**** UPPER CONTENT****/\n\n.upper-cont{\n    padding-top:10px;\n}\n\n.products-item-content{\n    position: relative;\n}\n\n.recent-price{\n    color:#000;\n    font-family: loveloblack;\n    font-size: 35px;\n    margin-bottom: 0!important;\n}\n\n.treat-img, .CS-img {\n    position: absolute;\n    top:25px;\n    left: -11px;\n}\n\n.total-candies-rec,.num-of-candies{\n    font-family: loveloblack;\n    font-size:15px;\n}\n\n.received-candies{\n    margin-top:0!important;\n}\n\n.candy-img{\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.crossed-out-price{\n    text-decoration: line-through;\n    color: #ca2f2f;\n    font-family: loveloblack;\n    font-size: 15px;\n    margin-top: 37px;\n    margin-bottom: 11px;\n}\n\n.now{\n    font-family: robotomedium;\n    font-size: 10px;\n}\n\n.no-margin{\n    margin:0; \n}\n\n.align-price{\n    line-height: 1px\n}\n\n/************************************/\n\n/**** BOTTOM CONTENT ****/\n\n.btn{\n    width:100%;\n}\n\n.product-brand{\n    margin-top:0!important;\n    margin-bottom:0!important;\n    font-family: loveloblack;\n    font-size: 30px;\n    line-height: 25px;\n}\n\nbutton a{\n    color:#fff;\n}\n\n.no-pad{\n    padding:15px!important;\n}\n\n.treats-list ul{\n    margin-top: 0!important;\n}\n\n.treats-list li{\n    display:inline-block;\n    font-family: loveloblack;\n    padding-right:12px;\n    font-size: 13px;\n}\n\n/************************/\n\n@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url('https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');\n}\n\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: 'liga';\n    -webkit-font-smoothing: antialiased;\n}\n\n/*****On Hover*******/\n\n/* .products-item:hover{\n\n}\n\n.received-candies, ul, .prod-available{\n    opacity:0;\n}\n.received-candies:hover, \nul:hover, \n.prod-available:hover{\n    opacity:1;\n} */\n\n.products-item{\n    box-shadow: none;\n}\n\n.products-item:hover{\n    -webkit-animation: boxShadow .5s;\n    animation:  boxShadow .51s;\n    box-shadow: 0 5px 15px rgba(0,0,0,0.15); \n}\n\n.products-item:hover .upper-cont{\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n\n.products-item:hover .treats-list{\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n\n.testClass{\n    color:#fff;\n}\n\n.treats-list{\n    opacity:0;\n}\n\n/*ANIMATION KEYFRAMES*/\n\n@-webkit-keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n\n@-webkit-keyframes boxShadow {    \n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}\n\n@keyframes boxShadow {\n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}  "

/***/ }),

/***/ "./src/app/components/treats/treats.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/treats/treats.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <nav>\n        <div class=\"nav-wrapper treats\">\n            <div class=\"col s6\">\n                <a [routerLink]=\"['/']\" class=\"breadcrumb\">HWS</a>\n                <a href=\"#prods\" class=\"breadcrumb\">products</a>\n                <a href=\"\" class=\"breadcrumb\">treats</a>\n            </div>\n            <div class=\"col s6\"></div>\n        </div>\n    </nav>\n</div>\n<!-- Monitors -->\n<div class=\"row monitors\">\n    <div class=\"col s12\">\n        <p class=\"treats-item-title\">Monitors</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n            <div class=\"row no-btm\">\n                <div class=\"treat-img\">\n                    <div class=\"left\">\n                        <a href=\"#treatsEx\"><img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"></a>\n                    </div>\n                </div>\n                <div class=\"upper-cont\">\n                    <div>\n                        <div class=\"right-align right\">\n                            <div class=\"valign-wrapper right-align\">\n                                <div class=\"align-price\">\n                                    <p class= \"crossed-out-price\" id=\"crossed-out-price\">Php 15,160.00</p>\n                                    <br/>\n                                    <p class=\"no-margin now\">Now only</p>\n                                </div>\n                                <div>\n                                    <p class=\"recent-price\" id=\"recent-price\">Php 12,800.00</p>\n                                </div>\n                                \n                            </div>\n                            <div class=\"valign-wrapper right received-candies\">\n                                <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 60 </span> </p>\n                                <a href=\"#candies\"><img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\"></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"middle-cont\">\n                    <img class=\"responsive-img\" src=\"../assets/img/LG-32MP58HQ-P-1.png\" >\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"bottom-cont\">\n                    <div class=\"col s9 left-align no-pad\">\n                        <p class=\"product-brand\" id=\"product-brand\">LG <span style=\"font-size: 25px; \">32 inches</span></p>\n                        <div class=\"treats-list\">\n                            <ul>\n                                <li #mon1>32MP58HQ-P </li>\n                                <li>1080P</li>\n                                <li>32''</li>\n                                <li>Full HD IPS</li>\n\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col s3 center-align no-pad\">\n                        <button (click)=\"openOrderFormDialog({itemName:mon1.innerText})\" class=\"btn waves-effect waves-light\">\n                            Buy\n                        </button>\n                        <p class=\"prod-available\">Available: <span>YES</span></p>\n                    </div>\n                </div>\n            </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <a href=\"#treatsEx\"><img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"></a>\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div class=\"right-align right\">\n                                <div class=\"valign-wrapper right-align\">\n                                    <div class=\"align-price\">\n                                        <p class= \"crossed-out-price\" id=\"crossed-out-price\">Php 15,160.00</p>\n                                        <br/>\n                                        <p class=\"no-margin now\">Now only</p>\n                                    </div>\n                                    <div>\n                                        <p class=\"recent-price\" id=\"recent-price\">Php 12,800.00</p>\n                                    </div>\n                                    \n                                </div>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 60 </span> </p>\n                                    <a href=\"#candies\"><img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\"></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/LG-32MA70HY-P-1.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">LG <span style=\"font-size: 25px; \">32 inches</span></p>\n                            <div class=\"treats-list\">\n                                <ul>\n                                    <li #mon2>32MA70HY-P </li>\n                                    <li>1080P</li>\n                                    <li>32''</li>\n                                    <li>Full HD IPS</li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button  (click)=\"openOrderFormDialog({itemName:mon2.innerText})\" class=\"btn waves-effect waves-light\">\n                                Buy Now\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--Monitor Ends-->\n\n<!-- Keyboards -->\n<div class=\"row keyboards\">\n    <div class=\"col s12\">\n        <p class=\"treats-item-title\">Keyboards</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col s3\"></div>\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n        <div class=\"container center products-item-content\" >\n            <div class=\"row no-btm\">\n            <div class=\"treat-img\">\n                <div class=\"left\">\n                    <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                </div>\n            </div>\n            <div class=\"upper-cont\">\n                <!-- <div>\n                    <div class=\"right-align\">\n                        <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 7000.00  </span>Php 5,950</p>\n                        <div class=\"valign-wrapper right received-candies\">\n                            <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 28 </span> </p>\n                            <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                        </div>\n                    </div>\n                </div> -->\n\n                <div>\n                    <div class=\"right-align right\">\n                        <div class=\"valign-wrapper right-align\">\n                            <div class=\"align-price\">\n                                <p class= \"crossed-out-price\" id=\"crossed-out-price\">Php 7,000.00</p>\n                                <br/>\n                                <p class=\"no-margin now\">Now only</p>\n                            </div>\n                            <div>\n                                <p class=\"recent-price\" id=\"recent-price\">Php 5,950.00</p>\n                            </div>\n                            \n                        </div>\n                        <div class=\"valign-wrapper right received-candies\">\n                            <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 28 </span> </p>\n                            <a href=\"#candies\"><img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\"></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"middle-cont\">\n            <img class=\"responsive-img\" src=\"../assets/img/krbn-steampunk-keyboard.png\" >\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"bottom-cont\">\n            <div class=\"col s9 left-align no-pad\">\n                <p #key1 class=\"product-brand\" id=\"product-brand\">KrBN </p>\n                <div class=\"treats-list\">\n                    <ul>\n                        <li>Keyboard</li>\n                        <li>Oarmy Blue Switch</li>\n                        <li>Steampunk Look</li>\n                        <li>LED Backlit </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col s3 center-align no-pad\">\n                <button  (click)=\"openOrderFormDialog({itemName:key1.innerText})\"class=\"btn waves-effect waves-light\">\n                    Buy Now\n                </button>\n                <p class=\"prod-available\">Available: <span>YES</span></p>\n            </div>\n            </div>\n            </div>\n        </div>\n        </div>\n    </div>\n    <div class=\"col s3\"></div>\n</div>\n<!--Keyboards Ends-->\n\n<!--SSDs-->\n<div class=\"row ssd\">\n    <div class=\"col s12\">\n        <p class=\"treats-item-title\">SSD</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <!-- <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 16,150.00 </span>Php 13,700</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 54 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div> -->\n                        <div>\n                            <div class=\"right-align right\">\n                                <div class=\"valign-wrapper right-align\">\n                                    <div class=\"align-price\">\n                                        <p class= \"crossed-out-price\" id=\"crossed-out-price\">Php 16,150.00</p>\n                                        <br/>\n                                        <p class=\"no-margin now\">Now only</p>\n                                    </div>\n                                    <div>\n                                        <p class=\"recent-price\" id=\"recent-price\">Php 13,700.00</p>\n                                    </div>\n                                    \n                                </div>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 54 </span> </p>\n                                    <a href=\"#candies\"><img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\"></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/crucial-mx500.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Crucial 1TB SSD</p>\n                            <div class=\"treats-list\">\n                                <ul>\n                                    <li #ssd1>MX500 1tb</li>\n                                    <li>3D NAND SATA</li>\n                                    <li>2.5-inch internal SSD</li>\n                                    \n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button  (click)=\"openOrderFormDialog({itemName:ssd1.innerText})\"class=\"btn waves-effect waves-light\">\n                                Buy Now\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <!-- <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 8,400.00 </span>Php 7,100</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 28 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div -->\n                        <div>\n                            <div class=\"right-align right\">\n                                <div class=\"valign-wrapper right-align\">\n                                    <div class=\"align-price\">\n                                        <p class= \"crossed-out-price\" id=\"crossed-out-price\">Php 8,400.00</p>\n                                        <br/>\n                                        <p class=\"no-margin now\">Now only</p>\n                                    </div>\n                                    <div>\n                                        <p class=\"recent-price\" id=\"recent-price\">Php 7,100.00</p>\n                                    </div>\n                                    \n                                </div>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 28 </span> </p>\n                                    <a href=\"#candies\"><img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\"></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/crucial-mx500.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Crucial 500GB SSD</p>\n                            <div class=\"treats-list\">\n                                <ul>\n                                    <li #ssd2>MX500 500gb</li>\n                                    <li>3D NAND Sata</li>\n                                    <li>2.5-inch internal SSD</li>\n                                    \n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button  (click)=\"openOrderFormDialog({itemName:ssd2.innerText})\"class=\"btn waves-effect waves-light\">\n                                Buy Now\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <!-- <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 18,800.00 </span>Php 15,900</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 63 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div> -->\n\n                            <div>\n                                <div class=\"right-align right\">\n                                    <div class=\"valign-wrapper right-align\">\n                                        <div class=\"align-price\">\n                                            <p class= \"crossed-out-price\" id=\"crossed-out-price\">Php 18,800.00</p>\n                                            <br/>\n                                            <p class=\"no-margin now\">Now only</p>\n                                        </div>\n                                        <div>\n                                            <p class=\"recent-price\" id=\"recent-price\">Php 15,900.00</p>\n                                        </div>\n                                        \n                                    </div>\n                                    <div class=\"valign-wrapper right received-candies\">\n                                        <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 63 </span> </p>\n                                        <a href=\"#candies\"><img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\"></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/samsung-860-evo.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Samsung 1TB SSD</p>\n                            <div class=\"treats-list\">\n                                <ul>\n                                    <li #ssd3>860 EVO 1TB</li>\n                                    <li>2.5 inch sata ssd</li>\n                                    \n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button  (click)=\"openOrderFormDialog({itemName:ssd3.innerText})\"class=\"btn waves-effect waves-light\">\n                                Buy Now\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <!-- <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 9,100.00 </span>Php 7,700</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 30 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div> -->\n                            <div>\n                                <div class=\"right-align right\">\n                                    <div class=\"valign-wrapper right-align\">\n                                        <div class=\"align-price\">\n                                            <p class= \"crossed-out-price\" id=\"crossed-out-price\">Php 9,100.00</p>\n                                            <br/>\n                                            <p class=\"no-margin now\">Now only</p>\n                                        </div>\n                                        <div>\n                                            <p class=\"recent-price\" id=\"recent-price\">Php 7,700.00</p>\n                                        </div>\n                                        \n                                    </div>\n                                    <div class=\"valign-wrapper right received-candies\">\n                                        <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 30 </span> </p>\n                                        <a href=\"#candies\"><img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\"></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/samsung-860-evo.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Samsung 500GB SSD</p>\n                            <div class=\"treats-list\">\n                                <ul>\n                                    <li #ssd4>860 EVO 500gb</li>\n                                    <li>2.5 inch sata ssd</li>\n                                    \n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button  (click)=\"openOrderFormDialog({itemName:ssd4.innerText})\"class=\"btn waves-effect waves-light\">\n                                Buy Now\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <a href=\"#treatsEx\"><img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"></a>\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <div>\n                            <div>\n                                <div class=\"right-align right\">\n                                    <div class=\"valign-wrapper right-align\">\n                                        <div class=\"align-price\">\n                                            <p class= \"crossed-out-price\" id=\"crossed-out-price\">Php 7,800.00</p>\n                                            <br/>\n                                            <p class=\"no-margin now\">Now only</p>\n                                        </div>\n                                        <div>\n                                            <p class=\"recent-price\" id=\"recent-price\">Php 6,600.00</p>\n                                        </div>\n                                        \n                                    </div>\n                                    <div class=\"valign-wrapper right received-candies\">\n                                        <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 26 </span> </p>\n                                        <a href=\"#candies\"><img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\"></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/samsung-860-evo.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Samsung 500GB SSD</p>\n                            <div class=\"treats-list\">\n                                <ul>\n                                    <li #ssd5>860 EVO 500gb(t)</li>\n                                    <li>2.5 inch sata ssd</li>\n                                    \n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button  (click)=\"openOrderFormDialog({itemName:ssd5.innerText})\"class=\"btn waves-effect waves-light\">\n                                Buy Now\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <!-- <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 16,150.00 </span>Php 13,700</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 54 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div> -->\n                        <div>\n                            <div class=\"right-align right\">\n                                <div class=\"valign-wrapper right-align\">\n                                    <div class=\"align-price\">\n                                        <p class= \"crossed-out-price\" id=\"crossed-out-price\">Php 16,150.00</p>\n                                        <br/>\n                                        <p class=\"no-margin now\">Now only</p>\n                                    </div>\n                                    <div>\n                                        <p class=\"recent-price\" id=\"recent-price\">Php 13,700.00</p>\n                                    </div>\n                                    \n                                </div>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 54 </span> </p>\n                                    <a href=\"#candies\"><img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\"></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/sandisk-ultra.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">Sandisk 1tb SSD</p>\n                            <div class=\"treats-list\">\n                                <ul>\n                                    <li #ssd6>Ultra 1tb</li>                   \n                                    <li>3d nand sata iii ssd</li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button  (click)=\"openOrderFormDialog({itemName:ssd6.innerText})\"class=\"btn waves-effect waves-light\">\n                                Buy Now\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--SSD Ends-->\n\n<!--ETC-->\n<div class=\"row etc\">\n  <div class=\"col s12\">\n    <p class=\"treats-item-title\">Coolers</p>\n  </div>\n</div>\n<div class=\"row\">\n    <div class=\"col s3\"></div>\n    <div class=\"col s6 products\">\n        <div id=\"product-1\" class=\"products-item\">\n            <div class=\"container center products-item-content\" >\n                <div class=\"row no-btm\">\n                    <div class=\"treat-img\">\n                        <div class=\"left\">\n                            <!-- <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\"> -->\n                        </div>\n                    </div>\n                    <div class=\"upper-cont\">\n                        <!-- <div>\n                            <div class=\"right-align\">\n                                <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> Php 1200.00  </span>Php 1,000</p>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 4 </span> </p>\n                                    <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                                </div>\n                            </div>\n                        </div> -->\n                        <div>\n                            <div class=\"right-align right\">\n                                <div class=\"valign-wrapper right-align\">\n                                    <div class=\"align-price\">\n                                        <p class= \"crossed-out-price\" id=\"crossed-out-price\">Php 1,200.00</p>\n                                        <br/>\n                                        <p class=\"no-margin now\">Now only</p>\n                                    </div>\n                                    <div>\n                                        <p class=\"recent-price\" id=\"recent-price\">Php 1,000.00</p>\n                                    </div>\n                                    \n                                </div>\n                                <div class=\"valign-wrapper right received-candies\">\n                                    <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 4 </span> </p>\n                                    <a href=\"#candies\"><img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\"></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"middle-cont\">\n                        <img class=\"responsive-img\" src=\"../assets/img/cryorig-cooler.png\" >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"bottom-cont\">\n                        <div class=\"col s9 left-align no-pad\">\n                            <p class=\"product-brand\" id=\"product-brand\">CryOrig </p>\n                            <div class=\"treats-list\">\n                                <ul>\n                                    <li #coo1>Cooler</li>\n                                    <li>m9i mini tower</li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col s3 center-align no-pad\">\n                            <button  (click)=\"openOrderFormDialog({itemName:coo1.innerText})\"class=\"btn waves-effect waves-light\">\n                                Buy Now\n                            </button>\n                            <p class=\"prod-available\">Available: <span>YES</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col s3\"></div>\n</div>\n<!--ETC ends-->"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order-form/order-form.component */ "./src/app/components/order-form/order-form.component.ts");
/* harmony import */ var _services_mailorder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mailorder.service */ "./src/app/services/mailorder.service.ts");
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
    function TreatsComponent(dialog, mailorderService, snackBar) {
        this.dialog = dialog;
        this.mailorderService = mailorderService;
        this.snackBar = snackBar;
    }
    TreatsComponent.prototype.openOrderFormDialog = function (items) {
        var _this = this;
        var config = {
            width: '',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            },
            data: {
                itemName: items.itemName,
                itemPrice: items.itemPrice
            }
        };
        this.orderFormDialogRef = this.dialog.open(_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__["OrderFormComponent"], config);
        this.orderFormDialogRef
            .afterClosed()
            .pipe(function (order) { return order; })
            .subscribe(function (order) {
            _this.mailorderService.mailReceivedOrder(order);
            _this.snackBar.open("Order Received!", "DONE", {
                duration: 10000,
            });
        });
    };
    TreatsComponent.prototype.ngOnInit = function () {
    };
    TreatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-treats',
            template: __webpack_require__(/*! ./treats.component.html */ "./src/app/components/treats/treats.component.html"),
            styles: [__webpack_require__(/*! ./treats.component.css */ "./src/app/components/treats/treats.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services_mailorder_service__WEBPACK_IMPORTED_MODULE_3__["MailorderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], TreatsComponent);
    return TreatsComponent;
}());



/***/ }),

/***/ "./src/app/services/mailorder.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/mailorder.service.ts ***!
  \***********************************************/
/*! exports provided: MailorderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailorderService", function() { return MailorderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailorderService = /** @class */ (function () {
    function MailorderService(http) {
        this.http = http;
    }
    MailorderService.prototype.mailReceivedOrder = function (order) {
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        header.append('Content-Type', 'application/json'); /*
        header.append('Authorization','Bearer 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'); */
        return this.http.post('http://www.hwsugar.ph/mail/sendorder', order, { headers: header })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }))
            .subscribe();
    };
    MailorderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], MailorderService);
    return MailorderService;
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

module.exports = __webpack_require__(/*! /home/livingroom/Documents/projects/hwsangular/ng-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map