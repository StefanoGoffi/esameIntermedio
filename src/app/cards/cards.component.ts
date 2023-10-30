import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CocktailService } from "../api/api.call";

@Component({
    selector: "cards-component",
    templateUrl: "./cards.component.html",
    styleUrls: ["./cards.component.css"],
})
export class CardsComponent implements OnInit {
    drinks: any;
    constructor(
        private router: Router,
        private cocktailService: CocktailService
    ) {}

    navigateTo(drink: any): void {
        this.router.navigate(["/details", drink.idDrink]);
    }
    ngOnInit() {
        this.cocktailService.getDrinks().subscribe((data) => {
            this.drinks = data.drinks;
        });
    }
}
