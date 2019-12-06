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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _service_authguard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/authguard.service */ "./src/app/service/authguard.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/update-employee/update-employee.component */ "./src/app/components/update-employee/update-employee.component.ts");
/* harmony import */ var _components_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-employee/create-employee.component */ "./src/app/components/create-employee/create-employee.component.ts");
/* harmony import */ var _components_list_employee_list_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list-employee/list-employee.component */ "./src/app/components/list-employee/list-employee.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");










var routes = [
    { path: '', pathMatch: 'full', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'employees', component: _components_list_employee_list_employee_component__WEBPACK_IMPORTED_MODULE_6__["ListEmployeeComponent"], canActivate: [_service_authguard_service__WEBPACK_IMPORTED_MODULE_2__["AuthguardService"]] },
    { path: 'addEmployee', component: _components_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_5__["CreateEmployeeComponent"], canActivate: [_service_authguard_service__WEBPACK_IMPORTED_MODULE_2__["AuthguardService"]] },
    { path: 'editEmployee/:id', component: _components_update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_4__["UpdateEmployeeComponent"], canActivate: [_service_authguard_service__WEBPACK_IMPORTED_MODULE_2__["AuthguardService"]] },
    { path: '404', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"] },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
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

module.exports = "<app-menu></app-menu>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        // tslint:disable-next-line:only-arrow-functions
        document.addEventListener('deviceready', function () {
            alert(device.platform);
        }, false);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/create-employee/create-employee.component */ "./src/app/components/create-employee/create-employee.component.ts");
/* harmony import */ var _components_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/employee-details/employee-details.component */ "./src/app/components/employee-details/employee-details.component.ts");
/* harmony import */ var _components_list_employee_list_employee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/list-employee/list-employee.component */ "./src/app/components/list-employee/list-employee.component.ts");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _components_update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/update-employee/update-employee.component */ "./src/app/components/update-employee/update-employee.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _core_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/material */ "./src/app/core/material.ts");
/* harmony import */ var _service_authguard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/authguard.service */ "./src/app/service/authguard.service.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_8__["CreateEmployeeComponent"],
                _components_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeDetailsComponent"],
                _components_list_employee_list_employee_component__WEBPACK_IMPORTED_MODULE_10__["ListEmployeeComponent"],
                _components_update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_13__["UpdateEmployeeComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _core_material__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_20__["AngularFontAwesomeModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_22__["DataTablesModule"]
            ],
            providers: [_service_employee_service__WEBPACK_IMPORTED_MODULE_11__["EmployeeService"], src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"], _service_authguard_service__WEBPACK_IMPORTED_MODULE_18__["AuthguardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create-employee/create-employee.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/create-employee/create-employee.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLWVtcGxveWVlL2NyZWF0ZS1lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/create-employee/create-employee.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/create-employee/create-employee.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-lg-6\">\r\n    <h3>Create Employee</h3>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div [hidden]=\"submitted\">\r\n                <form (ngSubmit)=\"onSubmit()\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\" class=\"font-weight-bold\">User Name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"userName\" required [(ngModel)]=\"employee.userName\" name=\"userName\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\" class=\"font-weight-bold\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" id=\"password\" required [(ngModel)]=\"employee.password\" name=\"password\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\" class=\"font-weight-bold\">First Name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"firstName\" required [(ngModel)]=\"employee.firstName\" name=\"firstName\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\" class=\"font-weight-bold\">Last Name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"lastName\" required [(ngModel)]=\"employee.lastName\" name=\"lastName\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\" class=\"font-weight-bold\">Email Address</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"emailId\" required [(ngModel)]=\"employee.email\" name=\"emailId\">\r\n                    </div>\r\n\r\n                    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n                </form>\r\n            </div>\r\n\r\n            <div [hidden]=\"!submitted\">\r\n                <h4>You submitted successfully!</h4>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/create-employee/create-employee.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-employee/create-employee.component.ts ***!
  \*************************************************************************/
/*! exports provided: CreateEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEmployeeComponent", function() { return CreateEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_employee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/employee */ "./src/app/core/employee.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CreateEmployeeComponent = /** @class */ (function () {
    function CreateEmployeeComponent(http, empService, router) {
        this.http = http;
        this.empService = empService;
        this.router = router;
        this.employee = new src_app_core_employee__WEBPACK_IMPORTED_MODULE_4__["Employee"]();
        this.submitted = false;
        this.Employee = [];
    }
    CreateEmployeeComponent.prototype.ngOnInit = function () {
        console.log('calling init in create employee....');
        this.reloadEmployees();
    };
    CreateEmployeeComponent.prototype.reloadEmployees = function () {
        this.getEmployee();
    };
    CreateEmployeeComponent.prototype.getEmployee = function () {
        var _this = this;
        this.empService.getAllEmployees().subscribe(function (data) {
            console.log('getAllEmployees...', data);
            _this.Employee = data;
        });
    };
    CreateEmployeeComponent.prototype.newEmployee = function () {
        this.submitted = false;
        this.employee = new src_app_core_employee__WEBPACK_IMPORTED_MODULE_4__["Employee"]();
    };
    CreateEmployeeComponent.prototype.save = function () {
        console.log('emp before save service call...', this.Employee);
        this.empService.createEmployee(this.employee)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.employee = new src_app_core_employee__WEBPACK_IMPORTED_MODULE_4__["Employee"]();
        this.gotolist();
    };
    CreateEmployeeComponent.prototype.gotolist = function () {
        this.router.navigate(['/employees']);
        this.reloadEmployees();
    };
    CreateEmployeeComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.save();
    };
    CreateEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-create-employee',
            template: __webpack_require__(/*! ./create-employee.component.html */ "./src/app/components/create-employee/create-employee.component.html"),
            styles: [__webpack_require__(/*! ./create-employee.component.css */ "./src/app/components/create-employee/create-employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CreateEmployeeComponent);
    return CreateEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-details/employee-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/employee-details/employee-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtZGV0YWlscy9lbXBsb3llZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employee-details/employee-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/employee-details/employee-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  employee-details works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/employee-details/employee-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/employee-details/employee-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeeDetailsComponent = /** @class */ (function () {
    function EmployeeDetailsComponent() {
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
    };
    EmployeeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-details',
            template: __webpack_require__(/*! ./employee-details.component.html */ "./src/app/components/employee-details/employee-details.component.html"),
            styles: [__webpack_require__(/*! ./employee-details.component.css */ "./src/app/components/employee-details/employee-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  header works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".masthead {\r\n    min-height: 30rem;\r\n    position: relative;\r\n    display: table;\r\n    width: 100%;\r\n    height: auto;\r\n    padding-top: 8rem;\r\n    padding-bottom: 8rem;\r\n    background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0.1))), url('bg-masthead.jpg');\r\n    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), url('bg-masthead.jpg');\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.masthead h1 {\r\n    font-size: 4rem;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .masthead {\r\n        height: 100vh;\r\n    }\r\n    .masthead h1 {\r\n        font-size: 5.5rem;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwrSUFBc0k7SUFBdEksc0hBQXNJO0lBQ3RJLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXN0aGVhZCB7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogOHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cmVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxMDAlKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JnLW1hc3RoZWFkLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLm1hc3RoZWFkIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLm1hc3RoZWFkIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG4gICAgLm1hc3RoZWFkIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDUuNXJlbTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-lg-6\">\r\n    <header class=\"masthead d-flex\">\r\n        <div class=\"container text-center my-auto\">\r\n            <h1 class=\"mb-1\">dTS</h1>\r\n            <h3 class=\"mb-5\">\r\n                <em>A software for antitracking system ! </em>\r\n            </h3>\r\n            <a class=\"btn btn-primary btn-xl js-scroll-trigger\" href=\"#\" (click)=\"login()\">Login</a>\r\n        </div>\r\n        <div class=\"overlay\"></div>\r\n    </header>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/list-employee/list-employee.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/list-employee/list-employee.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1lbXBsb3llZS9saXN0LWVtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/list-employee/list-employee.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/list-employee/list-employee.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3> User List </h3>\r\n    <!-- No data message -->\r\n    <p *ngIf=\"Employee.length <= 0\" class=\"no-data text-center alert-warning\"><strong>Server error or there is no User added yet!</strong></p>\r\n\r\n    <table class=\"table table-striped table-bordered table-sm row-border hover\" datatable [dtOptions]=\"dtOptions\">\r\n        <thead>\r\n            <tr>\r\n                <th scope=\"col\" hidden>Employee ID</th>\r\n                <th scope=\"col\">User Name</th>\r\n                <th scope=\"col\">First Name</th>\r\n                <th scope=\"col\">Last Name</th>\r\n                <th scope=\"col\">Email</th>\r\n                <th scope=\"col center\">Action</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let employee of Employee; let i = index\">\r\n                <th scope=\"row\" hidden>{{employee.id}}</th>\r\n                <td>{{employee.userName}}</td>\r\n                <td>{{employee.firstName}}</td>\r\n                <td>{{employee.lastName}}</td>\r\n                <td>{{employee.email}}</td>\r\n                <td class=\"text-center edit-block\">\r\n                    <span class=\"edit\" [routerLink]=\"['/editEmployee/', employee.id]\">\r\n            <button type=\"button\" class=\"btn btn-success btn-sm\">Edit</button>\r\n          </span>&nbsp;&nbsp;\r\n                    <span class=\"delete\" (click)=\"removeEmployee(employee, i)\">\r\n            <button type=\"button\" class=\"btn btn-danger btn-sm\">Delete</button>\r\n          </span>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n    <!-- Employee list -->\r\n    <!-- <table class=\"table table-bordered\" *ngIf=\"Employee.length > 0\">\r\n        <thead class=\"table-success\">\r\n            <tr>\r\n                <th scope=\"col\" hidden>Employee ID</th>\r\n                <th scope=\"col\">User Name</th>\r\n                <th scope=\"col\">First Name</th>\r\n                <th scope=\"col\">Last Name</th>\r\n                <th scope=\"col\">Email</th>\r\n                <th scope=\"col center\">Action</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let employee of Employee; let i = index\">\r\n                <th scope=\"row\" hidden>{{employee.id}}</th>\r\n                <td>{{employee.userName}}</td>\r\n                <td>{{employee.firstName}}</td>\r\n                <td>{{employee.lastName}}</td>\r\n                <td>{{employee.email}}</td>\r\n                <td class=\"text-center edit-block\">\r\n                    <span class=\"edit\" [routerLink]=\"['/editEmployee/', employee.id]\">\r\n            <button type=\"button\" class=\"btn btn-success btn-sm\">Edit</button>\r\n          </span>&nbsp;&nbsp;\r\n                    <span class=\"delete\" (click)=\"removeEmployee(employee, i)\">\r\n            <button type=\"button\" class=\"btn btn-danger btn-sm\">Delete</button>\r\n          </span>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table> -->\r\n</div>"

/***/ }),

/***/ "./src/app/components/list-employee/list-employee.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/list-employee/list-employee.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEmployeeComponent", function() { return ListEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ListEmployeeComponent = /** @class */ (function () {
    function ListEmployeeComponent(http, empService) {
        this.http = http;
        this.empService = empService;
        this.Employee = [];
        this.dtOptions = {};
    }
    ListEmployeeComponent.prototype.ngOnInit = function () {
        this.reloadAllEmployees();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            data: this.Employee
        };
    };
    ListEmployeeComponent.prototype.reloadAllEmployees = function () {
        this.getAllEmployee();
    };
    ListEmployeeComponent.prototype.getAllEmployee = function () {
        var _this = this;
        this.empService.getAllEmployees().subscribe(function (data) {
            console.log('getAllEmployees===========>', data);
            _this.Employee = data;
        });
    };
    ListEmployeeComponent.prototype.removeEmployee = function (employee, index) {
        var _this = this;
        if (window.confirm('Are you sure to delete?')) {
            this.empService.deleteEmployee(employee.id).subscribe(function (data) {
                _this.Employee.splice(index, 1);
                // console.log('removeEmployee...', data);
                _this.reloadAllEmployees();
            }, function (error) { return console.log(error); });
        }
    };
    ListEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-list-employee',
            template: __webpack_require__(/*! ./list-employee.component.html */ "./src/app/components/list-employee/list-employee.component.html"),
            styles: [__webpack_require__(/*! ./list-employee.component.css */ "./src/app/components/list-employee/list-employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]])
    ], ListEmployeeComponent);
    return ListEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-lg-6\">\r\n    <h3 class=\"text-left\">Login</h3>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form class=\"form-group\">\r\n                <div class=\"alert alert-warning\" *ngIf='invalidLogin'>{{errorMessage}}</div>\r\n                <div class=\"alert alert-success\" *ngIf='loginSuccess'>{{successMessage}}</div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"email\">User Name :</label>\r\n                    <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"username\" [(ngModel)]=\"employee.userName\" placeholder=\"Enter User Name\" name=\"username\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"pwd\">Password:</label>\r\n                    <input type=\"password\" autocomplete=\"off\" class=\"form-control\" [(ngModel)]=\"employee.password\" id=\"password\" placeholder=\"Enter password\" name=\"password\">\r\n                </div>\r\n                <button (click)=handleLogin() class=\"btn btn-success\">Login</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/employee */ "./src/app/core/employee.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/authentication.service */ "./src/app/service/authentication.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, route, router, authService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.Employee = [];
        this.employee = new _core_employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]();
        this.errorMessage = 'Invalid Credentials';
        this.invalidLogin = false;
        this.loginSuccess = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // handleLogin() {
    //   this.authService.authenticationService(this.username, this.password).subscribe((result) => {
    //     this.invalidLogin = false;
    //     this.loginSuccess = true;
    //     this.successMessage = 'Login Successful.';
    //     this.router.navigate(['/employees']);
    //   }, () => {
    //     this.invalidLogin = true;
    //     this.loginSuccess = false;
    //   });
    // }
    LoginComponent.prototype.handleLogin = function () {
        // console.log(this.employee.userName + '...' + this.employee.password);
        if (this.authService.authenticate(this.employee.userName, this.employee.password)) {
            this.router.navigate(['/employees']);
            this.invalidLogin = false;
        }
        else {
            this.invalidLogin = true;
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n        <div><a href=\"https://www.dts.com\" class=\"navbar-brand\">dTS</a></div>\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <!-- <button *ngIf=\"loginservice.isUserLoggedIn()\" mat-button mat-flat-button color=\"primary\" (click)=\"showEmployees();\">Employees</button> -->\r\n                <a *ngIf=\" loginservice.isUserLoggedIn() \" href=\"/employees \" class=\"nav-link \" role=\"button \" routerLinkActive=\"active \">Employees</a>\r\n            </li>\r\n            <li class=\"nav-item \" style=\"margin-left: 10px; \">\r\n                <button *ngIf=\"loginservice.isUserLoggedIn()\" mat-button mat-flat-button color=\"primary\" (click)=\"addEmployee();\">Add</button>\r\n                <!-- <a *ngIf=\"loginservice.isUserLoggedIn() \" href=\"/addEmployee \" class=\"nav-link \" role=\"button \" routerLinkActive=\"active \">Add</a> -->\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav navbar-collapse justify-content-end \">\r\n            <li>\r\n                <a *ngIf=\"loginservice.isUserLoggedIn() \" class=\"nav-link \" href=\" \" (click)=handleLogout()>Logout</a>\r\n            </li>\r\n            <!-- <li>\r\n                <a *ngIf=\"! loginservice.isUserLoggedIn() \" class=\"nav-link \" href=\"/login \">LogIn</a>\r\n            </li> -->\r\n        </ul>\r\n    </nav>\r\n</header>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, loginservice) {
        this.router = router;
        this.loginservice = loginservice;
        // tslint:disable-next-line:no-inferrable-types
        this.isLoggedIn = true;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.loginservice.isUserLoggedIn();
    };
    MenuComponent.prototype.showEmployees = function () {
        this.router.navigate(['/employees']);
    };
    MenuComponent.prototype.addEmployee = function () {
        // this.router.navigateByUrl('/addEmployee');
        this.router.navigate(['/addEmployee']);
    };
    MenuComponent.prototype.handleLogout = function () {
        console.log('logout clicked...');
        this.loginservice.logOut();
        this.router.navigate(['/login']);
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\r\n    height: 85vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbiB7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container h-100\">\r\n    <div class=\"row h-100 justify-content-center align-items-center\">\r\n        <div class=\"d-flex justify-content-center align-items-center\" id=\"main\">\r\n            <h1 class=\"mr-3 pr-3 align-top border-right inline-block align-content-center\">403</h1>\r\n            <div class=\"inline-block align-middle\">\r\n                <h2 class=\"font-weight-normal lead\" id=\"desc\">\r\n                    <!-- <fa name=\"cog\" animation=\"spin\"></fa> -->\r\n                    page you requested was not found.\r\n                </h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/update-employee/update-employee.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/update-employee/update-employee.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLWVtcGxveWVlL3VwZGF0ZS1lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/update-employee/update-employee.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/update-employee/update-employee.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-lg-6\">\r\n    <h3>Update Employee</h3>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div [hidden]=\"submitted\">\r\n                <form (ngSubmit)=\"onSubmit()\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">User Name</label>\r\n                        <input type=\"text\" readonly=\"readonly\" class=\"form-control\" id=\"userName\" required [(ngModel)]=\"employee.userName\" name=\"userName\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">password</label>\r\n                        <input type=\"password\" [readOnly]=\"this.isEditable\" class=\"form-control\" id=\"password\" required [(ngModel)]=\"employee.password\" name=\"password\">\r\n                        <button style=\"margin-top:5px;\" type=\"button\" (click)=\"handleChangePassword()\" class=\"btn btn-info btn-sm\">Change Password</button>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">First Name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"firstName\" required [(ngModel)]=\"employee.firstName\" name=\"firstName\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Last Name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"lastName\" required [(ngModel)]=\"employee.lastName\" name=\"lastName\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Email</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"emailId\" required [(ngModel)]=\"employee.email\" name=\"email\">\r\n                    </div>\r\n\r\n                    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/update-employee/update-employee.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/update-employee/update-employee.component.ts ***!
  \*************************************************************************/
/*! exports provided: UpdateEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEmployeeComponent", function() { return UpdateEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_employee__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/employee */ "./src/app/core/employee.ts");






var UpdateEmployeeComponent = /** @class */ (function () {
    function UpdateEmployeeComponent(route, router, http, empService) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.empService = empService;
        this.submitted = false;
        this.isEditable = true;
    }
    UpdateEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.submitted = false;
        this.employee = new src_app_core_employee__WEBPACK_IMPORTED_MODULE_5__["Employee"]();
        this.id = this.route.snapshot.params.id;
        console.log('ID Value...', this.id);
        this.empService.getEmployee(this.id).subscribe(function (data) {
            console.log('Data ...', data);
            _this.employee = data;
        }, function (error) { return console.log(error); });
    };
    UpdateEmployeeComponent.prototype.updateEmployee = function () {
        this.empService.updateEmployee(this.id, this.employee)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.employee = new src_app_core_employee__WEBPACK_IMPORTED_MODULE_5__["Employee"]();
        this.gotoList();
    };
    UpdateEmployeeComponent.prototype.onSubmit = function () {
        this.updateEmployee();
        this.submitted = true;
    };
    UpdateEmployeeComponent.prototype.gotoList = function () {
        this.router.navigate(['/employees']);
    };
    UpdateEmployeeComponent.prototype.handleChangePassword = function () {
        console.log('change pwd field enabled back...');
        this.isEditable = false;
    };
    UpdateEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-update-employee',
            template: __webpack_require__(/*! ./update-employee.component.html */ "./src/app/components/update-employee/update-employee.component.html"),
            styles: [__webpack_require__(/*! ./update-employee.component.css */ "./src/app/components/update-employee/update-employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]])
    ], UpdateEmployeeComponent);
    return UpdateEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/core/employee.ts":
/*!**********************************!*\
  !*** ./src/app/core/employee.ts ***!
  \**********************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/core/material.ts":
/*!**********************************!*\
  !*** ./src/app/core/material.ts ***!
  \**********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            // tslint:disable-next-line:max-line-length
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"]],
            // tslint:disable-next-line:max-line-length
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        // BASE_PATH: 'http://localhost:8080'
        this.baseUrl = 'http://localhost:8080/api/login';
        this.USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
    }
    // authenticationService(username: string, password: string) {
    //   return this.http.get(`http://localhost:8080/api/v1/basicauth`,
    //     { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
    //       this.username = username;
    //       this.password = password;
    //       this.registerSuccessfulLogin(username, password);
    //     }));
    // }
    // createBasicAuthToken(username: string, password: string) {
    //   return 'Basic ' + window.btoa(username + ':' + password);
    // }
    // registerSuccessfulLogin(username, password) {
    //   sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    // }
    // logout() {
    //   sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    //   this.username = null;
    //   this.password = null;
    // }
    // isUserLoggedIn() {
    //   let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    //   if (user === null) return false
    //   return true
    // }
    // getLoggedInUserName() {
    //   let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    //   if (user === null) return ''
    //   return user
    // }
    AuthenticationService.prototype.authenticate = function (username, password) {
        if (username === 'ramanujm' && password === 'password') {
            sessionStorage.setItem('username', username);
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('username');
        // console.log(!(user === null));
        return !(user === null);
    };
    AuthenticationService.prototype.logOut = function () {
        sessionStorage.removeItem('username');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/authguard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/authguard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthguardService = /** @class */ (function () {
    function AuthguardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthguardService.prototype.canActivate = function () {
        if (this.authService.isUserLoggedIn()) {
            return true;
        }
        else {
            return this.router.navigateByUrl('/login');
        }
    };
    AuthguardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/service/employee.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/employee.service.ts ***!
  \*********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        // tslint:disable-next-line:no-inferrable-types
        this.baseUrl = 'http://localhost:8080/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Fetch all employee
    EmployeeService.prototype.getAllEmployees = function () {
        return this.http.get(this.baseUrl + "/getEmployeesList");
    };
    // Create
    EmployeeService.prototype.createEmployee = function (data) {
        // let url = `${this.baseUrl}/createEmployee`;
        return this.http.post(this.baseUrl + "/createEmployee", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
    };
    // Get employee
    EmployeeService.prototype.getEmployee = function (id) {
        console.log('getEmployee # id => ', id);
        var url = this.baseUrl + "/getEmployeeById/" + id;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
    };
    // Update employee
    EmployeeService.prototype.updateEmployee = function (id, data) {
        var url = this.baseUrl + "/update/" + id;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
    };
    // Delete employee
    EmployeeService.prototype.deleteEmployee = function (id) {
        var url = this.baseUrl + "/deleteEmployee/" + id;
        return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
    };
    // Error handling
    EmployeeService.prototype.errorMgmt = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
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

module.exports = __webpack_require__(/*! C:\Users\Ramanuj\Documents\GitHub\dts-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map