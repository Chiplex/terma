import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    //this.loading = true;
    this.authService.logout()
      .subscribe(() => {
        //this.loading = false;
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']);
      },(error) => {
        console.log(error);
      });
  }
}
