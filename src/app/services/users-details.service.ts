import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDetailsService {
private loginSuccess$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

public setLoginSuccess(flag:boolean) :void{
  this.loginSuccess$.next(flag)
   console.log(this.loginSuccess$.next(flag));
}

public getLoginSuccess(): Observable<boolean>{
  return this.loginSuccess$.asObservable();
  console.log(this.loginSuccess$)
}
   constructor() {}
}
