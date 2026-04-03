import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './shared/guards/auth.activate.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'tasks',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule),
  },
  {
    path: 'messages',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule),
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
