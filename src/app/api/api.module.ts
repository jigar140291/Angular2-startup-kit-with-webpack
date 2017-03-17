
import {NgModule} from '@angular/core';
import {httpService} from "./http.service";

@NgModule({
    imports : [],
    providers: [
        {provide : 'httpService', useClass : httpService}
    ]
})

export class apiModule{}