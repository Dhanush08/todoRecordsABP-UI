import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Todo } from "../../../shared/models/tasks.model";
import { TodoRecordsService } from "@shared/todo-services/todo-records.service"; 

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent implements OnInit {
  tasks: Todo[] = [];
  searchInputValue: string = "";
  value!: boolean;
  checkBoxValue!: boolean;
  isLoading: boolean = true;
  currentButtonId!: number;

  constructor(
    private todoRecordsService: TodoRecordsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todoRecordsService.getTodoRecords().subscribe({
      next: (todoList: any) => {
        this.tasks = todoList;
        this.isLoading = false;
      },
      error: (response) => {
        console.log("Error while fethcing Todolist", response);
        this.isLoading = false;
      },
    });
  }

  onAddTodo = () => {
    this.router.navigate(["app/add-task"]);
    this.todoRecordsService.getTodoRecords().subscribe({
      next: (eachTask: any) => {
        this.tasks = [eachTask, ...this.tasks];
        this.isLoading = false;
      },
    });
  };

  onEditTask = (task: Todo) => {
    this.router.navigate([`todo-records/edit-task/${task.id}`]);
  };

  onDeleteTask = (id: number) => {
    this.currentButtonId = id;
    this.todoRecordsService.deleteTask(id);
    this.tasks = this.tasks.filter((each) => each.id !== id);
  };

  onSearchTodo = (event: any) => {
    if (this.searchInputValue !== "") {
      this.tasks = this.tasks.filter((each) =>
        each.description?.toLowerCase().includes(this.searchInputValue.toLowerCase())
      );
    } else {
      this.todoRecordsService.getTodoRecords().subscribe({
        next: (each) => {
          this.tasks = each;
          this.isLoading = false;
        },
      });
    }
  };

  onCheckboxTriggered(event: any, task: Todo) {
    const { checked } = event.target;
    let updatedStatus = {
      ...task,
      status: checked,
    };
    this.isLoading = true;
    this.todoRecordsService.updateTodoTask(task.id, updatedStatus).subscribe({
      next: (updated: any) => {
        let newTask = this.tasks.filter((each) => each.id !== task.id);
        this.tasks = [updated.result, ...newTask];
        this.isLoading = false;
      },
    });
  }

  onClearSearch() {
    this.searchInputValue = "";
    this.isLoading = true;
    this.todoRecordsService.getTodoRecords().subscribe({
      next: (each) => {
        this.tasks = each;
        this.isLoading = false;
      },
    });
  }
}