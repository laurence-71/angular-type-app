import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    TodosModule,
    RouterModule,
     BrowserAnimationsModule,
       MaterialModule,
    AppRoutingModule,
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
