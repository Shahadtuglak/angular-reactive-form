import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`

    input.ng-invalid{border-left:5px solid red;}
    input.ng-valid{border-left:5px solid green;}
    .container{margin-top:2rem;}
    .btn{margin-top:1rem;}


  `]

})
export class AppComponent {
  userForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    email: new FormControl(null, [Validators.required, Validators.pattern("^[\\w]+(?:\\.[\\w])*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{3,6}$")  ]),
    address: new FormGroup({
      street: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      postalcode: new FormControl(null, Validators.required)
    })
  })



  onSubmit(){
    console.log(this.userForm.value);
  }




}
