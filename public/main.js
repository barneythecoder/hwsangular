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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: 'keyboards', component: _components_keyboards_keyboards_component__WEBPACK_IMPORTED_MODULE_7__["KeyboardsComponent"] },
    { path: 'monitors', component: _components_monitors_monitors_component__WEBPACK_IMPORTED_MODULE_8__["MonitorsComponent"] }
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
                _components_monitors_monitors_component__WEBPACK_IMPORTED_MODULE_8__["MonitorsComponent"]
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

/***/ "./src/app/components/keyboards/keyboards.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/keyboards/keyboards.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/keyboards/keyboards.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/keyboards/keyboards.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  keyboards works!\n</p>\n"

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

module.exports = "body{\n    min-width: 1366px;\n    }\nnav{\n    position: fixed!important;\n    z-index:1;\n}\n.blktext{\n    color:#000;\n}\n.whttext{\n    color: #fff;\n}\n.hide{\n    background-color: #1582D0;\n}\n/******************************************\n    HEADER \n*******************************************/\nnav.index_nav{ \n    height: 135px!important;\n    padding: 20px 0;\n    min-width: 1366px;\n    position: fixed;\n    z-index:1000;\n}\n.nav-list a{\n    color:#000!important;\n    font-family: loveloblack;\n}\nimg#HWS_logo_candy{\n    width: 100px;\n}\n.line{\n    background-color: #000;\n    height: 1px;\n    margin-top: 30px;\n}\n#unscrolled-header{\n    display: block;\n}\n#logo{\n    margin-left:20px;\n}\n.vl{\n    border-left: 1px solid #DBDBDB;\n    height: 50px;\n    margin: 0 20px;\n}\n.social-media img{\n    margin: 0 10px;\n}\n.for-shopping a{\n    margin: 0 20px;\n}\n/******************************************/\ndiv.index-cont-one{\n}\ndiv.index-cont-two{\n    background-color:#fff;\n}\ndiv.index-cont-three{\n    background-color:#1582D0;\n}\ndiv.index-cont-three p{\nmargin-top:0!important;\n}\n.index-right{\n    float: right;\n    top:50%;\n    right: 16px;\n}\n.index{\n    background-color: #ECECEC;  \n}\n.product{\n    background-color: #fff;\n}\n.link-earn-candy{\n    color: #5A99E3;\n    font-family: loveloline;\n    font-size:45px;\n    position: absolute;\n    bottom:0;\n    left:0;\n    right:0;\n}\n.img-promo{\n    position: absolute;\n    bottom:0;\n    left:0;\n    right:0;\n}\n/******************************************\n    PRODUCT PANEL\n*******************************************/\n.product-icon-hover{\n    position: absolute;\n    border-style: solid;\n    border-width: 5px;\n    border-color: red;\n    height: 100vh;\n    top: 0;    \n    left: 0;\n    width: 25%;\n    z-index: -1;\n}\n.product-title{\n    font-family: loveloblack;\n    font-size: 20px;\n    color:#737373;\n    margin: 20PX 0 10px 0px;\n}\n.product-list{\n    font-family: loveloblack;\n    font-size: 15px;\n}\n.product-list li{\n    margin: 5px 0 5px 0px;\n    line-height: 30px;\n}\n.product-list li a{\n    color:#737373;\n}\n/***********************************************************/\n/******************************************\n    MORE THAN EYE CANDY PANEL\n*******************************************/\n.candy-sec{\n    background-color: #1582D0; \n    height: 100vh;\n}\n.candy-sec ul{\n    margin-left: 45px;\n}\n.candy-sec ul li{\n    margin: 10px 0 10px 0;\n    font-family: robotomedium;\n    font-size: 20px;\n    line-height: 30px;\n}\n.candy-title{\n    width: 95%;\n    font-size: 85px;\n    position: relative;\n    font-family: loveloblack;\n    line-height: normal;\n    margin: 0;\n}\n.candy-text{\n    width: 75%;\n    font-family: robotolight;\n    line-height: 28px;\n    font-size: 20px;\n}\n.candy-img{\n    min-width: 1366px;\n}\n.btn-flat{\n    border-color: #fff;\n    border-style: solid;\n    border-width: 1px;\n    color:#fff!important;\n    width: 75%;\n    border-radius: 25px;\n    font-family: loveloblack;\n    font-size:20px;\n}\n/**************************************************************/\n/**************************************************************/\n#mon-hover, #key-hover, \n#graph-card-hover, \n#ssd-hover, #mobo-hover,\n#mice-hover, #etc-hover,\n#psu-hover, #memory-hover,\n#cpu-hover, #candy-hover {\n    opacity: 0;\n}\n#mon .mon_color,\n#key .key_color,\n#psu .psu_color,\n#ssd .ssd_color,\n#cpu .cpu_color,\n#memory .mem_color,\n#mobo .mobo_color,\n#graph-card .gcard_color,\n#etc .etc_color, \n#candy .candy_color{\n    display: none;\n    \n}\n#mon:hover .mon_blk,\n#key:hover .key_blk,\n#psu:hover .psu_blk,\n#ssd:hover .ssd_blk,\n#cpu:hover .cpu_blk,\n#memory:hover .mem_blk,\n#mobo:hover .mobo_blk,\n#graph-card:hover .gcard_blk,\n#etc:hover .etc_blk,\n#candy:hover .candy_blk{\n    display: none;\n    \n}\n#mon:hover .mon_color,\n#key:hover .key_color,\n#psu:hover .psu_color,\n#ssd:hover .ssd_color,\n#cpu:hover .cpu_color,\n#memory:hover .mem_color,\n#mobo:hover .mobo_color,\n#graph-card:hover .gcard_color,\n#etc:hover .etc_color,\n#candy:hover .candy_color{\n    display: inline;\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n#mon:hover #mon-hover, \n#key:hover #key-hover,\n#graph-card:hover #graph-card-hover,\n#ssd:hover #ssd-hover,\n#mobo:hover #mobo-hover,\n#mice:hover #mice-hover,\n#psu:hover #psu-hover,\n#etc:hover #etc-hover,\n#memory:hover #memory-hover,\n#cpu:hover #cpu-hover,\n#candy:hover #candy-hover{\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n#mon:hover,\n#key:hover,\n#graph-card:hover,\n#ssd:hover,\n#mice:hover,\n#mobo:hover,\n#psu:hover,\n#etc:hover,\n#memory:hover,\n#cpu:hover,\n#candy:hover{\n    box-shadow: 0 5px 15px rgba(0,0,0,0.15);\n    -webkit-animation: boxShadow .5s;\n    animation:  boxShadow .51s;\n}\n/*ANIMATION KEYFRAMES*/\n@-webkit-keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n@-webkit-keyframes boxShadow {    \n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}\n@keyframes boxShadow {\n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}  \n"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mnFullpage [mnFullpageOnLeave]=\"onLeave\" [mnFullpageNavigation]=\"true\" [mnFullpageAnchors]=\"['landing','prods','candies']\">\n\n    <nav [class.hide]=\"isScrolled\" class=\"nav-center white index_nav\" id=\"unscrolled-header\" >\n        <div class=\"row blktext center\" >\n            <div class=\"col s1 \">\n                    <div class=\"col s2 offset-s1\">\n                        <a href=\"https://www.facebook.com/hwsugar/\"><img src=\"../assets/img/icon_facebook.png\"></a>\n                    </div>\n                    <div class=\"col s4 offset-s1\">                                                     \n                        <a href=\"https://www.instagram.com/hardwaresugar/\"><img src=\"../assets/img/icon_instagram.png\"></a>\n                    </div>\n            </div>\n            <div class=\"col s4\">\n                <div class=\"row blue\" style=\"margin-bottom:0!important;\">\n                    <div class=\"line\"></div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col s4 nav-list\"><a href=\"#prods\">Products</a></div>\n                    <div class=\"col s4 nav-list\"><a href=\"#candies\">Candy</a></div>\n                    <div class=\"col s4 nav-list\"><a href=\"#\">HWS Treats</a></div>\n                </div>\n            </div>\n            <div class=\"col s2 center\">\n                <img id=\"HWS_logo_candy\" class=\"responsive-img\" src=\"../assets/img/HWS_Logo_Monitor_Candy.png\"> \n            </div>\n            <div class=\"col s3\">\n                <div class=\"row\" style=\"margin-bottom:0!important;\">\n                    <div class=\"line\"></div>\n                </div>                \n                <div class=\"row\">\n                    <div class=\"col s4 nav-list\"><a href=\"https://docs.google.com/spreadsheets/d/1ewWrIVHcWtQ9PxkM5UHblbWmgT8fn6p7_B-L9hndq7I/edit#gid=0\">All</a></div>\n                    <div class=\"col s4 nav-list\"><a href=\"#\">Why Us?</a></div>\n                    <div class=\"col s4 nav-list\"><a href=\"#\">Hit us Up</a></div>\n                </div>\n            </div>\n            <div class=\"col s2\">\n                    <div class=\"col s4\">\n                        <a href=\"#\"><img src=\"../assets/img/icon_user.png\"></a>\n                    </div>\n                    <div class=\"col s4\">\n                        <a href=\"#\"><img src=\"../assets/img/icon_question_mark.png\"></a>\n                    </div>\n                    <div class=\"col s4\">\n                        <a href=\"#\"><img src=\"../assets/img/icon_cart.png\"></a>\n                    </div>\n            </div>\n        </div>\n      </nav>\n\n  <div class=\"section welcome-section fp-section fp-table index\" data-anchor=\"landing\">\n    <div class = \"fp-tableCell\">\n      <div class=\"row\">\n          <img class=\"responsive-img img-promo\" src=\"../assets/img/img_index_promo.png\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"section welcome-section fp-section fp-table product\" data-anchor=\"prods\">\n      <div class = \"fp-tableCell\">          \n              <div class=\"row center valign-wrapper\" >\n                  <div class=\"col s1 center-align\"></div>\n\n                  <div class=\"col s2 center-align\" id=\"mon\">\n                      <a [routerLink]=\"['/monitors']\">\n\n                          <img class=\"responsive-img mon_color\"  src=\"../assets/img/icon_monitor.png\">\n                          <img class=\"responsive-img mon_blk\" src=\"../assets/img/icon_monitor_blk.png\">\n                      </a>\n                      <div id=\"mon-hover\">\n                          <p class=\"product-title\">Monitors</p>\n                      </div>\n                  </div>\n\n                  <div class=\"col s2 center-align\" id=\"key\" >\n                      <a href=\"#\">\n                          <img class=\"responsive-img key_blk\" src=\"../assets/img/icon_keyboard_blk.png\">\n                          <img class=\"responsive-img key_color\" src=\"../assets/img/icon_keyboard.png\">\n                      </a>\n                      <div id =\"key-hover\">\n                          <p class=\"product-title\">Keyboards</p>\n                      </div>\n                  </div>\n                  <div class=\"col s2 center-align\" id=\"candy\">\n                      <a href=\"#\">\n                          <img class=\"responsive-img candy_blk\" src=\"../assets/img/icon_logo_blk.png\">\n                          <img class=\"responsive-img candy_color\" src=\"../assets/img/icon_logo.png\">\n                      </a>\n                      <div id =\"candy-hover\">\n                          <p class=\"product-title\">Treats</p>\n                      </div>\n                  </div>\n\n                  <div class=\"col s2 center-align\" id=\"psu\">\n                      <a href=\"#\">\n                          <img class=\"responsive-img psu_blk\" src=\"../assets/img/icon_psu_blk.png\">\n                          <img class=\"responsive-img psu_color\" src=\"../assets/img/CS_psu.png\">\n                      </a>\n                      <div id=\"psu-hover\">\n                          <p class=\"product-title\">Power Supply Unit</p>\n                      </div>\n                  </div>\n\n                  <div class=\"col s2 center-align\" id=\"ssd\">\n                      <a href=\"#\">\n                          <img class=\"responsive-img ssd_blk\" src=\"../assets/img/icon_ssd_blk.png\">\n                          <img class=\"responsive-img ssd_color\" src=\"../assets/img/icon_ssd.png\">\n                      </a>\n                      <div id =\"ssd-hover\">\n                          <p class=\"product-title\"> Solid-State Drives</p>\n                      </div>\n                      <div class=\"product-icon-hover\"></div>\n                  </div>\n                  <div class=\"col s1 center-align\"></div>\n                  \n              </div>\n\n              <div class=\"row center valign-wrapper\">\n                  <div class=\"col s1 center-align\"></div>\n                  <div class=\"col s2 center-align\" id=\"cpu\">\n                      <a href=\"#\">\n                          <img class=\"responsive-img cpu_blk\" src=\"../assets/img/icon_cpu_blk.png\">\n                          <img class=\"responsive-img cpu_color\" src=\"../assets/img/CS_cpu.png\">\n                      </a>\n                      <div id=\"cpu-hover\">\n                          <p class=\"product-title\">Central Processing Unit</p>\n                      </div>\n                      <div class=\"product-icon-hover\"></div>\n                  </div>\n                  <div class=\"col s2 center-align\" id=\"memory\">\n                      <a href=\"#\">\n                          <img class=\"responsive-img mem_blk\" src=\"../assets/img/icon_memory_blk.png\">\n                          <img class=\"responsive-img mem_color\" src=\"../assets/img/CS_memory.png\">\n                      </a>\n                      <div id=\"memory-hover\">\n                          <p class=\"product-title\">Memory</p>\n                      </div>\n                      <div class=\"product-icon-hover\"></div>\n                  </div>\n\n                  <div class=\"col s2 center-align\" id=\"mobo\" >\n                      <a href=\"#\">\n                          <img class=\"responsive-img mobo_blk\" src=\"../assets/img/icon_motherboard_blk.png\">\n                          <img class=\"responsive-img mobo_color\" src=\"../assets/img/CS_motherboard.png\">\n                      </a>\n                      <div id =\"mobo-hover\">\n                          <p class=\"product-title\">Motherboards</p>\n                      </div>\n                      <div class=\"product-icon-hover\"></div>\n                  </div>\n\n                  <div class=\"col s2 center-align\" id=\"graph-card\">\n                      <a href=\"#\">\n                          <img class=\"responsive-img gcard_blk\" src=\"../assets/img/icon_graphic_card_blk.png\">\n                          <img class=\"responsive-img gcard_color\" src=\"../assets/img/CS_graphic_card.png\">\n                      </a>\n                      <div id =\"graph-card-hover\">\n                          <p class=\"product-title\">Graphic Cards</p>\n                      </div>\n                      <div class=\"product-icon-hover\"></div>\n                  </div>\n                  <div class=\"col s2 center-align\" id=\"etc\">\n                      <a href=\"#\">\n                          <img class=\"responsive-img etc_blk\" src=\"../assets/img/icon_etc_blk.png\">\n                          <img class=\"responsive-img etc_color\" src=\"../assets/img/icon_etc.png\">\n                      </a>\n                      <div id=\"etc-hover\">\n                          <p class=\"product-title\">ETC</p>\n                      </div>\n                      <div class=\"product-icon-hover\"></div>\n                  </div>\n                  <div class=\"col s1 center-align\"></div>\n                  <a href=\"#candies\"><p class=\"link-earn-candy\">earn candies when you shop</p></a>\n              </div>\n\n          \n      </div>\n  </div>\n\n  <div class=\"section welcome-section fp-section fp-table candy-sec\" data-anchor=\"candies\">\n      <div class = \"fp-tableCell\">\n          <div class=\"row\">\n              <div class=\"valign-wrapper\">\n                  <div class=\"col s5 right-align\" style=\"padding-right:100px;\">\n                      <img class=\"responsive-img\" src=\"../assets/img/HWS_Index_CANDY_Panel.png\">\n                  </div>\n                  <div class=\"col s7\">\n                      <p class=\"candy-title whttext\">More than just <br>eyecandy</p>\n                      <p class=\"candy-text whttext\">\n                          When you shop here in Hardware Sugar, you get candies! For every 250Php you spend in the shop, you are rewarded with one candy. You can use your candies to:  \n                      </p>\n                      <ul class=\"whttext\">\n                          <li>1. Apply as a discount for your next purchase</li>\n                          <li>2. Trade in to buy steam games</li>\n                          <li>3. Use as raffle entries to win exciting prizes</li>\n                      </ul>\n                      <a href=\"#prods\"class=\"waves-effect waves-teal btn-flat center\">shop</a>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n\n\n\n\n</div>\n\n"

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

module.exports = "\n/******** GLOBAL ***********/\n\nnav{\n    box-shadow: none!important;\n}\n\n.monitors{\n    background-color: #1582D0;\n}\n\nnav a{\n    font-weight: bold;\n    font-family: loveloblack;\n}\n\n.btn{\n    width:100%;\n}\n\n.products-item-content{\n    position: relative;\n}\n\n.treat-img, .CS-img {\n    position: absolute;\n    top:25px;\n    left: -11px;\n}\n\n.crossed-out-price{\n    text-decoration: line-through;\n    color: #646464;\n    font-family: loveloblack;\n    font-size: 16px;\n}\n\n.recent-price{\n    color:#000;\n    font-family: loveloblack;\n    font-size: 35px;\n    margin-bottom: 0!important;\n}\n\n.total-candies-rec,.num-of-candies{\n    font-family: loveloblack;\n    font-size:15px;\n}\n\n.received-candies{\n    margin-top:0!important;\n}\n\n.candy-img{\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.product-brand{\n    margin-top:0!important;\n    margin-bottom:0!important;\n    font-family: loveloblack;\n    font-size: 30px;\n    line-height: 25px;\n}\n\nbutton a{\n    color:#fff;\n}\n\n.no-pad{\n    padding:15px!important;\n}\n\n.monitors-list ul{\n    margin-top: 0!important;\n}\n\n.monitors-list li{\n    display:inline-block;\n    font-family: loveloblack;\n    padding-right:12px;\n    font-size: 13px;\n}\n\n.prod-available{\n    font-family: robotomedium;\n    font-size: 9.5px;\n    margin:0 auto;\n    line-height: 20px;\n}\n\n.upper-cont{\n    padding-top:10px;\n}\n\n.no-btm{\n    margin-bottom:0!important;\n}\n\n.valign-wrapper{\n    margin-top: -13px !important;\n}\n\n/******* MONITORS *******/\n\n/******* ON HOVER *******/\n\n.products-item{\n    box-shadow: none;\n}\n\n.products-item:hover{\n    -webkit-animation: boxShadow .5s;\n    animation:  boxShadow .51s;\n    box-shadow: 0 5px 15px rgba(0,0,0,0.15); \n}\n\n.products-item:hover .upper-cont{\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n\n.products-item:hover .bottom-cont{\n    opacity: 1;\n    -webkit-animation: fadeIn .5s;\n    animation: fadeIn .5s;\n}\n\n.upper-cont, .bottom-cont{\n    opacity:0;\n}\n\n/*ANIMATION KEYFRAMES*/\n\n@-webkit-keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n\n@-webkit-keyframes boxShadow {    \n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}\n\n@keyframes boxShadow {\n    0% { box-shadow: none }\n    100% { box-shadow: 0 5px 15px rgba(0,0,0,0.15); }\n}\n\n@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url('https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');\n  }\n\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: 'liga';\n    -webkit-font-smoothing: antialiased;\n  }"

/***/ }),

/***/ "./src/app/components/monitors/monitors.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/monitors/monitors.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <nav>\n      <div class=\"nav-wrapper monitors\">\n          <div class=\"col s6\">\n              <a [routerLink]=\"['/']\" class=\"breadcrumb\">HWS</a>\n              <a href=\"#prods\" class=\"breadcrumb\">products</a>\n              <a href=\"#!\" class=\"breadcrumb\">monitors</a>\n          </div>\n          <div class=\"col s6\"></div>\n          \n      </div>\n  </nav>\n</div>\n\n<div class=\"row grey lighten-5\">\n  <div class=\"col s6 products\">\n      <div id=\"product-1\" class=\"products-item\">\n          <div class=\"container center products-item-content\" >\n              <div class=\"row no-btm\">\n                  <div class=\"treat-img\">\n                      <div class=\"left\">\n                          <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\">\n                      </div>\n                  </div>\n                  <div class=\"upper-cont\">\n                      <div>\n                          <div class=\"right-align\">\n                              <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> </span>P15,200</p>\n                              <div class=\"valign-wrapper right received-candies\">\n                                  <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 60 </span> </p>\n                                  <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"middle-cont\">\n                      <img class=\"responsive-img\" src=\"../assets/img/LG-32MP58HQ-P-1.png\" >\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"bottom-cont\">\n                      <div class=\"col s9 left-align no-pad\">\n                          <p class=\"product-brand\" id=\"product-brand\">LG</p>\n                          <div class=\"monitors-list\">\n                              <ul>\n                                  <li>32MP58HQ-P </li>\n                                  <li>1080P</li>\n                                  <li>32''</li>\n                                  <li>Full HD IPS</li>\n                              </ul>\n                          </div>\n                      </div>\n                      <div class=\"col s3 center-align no-pad\">\n                          <button class=\"btn waves-effect waves-light\">\n                              <a href=\"contact-us-page.html\">Buy Now</a>\n                          </button>\n                          <p class=\"prod-available\">Available: <span>YES</span></p>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col s6 products\">\n      <div id=\"product-1\" class=\"products-item\">\n          <div class=\"container center products-item-content\" >\n              <div class=\"row no-btm\">\n                  <div class=\"treat-img\">\n                      <div class=\"left\">\n                          <img src=\"../assets/img/product-treat-logo.png\" class=\"responsive-img\">\n                      </div>\n                  </div>\n                  <div class=\"upper-cont\">\n                      <div>\n                          <div class=\"right-align\">\n                              <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> </span>P15,200</p>\n                              <div class=\"valign-wrapper right received-candies\">\n                                  <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 60 </span> </p>\n                                  <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"middle-cont\">\n                      <img class=\"responsive-img\" src=\"../assets/img/LG-32MA70HY-P-1.png\" >\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"bottom-cont\">\n                      <div class=\"col s9 left-align no-pad\">\n                          <p class=\"product-brand\" id=\"product-brand\">LG</p>\n                          <div class=\"monitors-list\">\n                              <ul>\n                                  <li>32MA70HY-P </li>\n                                  <li>1080P</li>\n                                  <li>32''</li>\n                                  <li>Full HD IPS</li>\n                              </ul>\n                          </div>\n                      </div>\n                      <div class=\"col s3 center-align no-pad\">\n                          <button class=\"btn waves-effect waves-light\">\n                              <a href=\"contact-us-page.html\">Buy Now</a>\n                          </button>\n                          <p class=\"prod-available\">Available: <span>YES</span></p>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"row grey lighten-5\">\n  <div class=\"col s6 products\">\n      <div id=\"product-1\" class=\"products-item\">\n          <div class=\"container center products-item-content\" >\n              <div class=\"row no-btm\">\n                  <div class=\"CS-img\">\n                      <div class=\"left\">\n                          <img src=\"../assets/img/coming-soon.png\" class=\"responsive-img\">\n                      </div>\n                  </div>\n                  <div class=\"upper-cont\">\n                      <div>\n                          <div class=\"right-align\">\n                              <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> </span>P29,100</p>\n                              <div class=\"valign-wrapper right received-candies\">\n                                  <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 116 </span> </p>\n                                  <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"middle-cont\">\n                      <img class=\"responsive-img\" src=\"../assets/img/XB271HK-bmiprz-1.png\" >\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"bottom-cont\">\n                      <div class=\"col s9 left-align no-pad\">\n                          <p class=\"product-brand\" id=\"product-brand\">ACER</p>\n                          <div class=\"monitors-list\">\n                              <ul>\n                                  <li>XB271HK bmiprz </li>\n                                  <li>3480x2160</li>\n                                  <li>27''</li>\n                                  <li> 4K UHD IPS </li>\n                              </ul>\n                          </div>\n                      </div>\n                      <div class=\"col s3 center-align no-pad\">\n                          <button class=\"btn waves-effect waves-light disabled\">\n                              <a href=\"contact-us-page.html\">Buy Now</a>\n                          </button>\n                          <p class=\"prod-available\">Available: <span>No</span></p>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col s6 products\">\n      <div id=\"product-1\" class=\"products-item\">\n          <div class=\"container center products-item-content\" >\n              <div class=\"row no-btm\">\n                  <div class=\"CS-img\">\n                      <div class=\"left\">\n                          <img src=\"../assets/img/coming-soon.png\" class=\"responsive-img\">\n                      </div>\n                  </div>\n                  <div class=\"upper-cont\">\n                      <div>\n                          <div class=\"right-align\">\n                              <p class=\"recent-price\" id=\"recent-price\"> <span class= \"crossed-out-price\" id=\"crossed-out-price\"> </span>P64,600</p>\n                              <div class=\"valign-wrapper right received-candies\">\n                                  <p class=\"total-candies-rec\">You get <span id=\"num-of-candies\"> 258 </span> </p>\n                                  <img class=\"responsive-img candy-img\" src=\"../assets/img/product-candies.png\">\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"middle-cont\">\n                      <img class=\"responsive-img\" src=\"../assets/img/ASUS-PA329Q-1.png\" >\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"bottom-cont\">\n                      <div class=\"col s9 left-align no-pad\">\n                          <p class=\"product-brand\" id=\"product-brand\">ASUS</p>\n                          <div class=\"monitors-list\">\n                              <ul>\n                                  <li>PA329Q</li>\n                                  <li>3840x2160</li>\n                                  <li>32''</li>\n                                  <li>4K/UHD IPS</li>\n                              </ul>\n                          </div>\n                      </div>\n                      <div class=\"col s3 center-align no-pad\">\n                          <button class=\"btn waves-effect waves-light disabled\">\n                              <a href=\"contact-us-page.html\">Buy Now</a>\n                          </button>\n                          <p class=\"prod-available\">Available: <span>SOON</span></p>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col s6\">\n\n  </div>\n</div>"

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

module.exports = __webpack_require__(/*! /home/rocky/Documents/hws/ng-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map