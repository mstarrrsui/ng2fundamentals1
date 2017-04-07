"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HopsListComponent = (function () {
    function HopsListComponent() {
        this.hopdata = {
            hsi: "25.0000000",
            id: 28,
            type: "Both",
            betaAcid: "4.0000000",
            description: "Special aroma hops released in 2007.  Imparts high alpha/oil content but low cohumulone.\n        Aroma: Adds interesting citrus and tropical fruit character to the beer.\n        Substitutes: Unknown\n        ",
            alphaAcid: "12.0000000",
            useIn: "Boil",
            name: "Citra",
            countryOfOrigin: "U.S."
        };
    }
    HopsListComponent.prototype.handleItemClicked = function (item) {
        console.log("received:", item.name);
    };
    return HopsListComponent;
}());
HopsListComponent = __decorate([
    core_1.Component({
        selector: "hops-list",
        templateUrl: "app/ingredients/hops-list.component.html"
    })
], HopsListComponent);
exports.HopsListComponent = HopsListComponent;
//# sourceMappingURL=hops-list.component.js.map