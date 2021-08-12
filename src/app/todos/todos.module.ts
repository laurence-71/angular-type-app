import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{HttpClientModule} from '@angular/common/http';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todo/todo.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    TodosComponent,
   TodolistComponent,
    TodoComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
