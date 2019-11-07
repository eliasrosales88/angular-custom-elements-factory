import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {TitleElementModule} from './title.element.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(TitleElementModule, { ngZone: "noop"})
    .catch(err => console.error(err));
