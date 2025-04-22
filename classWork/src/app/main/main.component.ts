import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../models/student';

@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  studentInfo :any = []
  studentAddress :any =[]
  student = new Student()

// name :string = ''
// age :any = ''
// grade :any = ''
// subject :string = ''
// street :any = ''
// city :string = ''
// zip :any = ''
btn2 = 'show student(s)'
showStudentsList = false

addStudent(){

  this.studentInfo.push(this.student)
  this.student = new Student()

//   if(
//     this.name  == '' ||
//     this.age  == '' ||
//     this.grade  == '' ||
//     this.subject  == '' ||
//     this.street  == '' ||
//     this.city  == '' ||
//     this.zip  == ''){
//       alert('Please fill all components')

//   }
//   this.studentAddress.push({
//     street :this.street,
//     city :this.city,
//     zip :this.zip
// })
//   this.studentInfo.push({
//       name :this.name,
//       age :this.age,
//       grade :this.grade,
//       subject :this.subject,
//       studentAddress :this.studentAddress
//     })

//   console.log(this.studentInfo)
//   console.log(this.studentAddress)

//   this.name  = ''
//   this.age  = ''
//   this.grade  = ''
//   this.subject  = ''
//   this.street  = ''
//   this.city  = ''
//   this.zip  = ''
}
showStudents(){
  this.showStudentsList = !this.showStudentsList
  this.btn2 = 'hide student(s)'
  if(this.btn2 = 'hide student(s)'){
    this.btn2 = 'show student(s)'
  }
}
}
