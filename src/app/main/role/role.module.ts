import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { Routes, RouterModule } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';

const roleRoutes: Routes = [
  //localhost:4200/main/role
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/role/index
  { path: 'index', component: RoleComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(roleRoutes)
  ],
providers:[DataService, NotificationService],
  declarations: [RoleComponent]
})
export class RoleModule { }
