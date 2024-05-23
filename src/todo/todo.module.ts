import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { CompletedComponent } from './completed/completed.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { TodoRecordsComponent } from './todo-records/todo-records.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoRecordsService } from '@shared/todo-services/todo-records.service';


@NgModule({
  declarations: [
    AddTodoComponent,
    CompletedComponent,
    EditTodoComponent,
    InProgressComponent,
    TodoRecordsComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoRecordsService]
})
export class TodoModule { }
