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

  getTodoById(index: number) : Todo {
    let foundIndex : any;
    for(let i = 0; i < this.todos.length; i++) {
      if(this.todos[i].id == index){
        foundIndex = i;
        break;
    }
  }
    return this.todos[foundIndex];
  }

  getTodos() {
    return this.todos;
  }

  toggleComplete(index: number) {
    let foundIndex : any;
      for(let i = 0; i < this.todos.length; i++) {
        if(this.todos[i].id == index){
          foundIndex = i;
          break;
      }
  } 
    if(this.todos[foundIndex].done == false) {
      this.todos[foundIndex].done = true;
    } else {
      this.todos[foundIndex].done = false;
    } 
  }

  updateTodo(todo: Todo) {
    const foundIndex = this.todos.findIndex(i => i.id === todo.id);
      if(foundIndex !== -1) {
        this.todos[foundIndex] = todo;
      }  
  
 }

  deleteTodo(id: number) : void {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}

