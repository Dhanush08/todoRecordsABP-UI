import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { CompletedComponent } from './completed/completed.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { TodoRecordsComponent } from './todo-records/todo-records.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: "",
    component: TodoComponent,
    children: [
      {
        path: "todo-records",
        component: TodoRecordsComponent,
      },
      {
        path: "add-task",
        component: AddTodoComponent,
      },
      {
        path: "in-progress",
        component: InProgressComponent,
      },
      {
        path: "completed",
        component: CompletedComponent,
      },
      {
        path: "edit-task/:id",
        component: EditTodoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
