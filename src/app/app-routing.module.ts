import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { TasksComponent } from "./todos/tasks/tasks.component";
import { CompletedComponent } from "todo/completed/completed.component";
import { InProgressComponent } from "todo/in-progress/in-progress.component";
import { AddTodoComponent } from "todo/add-todo/add-todo.component";
import { EditTodoComponent } from "todo/edit-todo/edit-todo.component";


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    {
                        path: 'home',
                        component: HomeComponent,
                        canActivate: [AppRouteGuard]
                    },
                    {
                        path: 'users',
                        component: UsersComponent,
                        data: { permission: 'Pages.Users' },
                        canActivate: [AppRouteGuard]
                    },
                    {
                        path: 'roles',
                        component: RolesComponent,
                        data: { permission: 'Pages.Roles' },
                        canActivate: [AppRouteGuard]
                    },
                    {
                        path: 'tenants',
                        component: TenantsComponent,
                        data: { permission: 'Pages.Tenants' },
                        canActivate: [AppRouteGuard]
                    },
                    {
                        path: 'about',
                        component: AboutComponent,
                        canActivate: [AppRouteGuard]
                    },
                    {
                        path: "todos",
                        component: TasksComponent,
                        canActivate: [AppRouteGuard],
                    },
                    {
                        path: "completed",
                        component: CompletedComponent,
                        canActivate: [AppRouteGuard],
                    },
                    {
                        path: "in-progress",
                        component: InProgressComponent,
                        canActivate: [AppRouteGuard],
                    },
                    {
                        path: "add-task",
                        component: AddTodoComponent,
                        canActivate: [AppRouteGuard],
                    },
                    {
                        path: "edit-task/:id",
                        component: EditTodoComponent,
                        canActivate: [AppRouteGuard],
                    },
                    {
                        path: 'update-password',
                        component: ChangePasswordComponent,
                        canActivate: [AppRouteGuard]
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
