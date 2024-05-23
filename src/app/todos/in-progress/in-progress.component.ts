import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Todo } from "@shared/models/tasks.model";
import { TodoRecordsService } from "@shared/todo-services/todo-records.service"; 

@Component({
  selector: "app-in-progress",
  templateUrl: "./in-progress.component.html",
  styleUrls: ["./in-progress.component.css"],
})
export class InProgressComponent implements OnInit {
  inProgressTasks: Todo[] = [];
  isLoading: boolean = true;

  constructor(
    private todoRecordsService: TodoRecordsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todoRecordsService.getTodoRecords().subscribe({
      next: (todos) => {
        this.inProgressTasks = todos.filter((each) => each.isFullfilled === false);
        this.isLoading = false;
      },
    });
  }

  onEditTask = (task: Todo) => {
    this.router.navigate([`todo-records/edit-task/${task.id}`]);
  };

  onDeleteTask = (id: number) => {
    this.todoRecordsService.deleteTask(id);
  };

  onCheckboxTriggered(event: any) {
    const { checked, value } = event.target;
  }
}