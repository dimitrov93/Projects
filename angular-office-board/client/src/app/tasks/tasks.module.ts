import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBaordComponent } from './task-baord/task-baord.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskCreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    TaskBaordComponent,
    TaskCreateComponent,
    DetailsComponent,
    EditComponent,
    CommentCreateComponent,
    CommentEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TasksRoutingModule,
    NgbModule,
    FormsModule,
    DragDropModule,
  ],
})
export class TasksModule { }
