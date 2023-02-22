import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd} from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model'

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  paramValue : any;
  todos : Todo [] = []

  constructor(private router : Router, private todoService : TodoService) {  
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart || event instanceof NavigationEnd) {
          this.todos.splice(0, this.todos.length);
          this.todos.push(history.state.dos)
      }
    });
  }

  onDelete(id : number) {
    this.todoService.deleteTodo(id);
    this.router.navigate(['']);
  }

  onUpdate(data : any)  {
    this.todoService.updateTodo(data);
    this.router.navigate(['']);
  }

  onDone(id : number) {
    this.todoService.toggleComplete(id);

    if(this.todos[0].done == false) {
      this.todos[0].done = true;
    } else {
      this.todos[0].done = false;
    }
    
  }

  ngOnInit() {
   
  }
}
