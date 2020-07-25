import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  constructor() { }

  getTodoList(){
    return this.todoList;
  }
}
