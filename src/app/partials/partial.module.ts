import {NgModule} from '@angular/core';
import {DashBoardHeaderComponent} from "./header/header.component";
import {DashBoardFooterComponent} from "./footer/footer.component";

@NgModule({
    imports : [],
    declarations : [
        DashBoardHeaderComponent,
        DashBoardFooterComponent
    ],
    exports: [
        DashBoardHeaderComponent,
        DashBoardFooterComponent
    ]
})

export class partialModule{}