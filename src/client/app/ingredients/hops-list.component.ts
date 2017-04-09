import { Component } from "@angular/core";
import { IngredientService } from "./shared/ingredient.service";
import { Hop } from "./model/hop.model";

@Component({
    selector: "hops-list",
    templateUrl: "app/ingredients/hops-list.component.html"
})
export class HopsListComponent {

    hopdata: Hop[];

    constructor(private ingredientService: IngredientService) { }

    ngOnInit() {
        this.ingredientService.getHops().then( hops => this.hopdata = hops);
    }

    handleItemClicked(item: any) {
        console.log("received:", item.name);
    }
}
