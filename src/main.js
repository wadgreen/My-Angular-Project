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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--headre-->\r\n<app-header></app-header>\r\n\r\n\r\n<!-- routes will be rendered here -->\r\n <router-outlet></router-outlet>\r\n\r\n\r\n\r\n <!--footer-->\r\n <app-footer></app-footer>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'my-angular-site';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _phrases_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phrases.service */ "./src/app/phrases.service.ts");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translation.service */ "./src/app/translation.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_translate_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/translate/translate.component */ "./src/app/components/translate/translate.component.ts");
/* harmony import */ var _components_tution_tution_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tution/tution.component */ "./src/app/components/tution/tution.component.ts");
/* harmony import */ var _components_phrase_phrase_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/phrase/phrase.component */ "./src/app/components/phrase/phrase.component.ts");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/setting/setting.component */ "./src/app/components/setting/setting.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
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
                _components_translate_translate_component__WEBPACK_IMPORTED_MODULE_8__["TranslateComponent"],
                _components_tution_tution_component__WEBPACK_IMPORTED_MODULE_9__["TutionComponent"],
                _components_phrase_phrase_component__WEBPACK_IMPORTED_MODULE_10__["PhraseComponent"],
                _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_11__["SettingComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: "",
                        redirectTo: 'home',
                        pathMatch: 'full'
                    },
                    {
                        path: 'home',
                        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                    },
                    {
                        path: 'phrase',
                        component: _components_phrase_phrase_component__WEBPACK_IMPORTED_MODULE_10__["PhraseComponent"]
                    },
                    {
                        path: 'tution',
                        component: _components_tution_tution_component__WEBPACK_IMPORTED_MODULE_9__["TutionComponent"]
                    },
                    {
                        path: 'translate',
                        component: _components_translate_translate_component__WEBPACK_IMPORTED_MODULE_8__["TranslateComponent"]
                    },
                    {
                        path: 'setting',
                        component: _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_11__["SettingComponent"]
                    }
                ])
            ],
            providers: [_phrases_service__WEBPACK_IMPORTED_MODULE_4__["PhrasesService"], _translation_service__WEBPACK_IMPORTED_MODULE_5__["TranslationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero\">\r\n  <div class=\"hero-body\">\r\n    <div class=\"container\">\r\n      <figure class=\"image center\">\r\n        <img src=\"assets/img/logo1.jpg\" style=\"max-width:90px;\">\r\n      </figure>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"cection  has-background-gray\">\r\n  <div class=\"container\">\r\n    <div class=\"columns\">\r\n\r\n      <a class=\"column is-narraw\" routerLink=\"/phrase\">\r\n        <div class=\"notification is-info center\" style=\"height: 340px;\">\r\n         <p> PHRASE</p>\r\n        </div>\r\n      </a>\r\n\r\n      <a class=\"column is-narraw\" routerLink=\"/tution\">\r\n        <div class=\"notification is-link center\" style=\"height: 340px;\">\r\n          <p>TUTION</p>\r\n        </div>\r\n      </a>\r\n\r\n      <a class=\"column is-narraw\" routerLink=\"/translate\">\r\n        <div class=\"notification is-primary center\" style=\"height: 340px;\">\r\n          <p>MEMO</p>\r\n        </div>\r\n      </a>\r\n      <a class=\"column is-narraw\" routerLink=\"/setting\">\r\n        <div class=\"notification is-danger center\" style=\"height: 340px;\">\r\n          <p>SETTING</p>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\np {\n  cursor: default;\n  position: absolute;\n  top: 30px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 80px;\n  margin: auto;\n  display: block;\n  -webkit-animation: bounce .3s ease infinite alternate;\n          animation: bounce .3s ease infinite alternate;\n  font-family: 'Orbitron', cursive;\n  font-size: 40px;\n  color: #FFF;\n  text-align: center;\n  line-height: 100px;\n  text-shadow: 0 1px 0 #CCC, 0 2px 0 #CCC, 0 3px 0 #CCC, 0 4px 0 #CCC, 0 5px 0 #CCC, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.801); }\n\n@-webkit-keyframes bounce {\n  100% {\n    top: -30px;\n    text-shadow: 0 1px 0 #CCC, 0 2px 0 #CCC, 0 3px 0 #CCC, 0 4px 0 #CCC, 0 5px 0 #CCC, 0 6px 0 #CCC, 0 7px 0 #CCC, 0 8px 0 #CCC, 0 9px 0 #CCC, 0 30px 30px rgba(0, 0, 0, 0.3); } }\n\n@keyframes bounce {\n  100% {\n    top: -30px;\n    text-shadow: 0 1px 0 #CCC, 0 2px 0 #CCC, 0 3px 0 #CCC, 0 4px 0 #CCC, 0 5px 0 #CCC, 0 6px 0 #CCC, 0 7px 0 #CCC, 0 8px 0 #CCC, 0 9px 0 #CCC, 0 30px 30px rgba(0, 0, 0, 0.3); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xca2FycG9cXE9uZURyaXZlXFxEZXNrdG9wXFxNeSBzaXRlXFxNeS1Bbmd1bGFyLVByb2plY3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxRQUFPO0VBQ1AsU0FBUTtFQUNSLFVBQVM7RUFDVCxhQUFZO0VBQ1osYUFBWTtFQUNaLGVBQWM7RUFDZCxzREFBNkM7VUFBN0MsOENBQTZDO0VBQzdDLGlDQUFnQztFQUNoQyxnQkFBZTtFQUNmLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLHdNQVNnQyxFQUNoQzs7QUFBQTtFQUNBO0lBQ0EsV0FBVTtJQUVWLDBLQVM2QixFQUFBLEVBQUE7O0FBYjdCO0VBQ0E7SUFDQSxXQUFVO0lBRVYsMEtBUzZCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYW5pbWF0aW9uOiBib3VuY2UgLjNzIGVhc2UgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3JiaXRyb24nLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogI0ZGRjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAwICNDQ0MsXHJcbiAgMCAycHggMCAjQ0NDLFxyXG4gIDAgM3B4IDAgI0NDQyxcclxuICAwIDRweCAwICNDQ0MsXHJcbiAgMCA1cHggMCAjQ0NDLFxyXG4gIDAgNnB4IDAgdHJhbnNwYXJlbnQsXHJcbiAgMCA3cHggMCB0cmFuc3BhcmVudCxcclxuICAwIDhweCAwIHRyYW5zcGFyZW50LFxyXG4gIDAgOXB4IDAgdHJhbnNwYXJlbnQsXHJcbiAgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjgwMSk7XHJcbiB9QGtleWZyYW1lcyBib3VuY2Uge1xyXG4gIDEwMCUge1xyXG4gIHRvcDogLTMwcHg7XHJcblxyXG4gIHRleHQtc2hhZG93OiAwIDFweCAwICNDQ0MsXHJcbiAgMCAycHggMCAjQ0NDLFxyXG4gIDAgM3B4IDAgI0NDQyxcclxuICAwIDRweCAwICNDQ0MsXHJcbiAgMCA1cHggMCAjQ0NDLFxyXG4gIDAgNnB4IDAgI0NDQyxcclxuICAwIDdweCAwICNDQ0MsXHJcbiAgMCA4cHggMCAjQ0NDLFxyXG4gIDAgOXB4IDAgI0NDQyxcclxuICAwIDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICB9XHJcbiB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/phrase/phrase.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/phrase/phrase.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"subtitle is-2\">{{title}}</h2>\r\n\r\n<table class=\"table is-fullwidth table is-bordered\">\r\n  <thead>\r\n    <tr  class=\"is-selected\">\r\n      <th>ID</th>\r\n      <th>French</th>\r\n      <th>English</th>\r\n      <th>Arabic</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let p of phrases; let myIndex = index; let evenP = even; let oddP = odd;\"\r\n     [ngClass]=\"{odd: oddP, even: evenP, first: firstP, last: lastP}\">\r\n      <th>{{myIndex + 1}}</th>\r\n      <th>{{p.phrasef}}</th>\r\n      <th>{{p.phrasee}}</th>\r\n      <td>{{p.phrasea}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/phrase/phrase.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/phrase/phrase.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  border-collapse: collapse; }\n\nhover table thead tr th {\n  padding: 7px;\n  border: #4e95f4 1px solid; }\n\n/* Define the default color for all the table rows */\n\nhoverTable thead tr {\n  background: #b8d1f3; }\n\n/* Define the hover highlight color for the table row */\n\nhoverTable thead tr:hover {\n  background-color: #ffff99; }\n\ntr.even {\n  background: #b8d1f3;\n  color: aliceblue; }\n\ntr.odd {\n  background: #4e95f4;\n  color: cornsilk; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waHJhc2UvQzpcXFVzZXJzXFxrYXJwb1xcT25lRHJpdmVcXERlc2t0b3BcXE15IHNpdGVcXE15LUFuZ3VsYXItUHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGhyYXNlXFxwaHJhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwwQkFBd0IsRUFDekI7O0FBQ0Q7RUFDRSxhQUFXO0VBQUUsMEJBQXdCLEVBQ3RDOztBQUNELHFEQUFxRDs7QUFDckQ7RUFDRSxvQkFBbUIsRUFDcEI7O0FBQ0Qsd0RBQXdEOztBQUN0RDtFQUNNLDBCQUF5QixFQUM5Qjs7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsZ0JBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BocmFzZS9waHJhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhYmxle1xyXG4gIGJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtcclxufVxyXG5ob3ZlciB0YWJsZSB0aGVhZCB0ciB0aHtcclxuICBwYWRkaW5nOjdweDsgYm9yZGVyOiM0ZTk1ZjQgMXB4IHNvbGlkO1xyXG59XHJcbi8qIERlZmluZSB0aGUgZGVmYXVsdCBjb2xvciBmb3IgYWxsIHRoZSB0YWJsZSByb3dzICovXHJcbmhvdmVyVGFibGUgdGhlYWQgdHJ7XHJcbiAgYmFja2dyb3VuZDogI2I4ZDFmMztcclxufVxyXG4vKiBEZWZpbmUgdGhlIGhvdmVyIGhpZ2hsaWdodCBjb2xvciBmb3IgdGhlIHRhYmxlIHJvdyAqL1xyXG4gIGhvdmVyVGFibGUgdGhlYWQgdHI6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmOTk7XHJcbiAgfVxyXG5cclxuICB0ci5ldmVue1xyXG4gICAgYmFja2dyb3VuZDogI2I4ZDFmMztcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgfVxyXG5cclxuICB0ci5vZGR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGU5NWY0O1xyXG4gICAgY29sb3I6IGNvcm5zaWxrO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/phrase/phrase.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/phrase/phrase.component.ts ***!
  \*******************************************************/
/*! exports provided: PhraseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhraseComponent", function() { return PhraseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _phrases_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../phrases.service */ "./src/app/phrases.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhraseComponent = /** @class */ (function () {
    function PhraseComponent(ph) {
        this.ph = ph;
    }
    PhraseComponent.prototype.ngOnInit = function () {
        this.title = "PHRASES";
        this.phrases = this.ph.getphrase();
    };
    PhraseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phrase',
            template: __webpack_require__(/*! ./phrase.component.html */ "./src/app/components/phrase/phrase.component.html"),
            styles: [__webpack_require__(/*! ./phrase.component.scss */ "./src/app/components/phrase/phrase.component.scss")]
        }),
        __metadata("design:paramtypes", [_phrases_service__WEBPACK_IMPORTED_MODULE_1__["PhrasesService"]])
    ], PhraseComponent);
    return PhraseComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/setting.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/setting/setting.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-medium is-primary is-bold\">\r\n  <div class=\"hero-body\">\r\n    <div class=\"container\">\r\n      <h1 class=\"title\">\r\n        SETTING\r\n      </h1>\r\n      <h2 class=\"subtitle\">\r\n        Appp version 1.0.0\r\n      </h2>\r\n      <div class=\"field\">\r\n        <label class=\"label\">Name</label>\r\n        <div class=\"control\">\r\n          <input class=\"input\" type=\"text\" placeholder=\"Text input\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"field\">\r\n        <label class=\"label\">Username</label>\r\n        <div class=\"control has-icons-left has-icons-right\">\r\n          <input class=\"input is-success\" type=\"text\" placeholder=\"Text input\" value=\"bulma\">\r\n          <span class=\"icon is-small is-left\">\r\n            <i class=\"fas fa-user\"></i>\r\n          </span>\r\n          <span class=\"icon is-small is-right\">\r\n            <i class=\"fas fa-check\"></i>\r\n          </span>\r\n        </div>\r\n        <p class=\"help is-success\">This username is available</p>\r\n      </div>\r\n\r\n      <div class=\"field\">\r\n        <label class=\"label\">Email</label>\r\n        <div class=\"control has-icons-left has-icons-right\">\r\n          <input class=\"input is-danger\" type=\"email\" placeholder=\"Email input\" value=\"hello@\">\r\n          <span class=\"icon is-small is-left\">\r\n            <i class=\"fas fa-envelope\"></i>\r\n          </span>\r\n          <span class=\"icon is-small is-right\">\r\n            <i class=\"fas fa-exclamation-triangle\"></i>\r\n          </span>\r\n        </div>\r\n        <p class=\"help is-danger\">This email is invalid</p>\r\n      </div>\r\n\r\n      <div class=\"field\">\r\n        <label class=\"label\">Subject</label>\r\n        <div class=\"control\">\r\n          <div class=\"select\">\r\n            <select>\r\n              <option>Select dropdown</option>\r\n              <option>With options</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"field\">\r\n        <label class=\"label\">Message</label>\r\n        <div class=\"control\">\r\n          <textarea class=\"textarea\" placeholder=\"Textarea\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"field\">\r\n        <div class=\"control\">\r\n          <label class=\"checkbox\">\r\n            <input type=\"checkbox\">\r\n            I agree to the <a href=\"#\">terms and conditions</a>\r\n          </label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"field\">\r\n        <div class=\"control\">\r\n          <label class=\"radio\">\r\n            <input type=\"radio\" name=\"question\">\r\n            Yes\r\n          </label>\r\n          <label class=\"radio\">\r\n            <input type=\"radio\" name=\"question\">\r\n            No\r\n          </label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"field is-grouped\">\r\n        <div class=\"control\">\r\n          <button class=\"button is-link\">Submit</button>\r\n        </div>\r\n        <div class=\"control\">\r\n          <button class=\"button is-text\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/setting/setting.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/setting/setting.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/setting/setting.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/setting/setting.component.ts ***!
  \*********************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
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

var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/components/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.scss */ "./src/app/components/setting/setting.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/components/translate/translate.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/translate/translate.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <div class=\"field\">\r\n      <label class=\"label\">Premier Langue</label>\r\n      <div class=\"control\">\r\n          <input class=\"input is-medium\" #newWord>\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label class=\"label\">Deuxième Langue</label>\r\n      <div class=\"control\">\r\n          <input class=\"input is-medium\" #newWord2>\r\n      </div>\r\n    </div>\r\n    <div class=\"field is-grouped\">\r\n      <div class=\"control\">\r\n        <button class=\"button is-primary\" (click)=\"addWord(newWord.value) + addWord2(newWord2.value)\">Ajouter</button>\r\n        <table class=\"table is-bordered\">\r\n          <thead>\r\n            <tr class=\"is-selected\">\r\n            <th>Premier Langue</th>\r\n            <th>Deuxième Langue</th>\r\n            </tr>\r\n          </thead>\r\n          <tfoot>\r\n              <tr class=\"is-selected\">\r\n              <th>Premier Langue</th>\r\n              <th>Deuxième Langue</th>\r\n              </tr>\r\n            </tfoot>\r\n            <tbody>\r\n            <tr>\r\n            <td> <div *ngFor=\"let l of Langue1\">{{Langue1}}</div> </td>\r\n            <td> <div *ngFor=\"let l of Langue2\">{{Langue2}} </div> </td>\r\n          </tr>\r\n        </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/components/translate/translate.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/translate/translate.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNsYXRlL3RyYW5zbGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/translate/translate.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/translate/translate.component.ts ***!
  \*************************************************************/
/*! exports provided: TranslateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateComponent", function() { return TranslateComponent; });
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

var TranslateComponent = /** @class */ (function () {
    function TranslateComponent() {
        this.Langue1 = [];
        this.Langue2 = [];
    }
    TranslateComponent.prototype.ngOnInit = function () {
    };
    TranslateComponent.prototype.addWord = function (newWord) {
        if (newWord) {
            this.Langue1.push(newWord);
        }
    };
    TranslateComponent.prototype.addWord2 = function (newWord2) {
        if (newWord2) {
            this.Langue2.push(newWord2);
        }
    };
    TranslateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-translate',
            template: __webpack_require__(/*! ./translate.component.html */ "./src/app/components/translate/translate.component.html"),
            styles: [__webpack_require__(/*! ./translate.component.scss */ "./src/app/components/translate/translate.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TranslateComponent);
    return TranslateComponent;
}());



/***/ }),

/***/ "./src/app/components/tution/tution.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/tution/tution.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container is-widescreen\">\r\n  <h1 class=\"title\">{{ title }}</h1>\r\n\r\n  <div class=\"tile is-parent\">\r\n    <div class=\"card-image\">\r\n      <img src=\"\\assets\\img\\Alphabetf.jpg\" alt=\"Placeholder image\">\r\n    </div>\r\n    <article class=\"tile is-child notification is-primary\">\r\n      <p class=\"title\">Alphabet français</p>\r\n      <p class=\"subtitle\">Connaître les lettres de l’alphabet.</p>\r\n      <div class=\"content\">\r\n        <h4>L’alphabet est l’ensemble des lettres utilisées pour écrire des mots.</h4>\r\n        <h5> Dans l'alphabet, il y a : </h5>\r\n        <h4>26 lettres <br> 6 Voyelles, <br> 20 Consonnes</h4>\r\n        <a class=\"button rounded\" href=\"https://fr.wikipedia.org/wiki/Aide:Alphabet_phon%C3%A9tique_fran%C3%A7ais\"\r\n          target=\"_blank\">More</a>\r\n      </div>\r\n    </article>\r\n  </div>\r\n\r\n  <div class=\"tile is-parent\">\r\n    <article class=\"tile is-child notification is-info\">\r\n      <p class=\"title\">Les pronoms</p>\r\n      <p class=\"subtitle\">Les pronoms remplacent des noms, des groupes nominaux, et parfois des propositions.</p>\r\n      <div class=\"content\">\r\n        <table class=\"table is-bordered is-stripe\">\r\n          <thead>\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>Pronoms </th>\r\n              <th>Example</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <th>1</th>\r\n              <td>Pronoms personnels</td>\r\n              <td><strong>Sujets:</strong> je, tu, il, elle, nous, vous, ils, elles <br>\r\n                <strong>COD :</strong> me, te, le, les, nous, vous, leur <br>\r\n                <strong>COI :</strong> me, te, lui, en, y, nous, vous, leur <br>\r\n                <strong>CC :</strong> de lieu : en, y <br>\r\n                <strong>Accentués :</strong> moi, toi, lui, elle, nous, vous, eux, elles\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>2</th>\r\n              <td>Pronoms démonstratifs</td>\r\n              <td>ce, c', ça, cela, ceci, celui, celle, celui-ci, <br>\r\n                celle-là, ceux, celles, ceux-ci, ceux-là, <br>\r\n                celles-ci, celles-là,...\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>3</th>\r\n              <th>Pronoms possessifs</th>\r\n              <td> le mien, la mienne, le tien, la tienne, le\r\n                <br>\r\n                sien, la sienne, le (la) nôtre, le (la)\r\n                <br>\r\n                vôtre, le (la) leur, les mien(ne)s, les\r\n                <br>\r\n                tien(ne)s, les sien(ne)s, les nôtres, les\r\n                <br>\r\n                vôtres, les leurs\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>4</th>\r\n              <td>Pronoms interrogatifs</td>\r\n              <td> qui ? que ? à qui ? ...</td>\r\n            </tr>\r\n            <tr>\r\n              <th>5</th>\r\n              <td>Pronoms relatifs</td>\r\n              <td>qui, que, quoi, dont, où, + lequel et ses composés</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <a class=\"button rounded\" href=\"https://fr.wikipedia.org/wiki/Aide:Alphabet_phon%C3%A9tique_fran%C3%A7ais\"\r\n          target=\"_blank\">More</a>\r\n      </div>\r\n    </article>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/tution/tution.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/tution/tution.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHV0aW9uL3R1dGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tution/tution.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/tution/tution.component.ts ***!
  \*******************************************************/
/*! exports provided: TutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutionComponent", function() { return TutionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tution_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tution.service */ "./src/app/tution.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TutionComponent = /** @class */ (function () {
    function TutionComponent() {
        this.title = "List of Courses";
        var service = new _tution_service__WEBPACK_IMPORTED_MODULE_1__["TutionService"]();
    }
    TutionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tution',
            template: __webpack_require__(/*! ./tution.component.html */ "./src/app/components/tution/tution.component.html"),
            styles: [__webpack_require__(/*! ./tution.component.scss */ "./src/app/components/tution/tution.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TutionComponent);
    return TutionComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- footer -->\r\n <footer class=\"footer\">\r\n  <div class=\"container\">\r\n  <div class=\"content has-text-centered\">\r\n    <p>\r\n      Made By WadGreen@2018 <a href=\"Wabgreen\"></a>\r\n    </p>\r\n  </div>\r\n  </div>\r\n  </footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar is-dark\" role=\"navigation\" aria-label=\"main navigation\">\r\n\r\n  <!-- logo -->\r\n  <div class=\"navbar-brand\">\r\n    <a class=\"navbar-item\">\r\n      <img src=\"assets/img/logo1.jpg\">\r\n    </a>\r\n  </div>\r\n\r\n  <!-- menu -->\r\n  <div class=\"navbar-menu\">\r\n    <div class=\"navbar-start\">\r\n      <a class=\"navbar-item\" routerLink=\"home\">HOME</a>\r\n      <a class=\"navbar-item\" routerLink=\"/phrase\">PHRASE</a>\r\n      <a class=\"navbar-item\" routerLink=\"tution\">TUTION</a>\r\n      <a class=\"navbar-item\" routerLink=\"translate\">TRANSLATE</a>\r\n      <a class=\"navbar-item\" routerLink=\"setting\">SETTING</a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*scss variable*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xca2FycG9cXE9uZURyaXZlXFxEZXNrdG9wXFxNeSBzaXRlXFxNeS1Bbmd1bGFyLVByb2plY3Qvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKnNjc3MgdmFyaWFibGUqL1xyXG4kcHJpbWFyeTojZGRkO1xyXG4kZGFyazojMzMzO1xyXG4kbGlnaHQ6I2ZmZjtcclxuJHNoYWRvdzowIDFweCA1cHggcmdiYSgxMDQsMTA0LDEwNCwwLjgpO1xyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/phrases.service.ts":
/*!************************************!*\
  !*** ./src/app/phrases.service.ts ***!
  \************************************/
/*! exports provided: PhrasesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhrasesService", function() { return PhrasesService; });
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

var phrase = [
    {
        "phrasef": "Apprendre des langues est intèressant",
        "phrasee": "Learning languages is fun",
        "phrasea": "تعلم اللغات شئ ممتع",
    },
    {
        "phrasef": "un cours de littérature",
        "phrasee": "Cours of litterature",
        "phrasea": "فصل  ادبي",
    },
    {
        "phrasef": "Pour étudier",
        "phrasee": "In order to study",
        "phrasea": "للدراسه",
    },
    {
        "phrasef": "un cours de littérature",
        "phrasee": "Cours of litterature",
        "phrasea": "فصل  ادبي",
    },
    {
        "phrasef": "un cours de littérature",
        "phrasee": "Cours of litterature",
        "phrasea": "فصل  ادبي",
    },
    {
        "phrasef": "un cours de littérature",
        "phrasee": "Cours of litterature",
        "phrasea": "فصل  ادبي",
    },
    {
        "phrasef": "un cours de littérature",
        "phrasee": "Cours of litterature",
        "phrasea": "فصل  ادبي",
    },
    {
        "phrasef": "un cours de littérature",
        "phrasee": "Cours of litterature",
        "phrasea": "فصل  ادبي",
    },
    {
        "phrasef": "Pour étudier",
        "phrasee": "In order to study",
        "phrasea": "للدراسه",
    },
    {
        "phrasef": "Pour étudier",
        "phrasee": "In order to study",
        "phrasea": "للدراسه",
    },
    {
        "phrasef": "Pour étudier",
        "phrasee": "In order to study",
        "phrasea": "للدراسه",
    },
    {
        "phrasef": "Pour étudier",
        "phrasee": "In order to study",
        "phrasea": "للدراسه",
    },
    {
        "phrasef": "C'est la class",
        "phrasee": "This is the class",
        "phrasea": "هذا هو الفصل",
    }
];
var PhrasesService = /** @class */ (function () {
    function PhrasesService() {
    }
    PhrasesService.prototype.getphrase = function () {
        return phrase;
    };
    PhrasesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PhrasesService);
    return PhrasesService;
}());



/***/ }),

/***/ "./src/app/translation.service.ts":
/*!****************************************!*\
  !*** ./src/app/translation.service.ts ***!
  \****************************************/
/*! exports provided: TranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationService", function() { return TranslationService; });
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

var TranslationService = /** @class */ (function () {
    function TranslationService() {
    }
    TranslationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TranslationService);
    return TranslationService;
}());



/***/ }),

/***/ "./src/app/tution.service.ts":
/*!***********************************!*\
  !*** ./src/app/tution.service.ts ***!
  \***********************************/
/*! exports provided: TutionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutionService", function() { return TutionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TutionService = /** @class */ (function () {
    function TutionService() {
    }
    TutionService.prototype.getCourses = function () {
        return ["courses1", "courses2", "courses3"];
    };
    TutionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TutionService);
    return TutionService;
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

module.exports = __webpack_require__(/*! C:\Users\karpo\OneDrive\Desktop\My site\My-Angular-Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map