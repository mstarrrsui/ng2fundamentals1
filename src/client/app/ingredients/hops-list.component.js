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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ingredient_service_1 = require("./shared/ingredient.service");
var toastr_service_1 = require("../common/toastr.service");
var HopsListComponent = (function () {
    function HopsListComponent(ingredientService, toastr) {
        this.ingredientService = ingredientService;
        this.toastr = toastr;
    }
    HopsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredientService.getHops().subscribe(function (data) { return _this.hopdata = data; });
    };
    HopsListComponent.prototype.handleItemClicked = function (item) {
        console.log("received:", item.name);
        this.toastr.success(item.name);
    };
    return HopsListComponent;
}());
HopsListComponent = __decorate([
    core_1.Component({
        selector: "hops-list",
        templateUrl: "app/ingredients/hops-list.component.html"
    }),
    __metadata("design:paramtypes", [ingredient_service_1.IngredientService, toastr_service_1.ToastrService])
], HopsListComponent);
exports.HopsListComponent = HopsListComponent;
//# sourceMappingURL=hops-list.component.js.map