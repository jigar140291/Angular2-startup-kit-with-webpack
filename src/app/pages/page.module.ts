import {NgModule} from '@angular/core';
import {pageComponent} from "./page.component";
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {apiModule} from "../api/api.module";
import {dashBoardComponent} from "./dashboard/dashboard.component";

@NgModule({
    imports : [RouterModule, CommonModule, apiModule],
    declarations : [
        pageComponent,
        dashBoardComponent
    ],
    exports: [
        pageComponent,
        dashBoardComponent
    ]
})

export class pageModule{}