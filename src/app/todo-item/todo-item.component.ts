import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `<div class="todo-item">
     {{item.title}}
    </div>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item; TodoIdem;
  constructor() { }

  ngOnInit(): void {
  }

}
