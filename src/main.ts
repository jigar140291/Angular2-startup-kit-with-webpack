import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.modules';

import './app/app.scss';
console.log('bootstr');
platformBrowserDynamic().bootstrapModule(AppModule);