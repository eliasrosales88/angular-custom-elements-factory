import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../../../factory_utils/abstract/element.module';
import {ButtonModule, ButtonComponent} from '../../../../factory_utils/public-api';

@NgModule({
    imports: [BrowserModule, ButtonModule],
    entryComponents: [ButtonComponent],
})
export class ButtonElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, ButtonComponent, 'button');
    }
}
