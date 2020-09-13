import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardService {

  /**
   * Constructor
   * @param router The router object
   */
  constructor(
    private router: Router,
    private auth: AuthService
  ) { } 
  
  /**
   * Can activate function
   * @param next The activated route snapshot object
   * @param state The router state snapshot object
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (!this.auth.isLoggedIn()) { return true; }
    this.router.navigateByUrl('/');
    return false;
  }
}
