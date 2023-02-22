import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddItemComponent } from '../add-item/add-item.component';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos : Todo[] = [];

  constructor(private matDialog: MatDialog,
              private router: Router,
              private todoService : TodoService) {}

  onOpenTodo(dos: any) {
    this.router.navigate([dos.title], { state: { dos: dos } });
  }

  onAddItem() {
    this.matDialog.open(AddItemComponent)
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
}
