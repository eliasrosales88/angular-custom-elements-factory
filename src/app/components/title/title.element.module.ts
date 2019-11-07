import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../../../factory_utils/abstract/element.module';
import {TitleModule, TitleComponent} from '../../../../factory_utils/public-api';

@NgModule({
    imports: [BrowserModule, TitleModule],
    entryComponents: [TitleComponent],
})
export class TitleElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, TitleComponent, 'title');
    }
}
