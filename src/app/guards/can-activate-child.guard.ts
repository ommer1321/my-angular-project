import { CanActivateFn } from '@angular/router';

export const canActivateChildGuard: CanActivateFn = (route, state) => {

  // ... burada bu gar için işlemler yapılabilen alan
  // ...
  // ...

  console.log('canActivateGuard Child Çalışıyor');
  
  const res = true;
  if (res) {

    return true;

  } else {

    return false;

  }
};
