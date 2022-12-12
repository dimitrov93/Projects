import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskBaordComponent } from './task-baord/task-baord.component';


const routes: Routes = [
  {
    path: '',
    component: TaskBaordComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
