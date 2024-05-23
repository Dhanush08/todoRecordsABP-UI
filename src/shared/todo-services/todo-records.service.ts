import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environmentprod } from "../../environments/environment.prod";
import { environment } from "../../environments/environment";
import { Todo } from "../models/tasks.model";

@Injectable({
  providedIn: "root",
})
export class TodoRecordsService {
  baseApiUrl: string = environment.baseApiUrl;
  prodApiUrl: string = environmentprod.baseApiUrl;

  todoRecords$ = new BehaviorSubject<Todo[]>([]);
  todoItem$ = new BehaviorSubject<Todo>({ id: 0 });
  updatedTodo$ = new BehaviorSubject<Todo>({ id: 0 });
  createdTodo$ = new BehaviorSubject<Todo>({ id: 0 });
  isdeleted!: boolean;

  constructor(private http: HttpClient) {}

  getTodoRecords(): Observable<Todo[]> {
    this.http.get<Todo[]>(this.baseApiUrl + "GetAll").subscribe((data: any) => {
      this.todoRecords$.next(data.result);
      console.log("data.result", data.result);
    });
    return this.todoRecords$;
  }

  createTodoTask(addTodoRequest: Todo): Observable<Todo> {
    // console.log('addTodoRequest', JSON.numberify(addTodoRequest));
    this.http.post<Todo>(this.baseApiUrl + "Create", addTodoRequest);

    return this.http.post<Todo>(this.baseApiUrl + "Create", addTodoRequest);
  }

  getOneTodo(id: number): Observable<Todo> {
    this.http
      .get<Todo>(this.baseApiUrl + "GetTodo?id=" + id)
      .subscribe((data: any) => {
        this.todoItem$.next(data.result);
      });
    return this.todoItem$;
  }

  updateTodoTask(id: number, updateTodoTask: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.baseApiUrl + "Update", updateTodoTask);
  }

  deleteTask(id: number): boolean {
    this.http
      .delete<Todo>(this.baseApiUrl + "Delete?id=" + id)
      .subscribe((data: any) => {
        this.isdeleted = data.success;
      });
    return this.isdeleted;
  }
}