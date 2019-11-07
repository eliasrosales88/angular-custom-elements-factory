import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {ButtonElementModule} from './button.element.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(ButtonElementModule, { ngZone: "noop"})
    .catch(err => console.error(err));
