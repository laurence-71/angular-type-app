import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

 @Input() public error:Boolean=true;
 @Input() public disabled:boolean=true;


  public todoList:Todo[];
  

  constructor(private todoService:TodoService) { 
  
   this.todoList=this.todoService.todoList;
   
    this.retry();
  }

  retry():void{
    this.todoService.get().subscribe(
      (todoList:Todo[])=>{
        this.error=false;
        this.todoList=todoList;
      },
      ()=>{
        this.error = true;
      }
    );
  }

  public todoDisabled:any;

  delete(todo: Todo){
    this.disabled=true;
    this.todoDisabled = todo;
    this.todoService.delete(todo).subscribe(
      ()=>{
        this.disabled = true;
      },
      ()=>{}
    );
  }

  ngOnInit() {
  }
  }

 


