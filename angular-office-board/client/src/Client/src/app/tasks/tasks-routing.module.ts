import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { TaskCreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { TaskBaordComponent } from './task-baord/task-baord.component';


const routes: Routes = [
  {
    path: '',
    component: TaskBaordComponent
  },

  {
    path: 'create',
    component: TaskCreateComponent
  },

  {
    path: ':id',
    component: DetailsComponent
  },

  {
    path: ':id/edit',
    component: EditComponent
  },

  {
    path: 'comments/:id/create',
    component: CommentCreateComponent
  },


  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
