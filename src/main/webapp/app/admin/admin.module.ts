import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UserManagementModule } from './user-management/user-management.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminRoutingModule, UserManagementModule],
})
export class AdminModule {}
