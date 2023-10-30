import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    constructor() {}
    modalShown: boolean = false;
    // codice da non buttare, possibile utilizzo in seguito (funzione apertura, chiusura della modale)
    // openModal() {
    //     this.modalShown = true;
    //     const body: any = document.getElementsByClassName("body");
    //     body.classList.add("d-block");
    // }
    // closeModal() {
    //     this.modalShown = false;
    //     const body: any = document.querySelector("body");
    //     body.classList.remove("block");
    // }
    ngOnInit() {}
}
