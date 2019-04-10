import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatInputModule,MatCardModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeTrackerSidebarComponent } from './time-tracker-sidebar/time-tracker-sidebar.component';
import { TimeTrackerFormComponent } from './time-tracker-form/time-tracker-form.component';
import { TimeTrackerCardsComponent } from './time-tracker-cards/time-tracker-cards.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TimeTrackerSidebarComponent,
    TimeTrackerFormComponent,
    TimeTrackerCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
