import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CocktailService } from "../api/api.call";
import { DrinkType } from "../model/drink.types"; // Assicurati di importare il tuo tipo DrinkType

@Component({
    selector: "details-component",
    templateUrl: "./details.component.html",
    styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
    drink: any;
    selectDrink: DrinkType = {
        nome: "",
        foto: "",
        ingredienti: [""],
        misure: [""],
        descrizioneIt: "",
        descrizioneEn: "",
        descrizioneDe: "",
        descrizioneFr: "",
        categoria: "",
        bicchiere: "",
    };
    dataLoaded: boolean = false;

    constructor(
        private cocktailService: CocktailService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        const idDrink = this.route.snapshot.params["idDrink"];
        this.cocktailService.getDrinksById(idDrink).subscribe((data) => {
            this.drink = data.drinks[0];
            console.log(this.drink);
            this.selectDrink.nome = this.drink.strDrink;
            this.selectDrink.foto = this.drink.strDrinkThumb;
            this.selectDrink.descrizioneIt = this.drink.strInstructionsIT;
            this.selectDrink.descrizioneEn = this.drink.strInstructions;
            this.selectDrink.descrizioneDe = this.drink.strInstructionsDE;
            this.selectDrink.descrizioneFr = this.drink.strInstructionsFR;
            if (this.selectDrink.descrizioneIt == null) {
                this.selectDrink.descrizioneIt = "Non Pervenuto ❌";
            }
            if (this.selectDrink.descrizioneEn == null) {
                this.selectDrink.descrizioneEn = "Not Available ❌";
            }
            if (this.selectDrink.descrizioneDe == null) {
                this.selectDrink.descrizioneDe = "Nicht Verfügbar ❌";
            }
            if (this.selectDrink.descrizioneFr == null) {
                this.selectDrink.descrizioneFr = "Ne Pas Disponible ❌";
            }
            this.selectDrink.categoria = this.drink.strCategory;
            this.selectDrink.bicchiere = this.drink.strGlass;
            this.selectDrink.ingredienti = [""];
            this.selectDrink.misure = [""];
            for (let i = 1; i <= 15; i++) {
                let ingredientName: string = this.drink["strIngredient" + i];
                let measure: string = this.drink["strMeasure" + i];
                if (ingredientName && ingredientName !== "" && measure) {
                    this.selectDrink.ingredienti.push(ingredientName);
                    this.selectDrink.misure.push(measure);
                }
            }
            this.selectDrink.ingredienti.shift();
            this.selectDrink.misure.shift();
            this.dataLoaded = true; // Imposta dataLoaded su true dopo l'estrazione dei dati
            console.log(this.selectDrink.ingredienti);
            console.log(this.selectDrink.misure);
        });
    }
}
