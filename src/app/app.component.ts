
import {Component} from '@angular/core';
declare let require;

@Component({
    selector: 'my-app',
    template: require(`./partials/partial.html`)
})

export class AppComponent {}