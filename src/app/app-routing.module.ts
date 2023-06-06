import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArchiveComponent } from './archive/archive.component';
import { ModifComponent } from './modif/modif.component';
import { UserGuard } from './services/services/user.guard';
const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {path:"users", component: UsersComponent, canActivate:[UserGuard] },
  {path:"sidebar", component: SidebarComponent, canActivate:[UserGuard]},
  {path:"dashboard", component:DashboardComponent,canActivate:[UserGuard]},
  {path:"archive", component:ArchiveComponent,canActivate:[UserGuard]},
  {path:"modif", component:ModifComponent, canActivate:[UserGuard]},
  {path: '**', redirectTo: ""},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
