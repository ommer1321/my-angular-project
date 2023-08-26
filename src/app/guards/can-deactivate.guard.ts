import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<any> = (
  component: any,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {


  // ... burada bu guard için işlemler yapılabilen alan
  // ...
  // ...

  console.log('canDeactivateGuard Çalışıyor');
  
  const res = false;
  if (res) {

    return true;

  } else {

    return false;

  }
};
