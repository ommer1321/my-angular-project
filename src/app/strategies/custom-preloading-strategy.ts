import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
// kural-1453
// 
// öncelikle bir class oluşturuyoruz ve bu class'ı PreloadingStrategy sınıfından implemente alıyoruz 
// daha sonra bu classın preload methodunu implemente edip kullanıyoruz
// bu preload methodunun route parametresi route'ları döndürüyoruz ve fn ise biz bir method sağlıyor observer türünden 
//  biz bize verdiği route içindeki data ya ulaşıyoruz ve daha önce tanımladığımız data passing tüürnden parametrelerimiz sayesinde hangi modülde işlem yapıp hangisinde yapmayacağımıza burada karar vereceğiz şimdi bunun için 
// routes.ts'e gidiniz ve orada bu tanımladığımız data passing türündeki veriler oluşturup daha sonra burada onlar üzerinde işlem göreceğiz
//   
//  => routes.ts'de *8 'e gidiniz
// 
// <= geri geldiniz 
//  artık pathinizinizde data passing değerinizin içinde preload key'i olan değerleriniz var 
//  bunları  *2 ki gibi kontrole alıp daha sonra observer türünden olan fn() methodunu return ediyoruz olumlu olursa 
//  olumsuz olursa yine observer türünden of boş metodunu dönüyoruz  

//  daha sonra bu oluşturduğumuz custom çözğmğ aktif etmek için ilk olarak classımızı tanımlamamız lazım bunun için ana modülümüze yada bu stratejiyi kullancağımız modülün provider'ına bu classı tanımlıyoruz *21 app.module.ts sayfasında olduğu gibi
//  daha sonra bu stratejiyi ana route üstünde aktif etmemiz lazım bunun içinde app-routing.module.ts dosyasına gidiyoruz ve burada *22 ile işaretli kısımdaki gibi tanımlıyoruz preloadingStrategy:CustomPreloadingStrategy 
//  ayrıca  preloadingStrategy:PreloadAllModules yaparsak tüm modüller preload ile bu işleme tabi tutulacak preloadingStrategy:PreloadAllModules ise preloadı kapatacak default değer olarak gelir zaten 
// 
// 
// 
// 
// 

export class CustomPreloadingStrategy implements PreloadingStrategy {
     preload(route: Route, fn: () => Observable<any>): Observable<any> {

        // console.log(route);
        
        // *2
        if(route.data['preload'] == true){

            return fn();


        }else{
            return of();

        }
 
 
      
    }
}
