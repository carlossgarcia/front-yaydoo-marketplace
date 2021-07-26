import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /**
     * TODO Definir la manera de gestionar los roles.
     * El sistema de gestión de rutas aún no está del todo definido.
     * En la proxima versión se ahondará más en ello.
     */
    
    if (!this.authService.isAuth) {
      this.router.navigateByUrl('/signup');
      return false;
    } else {
      switch (this.authService.user.role) {
        case 'seller':
          this.router.navigateByUrl('/dashboard');
          return true;
          break;
        case 'admin':
          this.router.navigateByUrl('/dashboard');
          return true;
          break;
        case 'buyer':
          this.router.navigateByUrl('/dashboard');
          return true;
          break;
        default:
          this.router.navigateByUrl('/dashboard');
          return true;
          break;
      }
      
    }
  }
}
