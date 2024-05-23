import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Todo } from "@shared/models/tasks.model";
import { TodoRecordsService } from "@shared/todo-services/todo-records.service";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  newTodoTask!: Todo;
  tasksRecords!: Todo[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoRecordsService: TodoRecordsService,
    private router: Router
  ) {}

  editTaskForm = new FormGroup({
    description: new FormControl("", [
      Validators.required,
      Validators.minLength(25),
    ]),
    isFullfilled: new FormControl(),
  });

  ngOnInit(): void {
    let paramsId: number;

    this.todoRecordsService.todoRecords$.subscribe((newList) => {
      this.tasksRecords = newList;
    });

    this.activatedRoute.params.subscribe((params) => {
      paramsId = params["id"];
      if (paramsId) {
        this.todoRecordsService.getOneTodo(paramsId).subscribe({
          next: (todoTask) => {
            this.newTodoTask = todoTask;
            if (todoTask) {
              this.editTaskForm.patchValue(todoTask);
            }
          },
        });
      }
    });

    if (this.newTodoTask) {
      this.editTaskForm.patchValue(this.newTodoTask);
    }
  }

  onUpdateTask = () => {
    if (!this.editTaskForm.valid) {
      let updatedTask = {
        ...this.editTaskForm.value,
        id: this.newTodoTask.id,
      };
      this.todoRecordsService
        .updateTodoTask(this.newTodoTask.id, updatedTask)
        .subscribe({
          next: (updatedTask: any) => {
            let updatedTaskList = this.tasksRecords.filter(
              (each) => each.id !== this.newTodoTask.id
            );
            this.todoRecordsService.todoRecords$.next([
              updatedTask.result,
              ...updatedTaskList,
            ]);
          },
        });
      this.router.navigate([""]);
    }
  };
}
