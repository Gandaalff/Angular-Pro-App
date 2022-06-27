import { Component, Output, EventEmitter, ContentChild, AfterContentInit, ContentChildren , QueryList, ViewChild, ElementRef} from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],


})
export class AuthFormComponent {
  showMessage: boolean = false;
  
  @ContentChildren(AuthRememberComponent) remember! : QueryList<AuthRememberComponent>;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  @ViewChild("email") email!: ElementRef

ngAfterContentInit(){
  
  if(this.remember){
    this.email.nativeElement.setAtributte('placeholder', 'Enter your email address')
    console.log(this.remember)
  //   // this.remember.checked.subscribe((checked: boolean) =>{
  //   //   this.showMessage = checked;
      
  //   })
  }
}

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}