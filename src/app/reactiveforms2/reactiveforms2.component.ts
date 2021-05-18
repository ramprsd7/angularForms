import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms2',
  templateUrl: './reactiveforms2.component.html',
  styleUrls: ['./reactiveforms2.component.css']
})
export class Reactiveforms2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log(this.studentForm);
  }

  
  createDepartmentForm(): FormGroup {
    return new FormGroup({
      deptId : new FormControl(),
      deptName : new FormControl(),
      deptrole : new FormControl(),
    })

  }

  studentForm = new FormGroup({
    firstName : new FormControl("",[Validators.required]),
    lastName : new FormControl("",[Validators.required]),
    email : new FormControl("",[ Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
    address : new FormGroup({
      street : new FormControl(),
      city : new FormControl(),
      state : new FormControl(),
      zipcode : new FormControl('789456',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern('^[0-9]+$')
      ])
    }),
    department :new FormArray([this.createDepartmentForm()]),
  })

  onSubmit(form){
    console.log(form)
    console.log(form.value)
  }

  studForm = new FormGroup({
    fullName : new FormControl("",Validators.required),
    phoneNumber : new FormControl("",Validators.required),
    address : new FormGroup({
      street : new FormControl(""),
      city : new FormControl(""),
      zipCode : new FormControl("",[
      Validators.required,
       Validators.maxLength(5),
       Validators.minLength(5)
      ]),
    })
  })
  

  onSUbmit(form){
    if(form.valid){
      alert('Form working');
    console.log(form)
    console.log(form.value)
    }
    else 
    alert('Invalid form data');
  }
}
