import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  email:any;
  password:any;
  logInUser(): void{
    if(this.email=="abhi@gmail.com" && this.password=="1234"){
      console.log("welcome user");
    }
    else{
      alert("user not authorised");
    }
  }
}