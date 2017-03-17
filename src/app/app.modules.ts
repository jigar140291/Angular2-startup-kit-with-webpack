import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {partialModule} from "./partials/partial.module";
import {pageModule} from "./pages/page.module";
import {AppRoutingModule} from "./app.routing.module";
import { HttpModule } from '@angular/http';
import {UrlSerializer} from '@angular/router';

@NgModule({
    imports : [BrowserModule, CommonModule, HttpModule, partialModule, pageModule, AppRoutingModule],
    declarations : [AppComponent],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})

export class AppModule{}