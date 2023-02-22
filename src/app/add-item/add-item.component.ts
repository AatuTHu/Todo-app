import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  todo : Todo[] = [];
  
  constructor ( 
    private matDialogRef: MatDialogRef<AddItemComponent>,
    private formBuilder: FormBuilder,
    private todoService : TodoService
    ) {}

  closeForm(): void {
  this.matDialogRef.close();
  }

  form = this.formBuilder.group({
    id: Math.floor(Math.random() *1024)*32,
    title:'',
    desc:'',
    done: false
  })

  saveForm(){
    let temp = {
      id : Number(this.form.value.id),
      title : String(this.form.value.title),
      desc : String(this.form.value.desc),
      done : Boolean(this.form.value.done)
    };

    this.todoService.addTodo(temp)
    this.matDialogRef.close()
  }

}
