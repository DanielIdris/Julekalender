import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {KalenderService} from "./services/kalender.service";
import { VinnerComponent } from './components/vinner/vinner.component';

@NgModule({
    declarations: [
        AppComponent,
        VinnerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FontAwesomeModule,
    ],
    providers: [KalenderService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
