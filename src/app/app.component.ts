import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { HttpClient } from '@angular/common/http';
import { NavigationStart ,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';

  showLogin: boolean = false;
  localStatus = localStorage.getItem('access_token');
  constructor(private auth: UsersService, private router: Router, private http: HttpClient) {

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/login' || event.url === '/') {
          this.showLogin = true;
        } else {
          this.showLogin = false;
          if(!this.localStatus){
            window.location.pathname=''
          }
        }
      }
    });
  }
}
