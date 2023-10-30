import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CardsComponent } from "./cards/cards.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "cards", component: CardsComponent },
    { path: "details/:idDrink", component: DetailsComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    // { path: '**', component: PageNotFoundComponent },  // 404 page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
