import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { CardsComponent } from "./cards/cards.component";
import { DetailsComponent } from "./details/details.component";
import { Navbar } from "./navbar/navbar.component";
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        Navbar,
        HomeComponent,
        CardsComponent,
        DetailsComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
