import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';

// kural-1453
// 
// Angular'da "guards", uygulamanızın belirli rotalara erişimini kontrol etmek ve bu rotalara erişim izinlerini yönetmek için kullanılan önemli yapıları ifade eder. Bu sayede, kullanıcıların belirli sayfalara erişimini sınırlayabilir, yetkilendirme işlemlerini gerçekleştirebilir ve güvenliği artırabilirsiniz.
// 
// CanActivate: Bu guard, belirli bir rotaya erişim izni olup olmadığını kontrol etmek için kullanılır. Eğer kullanıcının belirli bir rota erişim izni yoksa, sayfa açılmaz ve yönlendirme gerçekleşmez.
// CanActivateChild: Bu guard, belirli bir rota içindeki alt rotalara erişim izni olup olmadığını kontrol etmek için kullanılır. Örneğin, bir üst rota erişilebilirken alt rotalara erişim izni sınırlanabilir.
// CanDeactivate: Bu guard, bir kullanıcının bir sayfadan ayrılmadan önce yapılacak işlemleri denetlemek için kullanılır. Örneğin, bir formdaki değişiklikler kaydedilmeden sayfadan çıkılmasını engellemek için kullanılabilir.
// Resolve: Bu guard, belirli bir rota öncesi veri yükleme işlemlerini yönetmek için kullanılır. Rota açılmadan önce gerekli verilerin yüklenmesini sağlar, böylece sayfa açıldığında veriler hazır olur.
// CanMatch: Angular bir dizideki rotaları Routesyukarıdan aşağıya doğru eşleştirir. Bu, aynı rotayı kullanmak istersek farklı yerlere gidebileceğimiz anlamına gelir. CanMatch de aynı route'u birden farklı şekilde kullanmamızı sağlıyor mesela loggin olan bir müsteri ile loggin olmayana farklı ekranlar göstermek gibi 


// 
// 
// 


export const canActivateGuard: CanActivateFn = (  route,  state) => {


  // ... burada bu gar için işlemler yapılabilen alan
  // ...
  // ...

  console.log('canActivateGuard Çalışıyor');
  
  const res = true;
  if (res) {

    return true;

  } else {

    return false;

  }
};
