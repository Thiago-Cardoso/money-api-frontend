import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule} from 'primeng/inputtextarea';
import { SelectButtonModule} from 'primeng/selectbutton';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule} from 'primeng/calendar';
import { DropdownModule} from 'primeng/dropdown';
import { NgModule } from '@angular/core';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

import {TooltipModule} from 'primeng/tooltip';

import { AppComponent } from './app.component';
import { LaunchsSearchComponent } from './launchs-search/launchs-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LaunchsRegisterComponent } from './launchs-register/launchs-register.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchsSearchComponent,
    NavbarComponent,
    LaunchsRegisterComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
