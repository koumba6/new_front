import { NgModule,} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModifComponent } from './modif/modif.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ArchiveComponent } from './archive/archive.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Socket ,SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const config: SocketIoConfig={
  url: 'http://localhost:3000/',
  options : {
    transports : ['websocket']
  }
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    DashboardComponent, 
    ModifComponent,
    ArchiveComponent,
    SidebarComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
   
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgClass,
    NgStyle,
    SocketIoModule.forRoot(config),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
