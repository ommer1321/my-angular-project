import { InjectionToken } from "@angular/core"
// kural-1453
// Bu sayfada InjectionToken'ları ekleyip toplu olarak yönetebiliyoruz bu sayfayı manuel bir classtan oluşturdum
// bir başka tanımlama biçimi Injection  Token *1 olarak tanımlayabiliriz burada ise bir değişken oluşturuyoruz InjectionToken<any> türünden ve bunun içine  new InjectionToken("") şeklinde nesnesi ile referans veriyoruz daha sonra app.module içinde  bunu tanımlıyoruz ({provide:logServiceIT,useClass:LoggerService}) 
// 


    //  *1
    export  const logServiceIT:InjectionToken<any> = new InjectionToken("");

