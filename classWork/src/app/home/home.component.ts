import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name=''
  lastName=''
  arr :any[]  = []
  fun(){
    this.arr.push({name :this.name, lastName :this.lastName})
    console.log(this.arr)
  }
}
