import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Todo } from "@shared/models/tasks.model";
import { TodoRecordsService } from '@shared/todo-services/todo-records.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  constructor(
    private todoRecordsService: TodoRecordsService,
    private router: Router
  ) { }
  
  tasksRecords!: Todo[];

  ngOnInit(): void {
    this.todoRecordsService.todoRecords$.subscribe((newList) => {
      this.tasksRecords = newList;
    });
  }

  addTaskForm = new FormGroup({
    description: new FormControl("", [
      Validators.required,
      Validators.minLength(25),
    ]),
  });

  onAddTask = () => {
    if (!this.addTaskForm.valid) {
      let newTodo = {
        description: this.addTaskForm.value.description,
        isFullfilled: false,
        id: 0,
      };
      this.todoRecordsService.createTodoTask(newTodo).subscribe({
        next: (data: any) => {
          this.todoRecordsService.todoRecords$.next([...this.tasksRecords, data.result]);
          // console.log("add-todo", this.tasksRecords);
        },
      });
      this.addTaskForm.reset();
      this.router.navigate([""]);
    } else {
      window.alert("The Form is not Valid. Please try again!");
    }
  };
}
