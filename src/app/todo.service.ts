import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  getTodoById(id: number) : any {
    let found = this.todos.find(todo => todo.id === id);
    return found;
  }

  getTodos() {
    return this.todos;
  }

  toggleComplete(id: number) {
    let foundid = this.todos.findIndex(i => i.id === id);
    if(this.todos[foundid].done) {
      this.todos[foundid].done = false;
    } else {
      this.todos[foundid].done = true;
    } 
  }

  updateTodo(todo: Todo) {
    const foundIndex = this.todos.findIndex(i => i.id === todo.id);
      if(foundIndex !== -1) {
        this.todos[foundIndex] = todo;
      }  
  
 }

  deleteTodo(id: number) : void {
    const index = this.todos.findIndex(i => i.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}

