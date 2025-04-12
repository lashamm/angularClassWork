import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
userName = ''
userName2 =''


fun(){
  this.userName2 = this.userName
  this.userName = ''
}
}
