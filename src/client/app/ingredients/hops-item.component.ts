import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "hops-item",
    templateUrl: "app/ingredients/hops-item.component.html"
})
export class HopsItemComponent {
    @Input() hop: any;
    @Output() itemClick = new EventEmitter();

    handleClickMe() {
        // console.log("clicked item!");
        this.itemClick.emit(this.hop);
    }
}
