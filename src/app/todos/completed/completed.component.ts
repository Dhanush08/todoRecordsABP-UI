import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Todo } from "@shared/models/tasks.model";
import { TodoRecordsService } from '@shared/todo-services/todo-records.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  completedTasks: Todo[] = [];
  isLoading: boolean = true;

  constructor(
    private todoRecordsService: TodoRecordsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todoRecordsService.getTodoRecords().subscribe({
      next: (todos) => {
        this.completedTasks = todos.filter((each) => each.isFullfilled === true);
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
    console.log("value", value);
    console.log("checked", checked);
  }
}
