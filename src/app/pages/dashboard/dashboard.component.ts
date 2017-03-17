
import {Component} from '@angular/core';

declare var $;
declare let require;

@Component({
    selector: 'dashboard',
    template: require(`./dashboard.component.html`)
})

export class dashBoardComponent {
    constructor(){

    }
}