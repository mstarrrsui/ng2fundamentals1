import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Hop } from "../model/hop.model";

import "rxjs/add/operator/toPromise";


@Injectable()
export class IngredientService {

    constructor(private http: Http) {}

    getHops(): Observable<Hop[]> {
        return this.http.get("/api/hops")
                //.toPromise()
                //.then(response => response.json() as Hop[])
                .map((res: Response) => res.json() as Hop[])
                .catch(this.handleError);
    }

    // private handleError(error: any): Promise<any> {
    //     console.error("An error occurred", error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }

    public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }

}
