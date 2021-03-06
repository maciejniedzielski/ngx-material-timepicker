import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxMaterialTimepickerComponent} from './ngx-material-timepicker.component';
import {StyleSanitizerPipe} from './pipes/style-sanitizer.pipe';
import {NgxMaterialTimepickerHoursFaceComponent} from './components/timepicker-hours-face/ngx-material-timepicker-hours-face.component';
import {NgxMaterialTimepickerMinutesFaceComponent} from './components/timepicker-minutes-face/ngx-material-timepicker-minutes-face.component';
import {NgxMaterialTimepickerService} from './services/ngx-material-timepicker.service';
import {NgxMaterialTimepickerFaceComponent} from './components/timepicker-face/ngx-material-timepicker-face.component';
import {TimeFormatterPipe} from './pipes/time-formatter.pipe';
import {NgxMaterialTimepickerButtonComponent} from './components/timepicker-button/ngx-material-timepicker-button.component';
import {TimepickerDirective} from './directives/ngx-timepicker.directive';
import {OverlayDirective} from './directives/overlay.directive';
import {NgxMaterialTimepickerEventService} from './services/ngx-material-timepicker-event.service';
import {FocusAnchorDirective} from './directives/focus-anchor.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        NgxMaterialTimepickerComponent,
        TimepickerDirective
    ],
    declarations: [
        NgxMaterialTimepickerComponent,
        StyleSanitizerPipe,
        NgxMaterialTimepickerHoursFaceComponent,
        NgxMaterialTimepickerMinutesFaceComponent,
        NgxMaterialTimepickerFaceComponent,
        TimeFormatterPipe,
        NgxMaterialTimepickerButtonComponent,
        TimepickerDirective,
        OverlayDirective,
        FocusAnchorDirective,
    ]
})
export class NgxMaterialTimepickerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxMaterialTimepickerModule,
            providers: [NgxMaterialTimepickerEventService]
        }
    }
}
