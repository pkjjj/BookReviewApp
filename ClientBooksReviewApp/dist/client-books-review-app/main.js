"use strict";
(self["webpackChunkClientBooksReviewApp"] = self["webpackChunkClientBooksReviewApp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./books/books.component */ 3419);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration/registration.component */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: '', redirectTo: 'book', pathMatch: 'full' },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__.RegistrationComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
    { path: 'books', component: _books_books_component__WEBPACK_IMPORTED_MODULE_0__.BooksComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'ClientBooksReviewApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenGetter": () => (/* binding */ tokenGetter),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/request.service */ 6852);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _shared_custom_validators_password_confirmation_validator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/custom-validators/password-confirmation-validator.service */ 6262);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/error-handling.service */ 2422);
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/authentication.service */ 7361);
/* harmony import */ var _books_Modules_books_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./books/Modules/books.module */ 7621);
/* harmony import */ var _book_full_information_book_full_information_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-full-information/book-full-information.module */ 744);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var _registration_registration_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registration/registration.module */ 5375);
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.module */ 107);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ 6392);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);

















function tokenGetter() {
    return localStorage.getItem("token");
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_10__.SearchComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [_shared_services_request_service__WEBPACK_IMPORTED_MODULE_2__.RequestService, _shared_custom_validators_password_confirmation_validator_service__WEBPACK_IMPORTED_MODULE_3__.PasswordConfirmationValidatorService, { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS, useClass: _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__.ErrorHandlingService, multi: true },
        _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService], imports: [[
            _book_full_information_book_full_information_module__WEBPACK_IMPORTED_MODULE_7__.BookFullInformationModule,
            _books_Modules_books_module__WEBPACK_IMPORTED_MODULE_6__.BooksModule,
            _registration_registration_module__WEBPACK_IMPORTED_MODULE_8__.RegistrationModule,
            _login_login_module__WEBPACK_IMPORTED_MODULE_9__.LoginModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__.JwtModule.forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    allowedDomains: ['localhost:5001'],
                    disallowedRoutes: []
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_book_full_information_book_full_information_module__WEBPACK_IMPORTED_MODULE_7__.BookFullInformationModule,
        _books_Modules_books_module__WEBPACK_IMPORTED_MODULE_6__.BooksModule,
        _registration_registration_module__WEBPACK_IMPORTED_MODULE_8__.RegistrationModule,
        _login_login_module__WEBPACK_IMPORTED_MODULE_9__.LoginModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__.JwtModule] }); })();


/***/ }),

/***/ 1676:
/*!*******************************************************************************!*\
  !*** ./src/app/book-full-information/book-full-information-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookFullInformationRoutingModule": () => (/* binding */ BookFullInformationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _book_full_information_book_full_information_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-full-information/book-full-information.component */ 2762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: 'book/:id', component: _book_full_information_book_full_information_component__WEBPACK_IMPORTED_MODULE_0__.BookFullInformationComponent }
];
class BookFullInformationRoutingModule {
}
BookFullInformationRoutingModule.ɵfac = function BookFullInformationRoutingModule_Factory(t) { return new (t || BookFullInformationRoutingModule)(); };
BookFullInformationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BookFullInformationRoutingModule });
BookFullInformationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BookFullInformationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 744:
/*!***********************************************************************!*\
  !*** ./src/app/book-full-information/book-full-information.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookFullInformationModule": () => (/* binding */ BookFullInformationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _book_full_information_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-full-information-routing.module */ 1676);
/* harmony import */ var _book_full_information_book_full_information_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-full-information/book-full-information.component */ 2762);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class BookFullInformationModule {
}
BookFullInformationModule.ɵfac = function BookFullInformationModule_Factory(t) { return new (t || BookFullInformationModule)(); };
BookFullInformationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BookFullInformationModule });
BookFullInformationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _book_full_information_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookFullInformationRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BookFullInformationModule, { declarations: [_book_full_information_book_full_information_component__WEBPACK_IMPORTED_MODULE_1__.BookFullInformationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _book_full_information_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookFullInformationRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 2762:
/*!************************************************************************************************!*\
  !*** ./src/app/book-full-information/book-full-information/book-full-information.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookFullInformationComponent": () => (/* binding */ BookFullInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/request.service */ 6852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rating/rating.component */ 3355);
/* harmony import */ var _book_reviews_book_reviews_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../book-reviews/book-reviews.component */ 2699);
/* harmony import */ var _pipes_date_without_time_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/date-without-time.pipe */ 6955);







function BookFullInformationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-rating", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Add in liked");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "dateWithoutTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "app-book-reviews", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", ctx_r0.book.imageCover, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.book.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.book.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rating", 7)("backgroundColor", ctx_r0.backgroundColorForRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.book.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 8, ctx_r0.book.created));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("reviews", ctx_r0.book.reviews);
} }
class BookFullInformationComponent {
    constructor(_requestService, _route) {
        this._requestService = _requestService;
        this._route = _route;
        this.backgroundColorForRating = "black";
        this.isShow = false;
    }
    ngOnInit() {
        this.getRouteParameters();
        this.getBook();
    }
    getRouteParameters() {
        this._route.params
            .subscribe(params => {
            this.bookId = params['id'];
        });
    }
    getBook() {
        this._requestService.getData("books/getbook?id=" + this.bookId)
            .subscribe((book) => {
            console.log(book);
            this.book = book;
            this.isShow = true;
        });
    }
}
BookFullInformationComponent.ɵfac = function BookFullInformationComponent_Factory(t) { return new (t || BookFullInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_0__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
BookFullInformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BookFullInformationComponent, selectors: [["app-book-full-information"]], inputs: { book: "book" }, decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "d-flex", "justify-content-center"], [1, "bg-container"], [1, "row"], [1, "col-2"], ["alt", "Book cover", 1, "cover-size", 3, "src"], [1, "col-6"], [1, "text-center"], [1, "col-4"], [3, "rating", "backgroundColor"], [1, "btn", "btn-outline-warning"], [1, "fs-2", "text-center"], [1, "bg-white", "border-2", "border-top", "border-white"], [3, "reviews"]], template: function BookFullInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BookFullInformationComponent_div_0_Template, 28, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _rating_rating_component__WEBPACK_IMPORTED_MODULE_1__.RatingComponent, _book_reviews_book_reviews_component__WEBPACK_IMPORTED_MODULE_2__.BookReviewsComponent], pipes: [_pipes_date_without_time_pipe__WEBPACK_IMPORTED_MODULE_3__.DateWithoutTimePipe], styles: [".cover-size[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  height: 400px;\r\n}\r\n\r\n.bg-container[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  width: 100%;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-size: 5em;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stZnVsbC1pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJib29rLWZ1bGwtaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3Zlci1zaXplIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLmJnLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogNWVtO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiA1ZW07XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 2699:
/*!********************************************************!*\
  !*** ./src/app/book-reviews/book-reviews.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookReviewsComponent": () => (/* binding */ BookReviewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/authentication.service */ 7361);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/search.component */ 6392);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rating/rating.component */ 3355);
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../review/review.component */ 354);
/* harmony import */ var _pipes_date_without_time_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/date-without-time.pipe */ 6955);







function BookReviewsComponent_app_rating_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-rating", 15);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rating", ctx_r0.reviews[0].rating)("backgroundColor", ctx_r0.backgroundColorForRating);
} }
function BookReviewsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-review", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function BookReviewsComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "dateWithoutTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookReviewsComponent_ng_container_24_Template_a_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const review_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.showAllLines(review_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "...more");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const review_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](review_r3.applicationUser.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 5, review_r3.created));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", review_r3.applicationUser.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", review_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](review_r3.description);
} }
class BookReviewsComponent {
    constructor(_authnServise) {
        this._authnServise = _authnServise;
        this.countVisibleLines = 2;
        this.backgroundColorForRating = "black";
        this.show = false;
    }
    showAllLines(id) {
        let p = document.getElementById(id);
        p.classList.toggle("all-lines");
    }
    checkOnAuthentication() {
        if (!this._authnServise.isUserAuthenticated()) {
            console.log("not auth");
            this._authnServise.logout();
        }
        else {
            this.show = true;
        }
    }
}
BookReviewsComponent.ɵfac = function BookReviewsComponent_Factory(t) { return new (t || BookReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
BookReviewsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: BookReviewsComponent, selectors: [["app-book-reviews"]], inputs: { reviews: "reviews", countVisibleLines: "countVisibleLines" }, decls: 25, vars: 4, consts: [[1, "container"], [1, "row"], [1, "col-6"], [1, "fs-1", "text-center"], [1, "col-2"], [1, "col-4"], [1, "d-flex", "justify-content-center"], [3, "isButtonStyleWarning", "itemsForSearch"], [3, "rating", "backgroundColor", 4, "ngIf"], [1, "bg-white", "border-2", "border-top", "border-white"], [1, "fs-min"], [1, "2"], [1, "btn", "btn-warning", 3, "click"], ["class", "row", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "rating", "backgroundColor"], [3, "book"], [1, "row", "mt-5"], [1, "fs-min", "font-color-gray"], ["alt", "Avatar", 1, "avatar-size", 3, "src"], [1, "col-10"], [1, "fs-medium", "several-lines", 3, "id"], [1, "pointer", 3, "click"]], template: function BookReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "COMMUNITY REVIEWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-search", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, BookReviewsComponent_app_rating_11_Template, 1, 2, "app-rating", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Start your review of this book if you want.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookReviewsComponent_Template_button_click_20_listener() { return ctx.checkOnAuthentication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Write review");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, BookReviewsComponent_div_22_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, BookReviewsComponent_ng_container_24_Template, 18, 7, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isButtonStyleWarning", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reviews[0].rating !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.reviews);
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _rating_rating_component__WEBPACK_IMPORTED_MODULE_2__.RatingComponent, _review_review_component__WEBPACK_IMPORTED_MODULE_3__.ReviewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [_pipes_date_without_time_pipe__WEBPACK_IMPORTED_MODULE_4__.DateWithoutTimePipe], styles: [".several-lines[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  max-width: 1000px;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden;\r\n}\r\n\r\n.pointer[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: rgb(79, 79, 231)\r\n}\r\n\r\n.all-lines[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  max-width: 1000px;\r\n  -webkit-line-clamp: 100;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stcmV2aWV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJib29rLXJldmlld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXZlcmFsLWxpbmVzIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogcmdiKDc5LCA3OSwgMjMxKVxyXG59XHJcblxyXG4uYWxsLWxpbmVzIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDEwMDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7306:
/*!*******************************************************!*\
  !*** ./src/app/books/Modules/books-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooksRoutingModule": () => (/* binding */ BooksRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _books_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../books.component */ 3419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: 'books', component: _books_component__WEBPACK_IMPORTED_MODULE_0__.BooksComponent },
];
class BooksRoutingModule {
}
BooksRoutingModule.ɵfac = function BooksRoutingModule_Factory(t) { return new (t || BooksRoutingModule)(); };
BooksRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BooksRoutingModule });
BooksRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BooksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7621:
/*!***********************************************!*\
  !*** ./src/app/books/Modules/books.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooksModule": () => (/* binding */ BooksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _books_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./books-routing.module */ 7306);
/* harmony import */ var _sorting_sorting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sorting/sorting.component */ 7588);
/* harmony import */ var _tiles_tiles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tiles/tiles.component */ 3632);
/* harmony import */ var _books_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../books.component */ 3419);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _tiles_books_modal_books_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tiles/books-modal/books-modal.component */ 6892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









class BooksModule {
}
BooksModule.ɵfac = function BooksModule_Factory(t) { return new (t || BooksModule)(); };
BooksModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BooksModule });
BooksModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _books_routing_module__WEBPACK_IMPORTED_MODULE_0__.BooksRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BooksModule, { declarations: [_sorting_sorting_component__WEBPACK_IMPORTED_MODULE_1__.SortingComponent,
        _tiles_tiles_component__WEBPACK_IMPORTED_MODULE_2__.TilesComponent,
        _books_component__WEBPACK_IMPORTED_MODULE_3__.BooksComponent,
        _tiles_books_modal_books_modal_component__WEBPACK_IMPORTED_MODULE_5__.BooksModalComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _books_routing_module__WEBPACK_IMPORTED_MODULE_0__.BooksRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 3419:
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooksComponent": () => (/* binding */ BooksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/request.service */ 6852);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/search.component */ 6392);
/* harmony import */ var _sorting_sorting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sorting/sorting.component */ 7588);
/* harmony import */ var _tiles_tiles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tiles/tiles.component */ 3632);





class BooksComponent {
    constructor(_requestService) {
        this._requestService = _requestService;
        this.arrayForSearch = [];
    }
    ngOnInit() {
        this.loadBooks();
    }
    loadBooks() {
        this._requestService.getData("books/getbooks")
            .subscribe((res) => {
            console.log(res);
            this.sourceBooks = res;
            this.outputBooks = res;
            this.makeBookNamesArray();
        });
    }
    makeBookNamesArray() {
        this.arrayForSearch = this.sourceBooks.map(b => b.name);
    }
    changeBookArrayBySearch(resultNamesArray) {
        this.outputBooks = this.sourceBooks.filter(book => {
            return resultNamesArray.includes(book.name);
        });
    }
    changeBookArrayByFilter(resultBooksArray) {
        this.outputBooks = resultBooksArray;
    }
}
BooksComponent.ɵfac = function BooksComponent_Factory(t) { return new (t || BooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_request_service__WEBPACK_IMPORTED_MODULE_0__.RequestService)); };
BooksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BooksComponent, selectors: [["app-books"]], decls: 5, vars: 3, consts: [[3, "itemsForSearch", "changeItems"], [1, "d-flex", "justify-content-center", "mt-5"], [3, "itemsForSort", "changeItems"], [1, "mt-5"], [3, "books"]], template: function BooksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeItems", function BooksComponent_Template_app_search_changeItems_0_listener($event) { return ctx.changeBookArrayBySearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-sorting", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeItems", function BooksComponent_Template_app_sorting_changeItems_2_listener($event) { return ctx.changeBookArrayByFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-tiles", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("itemsForSearch", ctx.arrayForSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("itemsForSort", ctx.sourceBooks);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("books", ctx.outputBooks);
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent, _sorting_sorting_component__WEBPACK_IMPORTED_MODULE_2__.SortingComponent, _tiles_tiles_component__WEBPACK_IMPORTED_MODULE_3__.TilesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7588:
/*!****************************************************!*\
  !*** ./src/app/books/sorting/sorting.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortingComponent": () => (/* binding */ SortingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class SortingComponent {
    constructor() {
        this.changeItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    sort(option) {
        if (option === 'default') {
            this.changeItems.next(this.itemsForSort);
        }
        else if (option === 'rating') {
            this.sortByRating();
            this.changeItems.next(this.itemsForSort);
        }
        else if (option === 'date') {
            this.sortByDate();
            this.changeItems.next(this.itemsForSort);
        }
    }
    sortByRating() {
        this.itemsForSort.sort((item, secondItem) => item.rating - secondItem.rating);
    }
    sortByDate() {
        this.itemsForSort.sort((item, secondItem) => {
            return item.created > secondItem.created ? -1 : 1;
        });
    }
}
SortingComponent.ɵfac = function SortingComponent_Factory(t) { return new (t || SortingComponent)(); };
SortingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SortingComponent, selectors: [["app-sorting"]], inputs: { itemsForSort: "itemsForSort" }, outputs: { changeItems: "changeItems" }, decls: 10, vars: 0, consts: [["tabindex", "1", 1, "select"], ["name", "test", "type", "radio", "id", "opt1", "checked", "", 1, "selectopt", 3, "click"], ["for", "opt1", 1, "option"], ["name", "test", "type", "radio", "id", "opt2", 1, "selectopt", 3, "click"], ["for", "opt2", 1, "option"], ["name", "test", "type", "radio", "id", "opt3", 1, "selectopt", 3, "click"], ["for", "opt3", 1, "option"]], template: function SortingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortingComponent_Template_input_click_1_listener() { return ctx.sort("default"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortingComponent_Template_input_click_4_listener() { return ctx.sort("rating"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Best rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortingComponent_Template_input_click_7_listener() { return ctx.sort("date"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Newest books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".select[_ngcontent-%COMP%] {\r\n  display:flex;\r\n  flex-direction: column;\r\n  position:relative;\r\n  width:250px;\r\n  height:40px;\r\n}\r\n\r\n.option[_ngcontent-%COMP%] {\r\n  padding:0 30px 0 10px;\r\n  min-height:40px;\r\n  display:flex;\r\n  align-items:center;\r\n  background:#333;\r\n  border-top:#222 solid 1px;\r\n  position:absolute;\r\n  top:0;\r\n  width: 100%;\r\n  pointer-events:none;\r\n  order:2;\r\n  z-index:1;\r\n  transition:  .4s ease-in-out;\r\n  box-sizing:border-box;\r\n  overflow:hidden;\r\n  white-space:nowrap;\r\n\r\n}\r\n\r\n.option[_ngcontent-%COMP%]:hover {\r\n  background:#666;\r\n}\r\n\r\n.select[_ngcontent-%COMP%]:focus   .option[_ngcontent-%COMP%] {\r\n  position:relative;\r\n  pointer-events:all;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  opacity:0;\r\n  position:absolute;\r\n  left:-99999px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\r\n  order: 1;\r\n  z-index:2;\r\n  background:#666;\r\n  border-top:none;\r\n  position:relative;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\r\n  content:'';\r\n  width: 0;\r\n\theight: 0;\r\n\tborder-left: 5px solid transparent;\r\n\tborder-right: 5px solid transparent;\r\n\tborder-top: 5px solid white;\r\n  position:absolute;\r\n  right:10px;\r\n  top:calc(50% - 2.5px);\r\n  pointer-events:none;\r\n  z-index:3;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  position:absolute;\r\n  right:0;\r\n  height: 40px;\r\n  width: 40px;\r\n  content: '';\r\n  background:#666;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvcnRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLEtBQUs7RUFDTCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7Q0FDVCxTQUFTO0NBQ1Qsa0NBQWtDO0NBQ2xDLG1DQUFtQztDQUNuQywyQkFBMkI7RUFDMUIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtBQUNqQiIsImZpbGUiOiJzb3J0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNlbGVjdCB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgd2lkdGg6MjUwcHg7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG4gIHBhZGRpbmc6MCAzMHB4IDAgMTBweDtcclxuICBtaW4taGVpZ2h0OjQwcHg7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiMzMzM7XHJcbiAgYm9yZGVyLXRvcDojMjIyIHNvbGlkIDFweDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gIG9yZGVyOjI7XHJcbiAgei1pbmRleDoxO1xyXG4gIHRyYW5zaXRpb246ICAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcblxyXG59XHJcblxyXG4ub3B0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiM2NjY7XHJcbn1cclxuXHJcbi5zZWxlY3Q6Zm9jdXMgLm9wdGlvbiB7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgcG9pbnRlci1ldmVudHM6YWxsO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgb3BhY2l0eTowO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6LTk5OTk5cHg7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgb3JkZXI6IDE7XHJcbiAgei1pbmRleDoyO1xyXG4gIGJhY2tncm91bmQ6IzY2NjtcclxuICBib3JkZXItdG9wOm5vbmU7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XHJcbiAgY29udGVudDonJztcclxuICB3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItdG9wOiA1cHggc29saWQgd2hpdGU7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgcmlnaHQ6MTBweDtcclxuICB0b3A6Y2FsYyg1MCUgLSAyLjVweCk7XHJcbiAgcG9pbnRlci1ldmVudHM6bm9uZTtcclxuICB6LWluZGV4OjM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHJpZ2h0OjA7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJhY2tncm91bmQ6IzY2NjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6892:
/*!******************************************************************!*\
  !*** ./src/app/books/tiles/books-modal/books-modal.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooksModalComponent": () => (/* binding */ BooksModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../rating/rating.component */ 3355);
/* harmony import */ var _pipes_date_without_time_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/date-without-time.pipe */ 6955);




class BooksModalComponent {
    constructor(_router) {
        this._router = _router;
    }
    routeToBookPage() {
        this._router.navigate(['/book/' + this.book.id]);
    }
}
BooksModalComponent.ɵfac = function BooksModalComponent_Factory(t) { return new (t || BooksModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
BooksModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BooksModalComponent, selectors: [["app-books-modal"]], inputs: { book: "book" }, decls: 17, vars: 6, consts: [["role", "document", 1, "modal-dialog", "modal-side", "modal-bottom-right", "modal-notify", "modal-info", "modal-custom"], [1, "modal-content"], [1, "modal-header", "modal-headercolor", "d-flex", "justify-content-center"], [1, "modal-body"], [1, "row"], [1, "col-6"], [3, "rating"], [1, "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-info", "btn-md", "waves-effect", "waves-light", 3, "click"]], template: function BooksModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "dateWithoutTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-rating", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BooksModalComponent_Template_button_click_15_listener() { return ctx.routeToBookPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.book.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.book.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 4, ctx.book.created));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", ctx.book.rating);
    } }, directives: [_rating_rating_component__WEBPACK_IMPORTED_MODULE_0__.RatingComponent], pipes: [_pipes_date_without_time_pipe__WEBPACK_IMPORTED_MODULE_1__.DateWithoutTimePipe], styles: ["div[_ngcontent-%COMP%] {\r\n  --black: #ffffff;\r\n}\r\n\r\n.modal-custom[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  height: auto;\r\n  z-index: 2;\r\n}\r\n\r\n.modal-headercolor[_ngcontent-%COMP%] {\r\n  background-color: #0dcaf0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  color: var(--black);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tzLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJib29rcy1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAtLWJsYWNrOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubW9kYWwtY3VzdG9tIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXJjb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkY2FmMDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuaDEge1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3632:
/*!************************************************!*\
  !*** ./src/app/books/tiles/tiles.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TilesComponent": () => (/* binding */ TilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/request.service */ 6852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _books_modal_books_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books-modal/books-modal.component */ 6892);




function TilesComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-books-modal", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const book_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", book_r1.imageCover, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("book", book_r1);
} }
class TilesComponent {
    constructor(_requestService) {
        this._requestService = _requestService;
    }
}
TilesComponent.ɵfac = function TilesComponent_Factory(t) { return new (t || TilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_0__.RequestService)); };
TilesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TilesComponent, selectors: [["app-tiles"]], inputs: { books: "books" }, decls: 3, vars: 1, consts: [[1, "container"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "col-2", "details"], [1, "pointer"], ["alt", "BookImage", 1, "me-3", "mb-3", "rounded", 3, "src"], [1, "position-absolute", "rounded-circle", "size", "bg-icon", "d-inline"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "30", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-bookmarks", "icon-style"], ["d", "M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"], ["d", "M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"], [1, "popup"], [3, "book"]], template: function TilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TilesComponent_ng_container_2_Template, 10, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.books);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _books_modal_books_modal_component__WEBPACK_IMPORTED_MODULE_1__.BooksModalComponent], styles: ["img[_ngcontent-%COMP%] {\r\n  width: 180px;\r\n  height: 300px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.bg-size[_ngcontent-%COMP%] {\r\n  background-size: contain;\r\n}\r\n\r\n.pointer[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.icon-size[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.bg-icon[_ngcontent-%COMP%] {\r\n  margin-left: -60px;\r\n  background-color: white;\r\n}\r\n\r\n.icon-style[_ngcontent-%COMP%] {\r\n  margin-top: 2.2px;\r\n  margin-left: 3px;\r\n  color: black;\r\n}\r\n\r\n.size[_ngcontent-%COMP%] {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-bottom: 150px;\r\n  margin-left: -100px;\r\n  display: none;\r\n}\r\n\r\n.details[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n  display: inline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJ0aWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuaW1nOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbi5iZy1zaXplIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pY29uLXNpemUge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJnLWljb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmljb24tc3R5bGUge1xyXG4gIG1hcmdpbi10b3A6IDIuMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc2l6ZSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uZGV0YWlscyAucG9wdXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxuICBtYXJnaW4tbGVmdDogLTEwMHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kZXRhaWxzOmhvdmVyIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/authentication.service */ 7361);
/* harmony import */ var _shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/request.service */ 6852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);







function LoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
function LoginComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_em_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/registration"]; };
class LoginComponent {
    constructor(_authenticationService, _requestService, _router, _route) {
        this._authenticationService = _authenticationService;
        this._requestService = _requestService;
        this._router = _router;
        this._route = _route;
        this.errorMessage = '';
        this.validateControl = (controlName) => {
            return this.loginForm.controls[controlName].invalid && this.loginForm.controls[controlName].touched;
        };
        this.hasError = (controlName, errorName) => {
            return this.loginForm.controls[controlName].hasError(errorName);
        };
        this.loginUser = (loginFormValue) => {
            this.showError = false;
            const login = Object.assign({}, loginFormValue);
            const userForAuth = {
                email: login.username,
                password: login.password
            };
            //check token
            this._requestService.loginUser(userForAuth)
                .subscribe((res) => {
                localStorage.setItem("token", res.token);
                this._authenticationService.sendAuthStateChangeNotification(res.isAuthSuccessful);
                this._router.navigate(['/books']);
            }, (error) => {
                this.errorMessage = error;
                this.showError = true;
            });
        };
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 7, consts: [[1, "vh-100"], [1, "container-fluid", "h-custom"], [1, "row", "d-flex", "justify-content-center", "align-items-center", "h-100"], [1, "col-md-8", "col-lg-6", "col-xl-3", "offset-xl-1"], ["autocomplete", "off", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "text-center", "lead", "fw-normal", "mb-0", "me-3"], [1, "divider", "d-flex", "align-items-center", "my-4"], [1, "text-center", "fw-bold", "mx-3", "mb-0"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-outline", "mb-4"], ["type", "text", "id", "username", "formControlName", "username", "placeholder", "Enter a username", 1, "form-control", "form-control-lg"], [4, "ngIf"], [1, "form-outline", "mb-3"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Enter password", 1, "form-control", "form-control-lg"], [1, "text-center", "text-lg-start", "mt-1", "pt-2"], [1, "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "padding-left", "2.5rem", "padding-right", "2.5rem", 3, "disabled"], [1, "text-center", "h-4", "fw-bold", "mt-2", "pt-1", "mb-0"], [1, "h-4", 3, "routerLink"], ["role", "alert", 1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.loginUser(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Sign in with");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Or");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, LoginComponent_p_14_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, LoginComponent_em_17_Template, 2, 0, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.validateControl("username") && ctx.hasError("username", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.validateControl("password") && ctx.hasError("password", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [".divider[_ngcontent-%COMP%]:after, .divider[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  flex: 1;\r\n  height: 1px;\r\n  background: #eee;\r\n}\r\n.h-custom[_ngcontent-%COMP%] {\r\n  height: calc(100% - 73px);\r\n}\r\n.center[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 50%;\r\n}\r\n@media (max-width: 450px) {\r\n  .h-custom[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBVztFQUNYLE9BQU87RUFDUCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZpZGVyOmFmdGVyLFxyXG4uZGl2aWRlcjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZmxleDogMTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG59XHJcbi5oLWN1c3RvbSB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3M3B4KTtcclxufVxyXG4uY2VudGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1MCU7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgLmgtY3VzdG9tIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 8458);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 2976:
/*!**********************************************************!*\
  !*** ./src/app/modal-success/modal-success.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSuccessComponent": () => (/* binding */ ModalSuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ModalSuccessComponent {
    constructor() { }
}
ModalSuccessComponent.ɵfac = function ModalSuccessComponent_Factory(t) { return new (t || ModalSuccessComponent)(); };
ModalSuccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalSuccessComponent, selectors: [["app-modal-success"]], decls: 14, vars: 0, consts: [["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-mdb-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-mdb-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"]], template: function ModalSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Modal title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1zdWNjZXNzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6955:
/*!*************************************************!*\
  !*** ./src/app/pipes/date-without-time.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateWithoutTimePipe": () => (/* binding */ DateWithoutTimePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DateWithoutTimePipe {
    transform(date) {
        let currentDate = new Date(date);
        return currentDate.toDateString().split('T');
    }
}
DateWithoutTimePipe.ɵfac = function DateWithoutTimePipe_Factory(t) { return new (t || DateWithoutTimePipe)(); };
DateWithoutTimePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateWithoutTime", type: DateWithoutTimePipe, pure: true });


/***/ }),

/***/ 3355:
/*!********************************************!*\
  !*** ./src/app/rating/rating.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingComponent": () => (/* binding */ RatingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function RatingComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function RatingComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class RatingComponent {
    constructor() {
        this.maxRating = 10;
    }
    ngOnInit() {
        this.rating = Math.round(this.rating);
        this.fillArray();
        this.getCountRemainingStars();
    }
    fillArray() {
        this.countStars = Array.from({ length: this.rating }, (_, i) => i + 1);
    }
    getCountRemainingStars() {
        const countRemainingStars = this.maxRating - this.rating;
        if (countRemainingStars > 0) {
            this.remainingStars = Array.from({ length: countRemainingStars }, (_, i) => i + 1);
        }
    }
}
RatingComponent.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(); };
RatingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingComponent, selectors: [["app-rating"]], inputs: { rating: "rating", backgroundColor: "backgroundColor" }, decls: 8, vars: 5, consts: [[1, "container", "d-flex", "justify-content-center", "align-items-center"], [1, "card", "p-3"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "ratings"], [4, "ngFor", "ngForOf"], [1, "review-count"], [1, "fa", "fa-star", "rating-color"], [1, "fa", "fa-star"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RatingComponent_ng_container_4_Template, 2, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RatingComponent_ng_container_5_Template, 2, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--background-color", ctx.backgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countStars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.remainingStars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rating);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["div[_ngcontent-%COMP%] {\r\n  --background-color: #fff;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background-color: var(--background-color);\r\n}\r\n\r\n.ratings[_ngcontent-%COMP%] {\r\n  margin-right: 5px\r\n}\r\n\r\n.ratings[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #cecece;\r\n  font-size: 32px\r\n}\r\n\r\n.rating-color[_ngcontent-%COMP%] {\r\n  color: #fbc634 !important\r\n}\r\n\r\n.review-count[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  margin-bottom: 2px;\r\n  font-size: 24px !important\r\n}\r\n\r\n.small-ratings[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #cecece\r\n}\r\n\r\n.review-stat[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n  font-size: 18px;\r\n  margin-bottom: 2px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZjtBQUNGIiwiZmlsZSI6InJhdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbn1cclxuXHJcbi5yYXRpbmdzIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweFxyXG59XHJcblxyXG4ucmF0aW5ncyBpIHtcclxuICBjb2xvcjogI2NlY2VjZTtcclxuICBmb250LXNpemU6IDMycHhcclxufVxyXG5cclxuLnJhdGluZy1jb2xvciB7XHJcbiAgY29sb3I6ICNmYmM2MzQgIWltcG9ydGFudFxyXG59XHJcblxyXG4ucmV2aWV3LWNvdW50IHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudFxyXG59XHJcblxyXG4uc21hbGwtcmF0aW5ncyBpIHtcclxuICBjb2xvcjogI2NlY2VjZVxyXG59XHJcblxyXG4ucmV2aWV3LXN0YXQge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweFxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2481:
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/request.service */ 6852);
/* harmony import */ var _shared_custom_validators_password_confirmation_validator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/custom-validators/password-confirmation-validator.service */ 6262);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);







function RegistrationComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.errorMessages, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function RegistrationComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please provide a valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistrationComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistrationComponent_em_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistrationComponent_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Confirmation is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistrationComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Passwords must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/registration"]; };
class RegistrationComponent {
    constructor(requestService, _passConfValidator, _router) {
        this.requestService = requestService;
        this._passConfValidator = _passConfValidator;
        this._router = _router;
    }
    ngOnInit() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
        });
        this.registerForm.get('confirmPassword').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
            this._passConfValidator.validateConfirmPassword(this.registerForm.get('password'))]);
    }
    validateControl(controlName) {
        return this.registerForm.controls[controlName].invalid && this.registerForm.controls[controlName].touched;
    }
    hasError(controlName, errorName) {
        return this.registerForm.controls[controlName].hasError(errorName);
    }
    registerUser(registerFormValue) {
        this.showError = false;
        const formValues = Object.assign({}, registerFormValue);
        const user = {
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            confirmPassword: formValues.confirmPassword
        };
        this.requestService.registerUser(user)
            .subscribe(_ => {
            this._router.navigate(["/login"]);
        }, error => {
            this.errorMessages = error;
            this.showError = true;
        });
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_request_service__WEBPACK_IMPORTED_MODULE_0__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_custom_validators_password_confirmation_validator_service__WEBPACK_IMPORTED_MODULE_1__.PasswordConfirmationValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
RegistrationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 34, vars: 10, consts: [[1, "vh-100"], [1, "container-fluid", "h-custom"], [1, "row", "d-flex", "justify-content-center", "align-items-center", "h-100"], [1, "col-md-8", "col-lg-6", "col-xl-3", "offset-xl-1"], ["autocomplete", "off", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "text-center", "lead", "fw-normal", "mb-0", "me-3"], [1, "divider", "d-flex", "align-items-center", "my-4"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-outline", "mb-4"], ["type", "text", "id", "formName", "formControlName", "name", "placeholder", "Enter name", 1, "form-control", "form-control-lg"], ["type", "email", "id", "formEmail", "formControlName", "email", "placeholder", "Enter a valid email address", 1, "form-control", "form-control-lg"], [1, "col-md-5"], [4, "ngIf"], [1, "form-outline", "mb-3"], ["type", "password", "id", "formPassword", "formControlName", "password", "placeholder", "Enter password", 1, "form-control", "form-control-lg"], ["type", "password", "id", "formSecondPassword", "formControlName", "confirmPassword", "placeholder", "Repeat password", 1, "form-control", "form-control-lg"], [1, "text-lg-start", "mt-4", "pt-2"], [1, "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "padding-left", "2.5rem", "padding-right", "2.5rem", 3, "disabled"], [1, "text-center", "h-4", "fw-bold", "mt-2", "pt-1", "mb-0"], ["href", "#!", "routerLink", "/login", 1, "h-4", 3, "routerLink"], ["role", "alert", 1, "alert", "alert-danger"], [3, "innerHTML"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_4_listener() { return ctx.registerUser(ctx.registerForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RegistrationComponent_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RegistrationComponent_p_15_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RegistrationComponent_p_16_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, RegistrationComponent_em_20_Template, 2, 0, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, RegistrationComponent_p_24_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, RegistrationComponent_p_25_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Have already an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Login here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.validateControl("email") && ctx.hasError("email", "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.validateControl("email") && ctx.hasError("email", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.validateControl("password") && ctx.hasError("password", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.validateControl("confirmPassword") && ctx.hasError("confirmPassword", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasError("confirmPassword", "mustMatch"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [".divider[_ngcontent-%COMP%]:after, .divider[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  flex: 1;\r\n  height: 1px;\r\n  background: #eee;\r\n}\r\n.h-custom[_ngcontent-%COMP%] {\r\n  height: calc(100% - 73px);\r\n}\r\n.center[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 50%;\r\n}\r\n@media (max-width: 450px) {\r\n  .h-custom[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFdBQVc7RUFDWCxPQUFPO0VBQ1AsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmlkZXI6YWZ0ZXIsXHJcbi5kaXZpZGVyOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBmbGV4OiAxO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuLmgtY3VzdG9tIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDczcHgpO1xyXG59XHJcbi5jZW50ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUwJTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAuaC1jdXN0b20ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 5375:
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationModule": () => (/* binding */ RegistrationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.component */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class RegistrationModule {
}
RegistrationModule.ɵfac = function RegistrationModule_Factory(t) { return new (t || RegistrationModule)(); };
RegistrationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RegistrationModule });
RegistrationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RegistrationModule, { declarations: [_registration_component__WEBPACK_IMPORTED_MODULE_1__.RegistrationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 354:
/*!********************************************!*\
  !*** ./src/app/review/review.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewComponent": () => (/* binding */ ReviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/request.service */ 6852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _modal_success_modal_success_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-success/modal-success.component */ 2976);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);





function ReviewComponent_app_modal_success_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-modal-success");
} }
class ReviewComponent {
    constructor(_requestService) {
        this._requestService = _requestService;
        this.showSuccessWindow = false;
        this.showError = false;
    }
    sendReview() {
        const user = {
            token: localStorage.getItem("token"),
            id: '',
            name: '',
            avatar: ''
        };
        const review = {
            applicationUser: user,
            book: this.book,
            description: this.userText,
            created: new Date(),
        };
        this._requestService.setReview(review)
            .subscribe(_ => {
            this.showSuccessWindow = true;
        }, error => {
            this.errorMessages = error;
            this.showError = true;
        });
    }
}
ReviewComponent.ɵfac = function ReviewComponent_Factory(t) { return new (t || ReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_request_service__WEBPACK_IMPORTED_MODULE_0__.RequestService)); };
ReviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReviewComponent, selectors: [["app-review"]], inputs: { book: "book" }, decls: 6, vars: 2, consts: [[4, "ngIf"], [1, "md-form", "mb-4", "pink-textarea", "active-pink-textarea"], ["rows", "3", 1, "md-textarea", "form-control", 3, "ngModel", "ngModelChange"], ["for", "form18"], [1, "btn", "btn-warning", 3, "click"]], template: function ReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ReviewComponent_app_modal_success_0_Template, 1, 0, "app-modal-success", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ReviewComponent_Template_textarea_ngModelChange_2_listener($event) { return ctx.userText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReviewComponent_Template_button_click_4_listener() { return ctx.sendReview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSuccessWindow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _modal_success_modal_success_component__WEBPACK_IMPORTED_MODULE_1__.ModalSuccessComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6392:
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);



class SearchComponent {
    constructor() {
        this.changeItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    search(searchText) {
        if (!this.itemsForSearch) {
            return this.changeItems.next(this.itemsForSearch);
        }
        if (!searchText) {
            return this.changeItems.next(this.itemsForSearch);
        }
        searchText = searchText.toLocaleLowerCase();
        const resultArray = this.itemsForSearch.filter(it => {
            return it.toLocaleLowerCase().includes(searchText);
        });
        if (resultArray !== undefined) {
            return this.changeItems.next(resultArray);
        }
        else {
            return this.changeItems.next(this.itemsForSearch);
        }
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], inputs: { itemsForSearch: "itemsForSearch", isButtonStyleWarning: "isButtonStyleWarning" }, outputs: { changeItems: "changeItems" }, decls: 5, vars: 3, consts: [[1, "d-flex", "justify-content-center"], ["type", "search", "id", "form1", "placeholder", "Enter book name", 1, "form-control", "border", "rounded-pill", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "button-size", "border", "rounded-pill", "ms-n5", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-search"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_3_listener() { return ctx.search(ctx.searchValue); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-warning", ctx.isButtonStyleWarning);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], styles: [".button-size[_ngcontent-%COMP%] {\r\n  height: 2.4em;\r\n  width: 3.5em;\r\n}\r\n\r\n.img-size[_ngcontent-%COMP%] {\r\n  height: 5em;\r\n  width: 5em;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #0d6efd;\r\n}\r\n\r\n.ms-n5[_ngcontent-%COMP%] {\r\n  margin-left: -2.2rem !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1zaXplIHtcclxuICBoZWlnaHQ6IDIuNGVtO1xyXG4gIHdpZHRoOiAzLjVlbTtcclxufVxyXG5cclxuLmltZy1zaXplIHtcclxuICBoZWlnaHQ6IDVlbTtcclxuICB3aWR0aDogNWVtO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzBkNmVmZDtcclxufVxyXG5cclxuLm1zLW41IHtcclxuICBtYXJnaW4tbGVmdDogLTIuMnJlbSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6262:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/custom-validators/password-confirmation-validator.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordConfirmationValidatorService": () => (/* binding */ PasswordConfirmationValidatorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PasswordConfirmationValidatorService {
    constructor() { }
    validateConfirmPassword(passwordControl) {
        return (confirmationControl) => {
            const confirmValue = confirmationControl.value;
            const passwordValue = passwordControl.value;
            if (confirmValue !== passwordValue && confirmValue === '') {
                return { mustMatch: true };
            }
            return null;
        };
    }
}
PasswordConfirmationValidatorService.ɵfac = function PasswordConfirmationValidatorService_Factory(t) { return new (t || PasswordConfirmationValidatorService)(); };
PasswordConfirmationValidatorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PasswordConfirmationValidatorService, factory: PasswordConfirmationValidatorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7361:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/authentication.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




class AuthenticationService {
    constructor(_jwtHelper, _router) {
        this._jwtHelper = _jwtHelper;
        this._router = _router;
        this._authChangeSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.authChanged = this._authChangeSub.asObservable();
    }
    logout() {
        localStorage.removeItem("token");
        this.sendAuthStateChangeNotification(false);
        this._router.navigate(['/login']);
    }
    sendAuthStateChangeNotification(isAuthenticated) {
        this._authChangeSub.next(isAuthenticated);
    }
    isUserAuthenticated() {
        const token = localStorage.getItem("token");
        return token && !this._jwtHelper.isTokenExpired(token);
    }
    isUserAdmin() {
        // check undefined
        const token = localStorage.getItem("token");
        const decodedToken = this._jwtHelper.decodeToken(token);
        const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        return role === 'Administrator';
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2422:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/error-handling.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorHandlingService": () => (/* binding */ ErrorHandlingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);



class ErrorHandlingService {
    constructor(_router) {
        this._router = _router;
    }
    intercept(req, next) {
        return next.handle(req)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.catchError)((error) => {
            let errorMessage = this.handleError(error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(errorMessage);
        }));
    }
    handleError(error) {
        if (error.status === 404) {
            return this.handleNotFound(error);
        }
        else if (error.status === 400) {
            return this.handleBadRequest(error);
        }
        else if (error.status === 401) {
            return this.handleUnauthorized(error);
        }
        return null;
    }
    handleUnauthorized(error) {
        if (this._router.url === '/login') {
            return 'Authenitcation failed. Wrong Username or Password';
        }
        else {
            this._router.navigate(['/login'], { queryParams: { returnUrl: this._router.url } });
            return error.message;
        }
    }
    handleNotFound(error) {
        this._router.navigate(['/404']);
        return error.message;
    }
    handleBadRequest(error) {
        var _a;
        if (this._router.url === '/registration') {
            let message = '';
            const values = Object.values(error.error.errors);
            values.map((m) => {
                message += m + '<br>';
            });
            return message.slice(0, -4);
        }
        else {
            return (_a = error.error) !== null && _a !== void 0 ? _a : error.message;
        }
    }
}
ErrorHandlingService.ɵfac = function ErrorHandlingService_Factory(t) { return new (t || ErrorHandlingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ErrorHandlingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ErrorHandlingService, factory: ErrorHandlingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6852:
/*!****************************************************!*\
  !*** ./src/app/shared/services/request.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestService": () => (/* binding */ RequestService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class RequestService {
    constructor(_http) {
        this._http = _http;
        this._url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
    }
    registerUser(user) {
        return this._http.post(this._url + 'account/Registration', user);
    }
    loginUser(user) {
        return this._http.post(this._url + 'account/Login', user);
    }
    getData(route) {
        console.log(this._url + route);
        return this._http.get(this._url + route);
    }
    setReview(review) {
        return this._http.post(this._url + 'review/SaveReview', review);
    }
}
RequestService.ɵfac = function RequestService_Factory(t) { return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RequestService, factory: RequestService.ɵfac });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _pipes_date_without_time_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/date-without-time.pipe */ 6955);
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rating/rating.component */ 3355);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.component */ 6392);
/* harmony import */ var _book_reviews_book_reviews_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../book-reviews/book-reviews.component */ 2699);
/* harmony import */ var _modal_success_modal_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal-success/modal-success.component */ 2976);
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../review/review.component */ 354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);












class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_date_without_time_pipe__WEBPACK_IMPORTED_MODULE_0__.DateWithoutTimePipe,
        _rating_rating_component__WEBPACK_IMPORTED_MODULE_1__.RatingComponent,
        _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent,
        _book_reviews_book_reviews_component__WEBPACK_IMPORTED_MODULE_3__.BookReviewsComponent,
        _modal_success_modal_success_component__WEBPACK_IMPORTED_MODULE_4__.ModalSuccessComponent,
        _review_review_component__WEBPACK_IMPORTED_MODULE_5__.ReviewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
        _pipes_date_without_time_pipe__WEBPACK_IMPORTED_MODULE_0__.DateWithoutTimePipe,
        _rating_rating_component__WEBPACK_IMPORTED_MODULE_1__.RatingComponent,
        _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent,
        _book_reviews_book_reviews_component__WEBPACK_IMPORTED_MODULE_3__.BookReviewsComponent,
        _modal_success_modal_success_component__WEBPACK_IMPORTED_MODULE_4__.ModalSuccessComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: 'https://localhost:5001/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map