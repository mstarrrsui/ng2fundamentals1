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
var HopsItemComponent = (function () {
    function HopsItemComponent() {
    }
    return HopsItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HopsItemComponent.prototype, "hop", void 0);
HopsItemComponent = __decorate([
    core_1.Component({
        selector: "hops-item",
        templateUrl: "app/ingredients/hops-item.component.html"
    })
], HopsItemComponent);
exports.HopsItemComponent = HopsItemComponent;
//# sourceMappingURL=hops-item.component.js.map