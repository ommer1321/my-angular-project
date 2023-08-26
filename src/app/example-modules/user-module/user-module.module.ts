import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddUserComponent, UpdateUserComponent, DeleteUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'add', component: AddUserComponent },
      { path: 'update', component: UpdateUserComponent },
      { path: 'delete', component: DeleteUserComponent },
    ]),
  ],
})
export class UserModuleModule {}
