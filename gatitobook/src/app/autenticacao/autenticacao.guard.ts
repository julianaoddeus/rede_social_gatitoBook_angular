import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanLoad {
  constructor(private usuarioService: UsuarioService, private router: Router){

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
    ):
    Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean |
    UrlTree {
    if(!this.usuarioService.estaLogado()){
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
