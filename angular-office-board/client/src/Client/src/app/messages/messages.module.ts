import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { BoardComponent } from './board/board.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MessagesRoutingModule } from './messages-routing.module';

@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
