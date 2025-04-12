import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'classWork';

  name = 'lasha'
  mail= 'mail@test.com'
  pass = 'las123'
  btn = 'show'
  name2 = ''
  mail2 = ''
  pass2 = ''







  

  fun(){
    if(this.name2 == '' && this.mail2 == '' && this.pass2 == ''){
    this.name2 = this.name
    this.mail2 = this.mail 
    this.pass2 = this.pass  
    this.btn = 'clear'}
    else if(this.btn=='clear'){
      this.name2 = ''
      this.mail2 = '' 
      this.pass2 = ''
      this.btn = 'show'  
    }
  }
  














}


