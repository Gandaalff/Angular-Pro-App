import { Component, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'auth-remeber',
    templateUrl: './auth-remember.component.html'
})

export class AuthRememberComponent {

    @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();
    event: any;
    
  
    onChecked(event: any): void{
      this.checked.emit(this.event.target!.checked)
  
    }
  
  }
