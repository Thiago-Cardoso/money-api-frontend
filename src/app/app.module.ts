import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

import {TooltipModule} from 'primeng/tooltip';

import { AppComponent } from './app.component';
import { LaunchsSearchComponent } from './launchs-search/launchs-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchsSearchComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
