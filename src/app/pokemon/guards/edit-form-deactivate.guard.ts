import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Injectable({
  providedIn: 'root'
})
export class EditFormDeactivateGuard implements CanDeactivate<EditFormComponent> {
  canDeactivate(
    component: EditFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.wasTouched() || confirm('Are you sure, that you want exit?');
  }
}
