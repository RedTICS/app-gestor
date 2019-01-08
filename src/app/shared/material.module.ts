import {
    MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
})
export class MaterialModule { }
