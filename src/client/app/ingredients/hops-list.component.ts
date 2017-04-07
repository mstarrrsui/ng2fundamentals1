import { Component } from "@angular/core";

@Component({
    selector: "hops-list",
    templateUrl: "app/ingredients/hops-list.component.html"
})
export class HopsListComponent {
    hopdata = {
        hsi: "25.0000000",
        id: 28,
        type: "Both",
        betaAcid: "4.0000000",
        description: `Special aroma hops released in 2007.  Imparts high alpha/oil content but low cohumulone.
        Aroma: Adds interesting citrus and tropical fruit character to the beer.
        Substitutes: Unknown
        `,
        alphaAcid: "12.0000000",
        useIn: "Boil",
        name: "Citra",
        countryOfOrigin: "U.S."
    };
}
