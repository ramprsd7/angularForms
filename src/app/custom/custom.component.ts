import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  employees = [
    { id : 1, name : "ram",salary :2000},
    { id : 2, name : "sam",salary : 4000},
    { id : 3, name : "param",salary : 6000},
    { id : 4, name : "raaaam",salary : 8000}
  ];

  onclick()
  {
    this.employees.push({id:6,name:"madhu",salary : 9540});
  }

  onremove(course){
   let index=  this.employees.indexOf(course);
   this.employees.splice(index,1)
  }
}
