import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/interfaces/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: ToDo[];
  todoId: number;
  todoTitle: string;

  constructor() {}

  ngOnInit() {
    this.todoId = 4;
    this.todoTitle = '';
    this.todos = [
      {
        id: 1,
        title: 'Finish Angular Screencast',
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: 'Take over world',
        completed: false,
        editing: false,
      },
      {
        id: 3,
        title: 'One more thing',
        completed: false,
        editing: false,
      },
    ];
  }

  addToDo(): void {
    if (this.todoTitle.trim().length === 0) return;

    this.todos.push({
      id: this.todoId,
      title: this.todoTitle,
      completed: false,
      editing: false,
    });

    this.todoTitle = '';
    this.todoId++;
  }

  deleteToDo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
