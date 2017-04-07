import { Component, Input } from "@angular/core";

@Component({
    selector: "hops-item",
    templateUrl: "app/ingredients/hops-item.component.html"
})
export class HopsItemComponent {
    @Input() hop: any;
}
