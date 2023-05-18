import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArchiveComponent } from './archive/archive.component';
import { ModifComponent } from './modif/modif.component';
import { AjoutComponent } from './ajout/ajout.component';
const routes: Routes = [

  {path:"", component: LoginComponent  },
  {path:"users", component: UsersComponent},
  {path:"sidebar", component: SidebarComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"archive", component:ArchiveComponent},
  {path:"modif", component:ModifComponent},
  {path:"ajout", component:AjoutComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
