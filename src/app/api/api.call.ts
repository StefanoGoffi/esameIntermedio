import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class CocktailService {
    private apiSearch =
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
    private apiLookUp =
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";
    constructor(private http: HttpClient) {}
    getDrinks(): Observable<any> {
        return this.http.get(this.apiSearch + "f=a");
    }
    getDrinksById(id: string): Observable<any> {
        return this.http.get(this.apiLookUp + "i=" + id);
    }
}
