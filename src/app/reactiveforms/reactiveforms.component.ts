import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  // Using form Controll instance
  studentForm1 = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(7)]),
    lastName: new FormControl("", [Validators.required, Validators.maxLength(6), Validators.minLength(2)]),
    email: new FormControl("", [Validators.email, Validators.required]),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zipcode: new FormControl('560007', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern('^[0-9]+$')
      ])
    }),
  })

  // to shorten the access to formcontrol of firstname
  get firstName() {
    return this.studentForm1.get('firstName')
  }

  get lastName() {
    return this.studentForm1.get('lastName')
  }

  get email() {
    return this.studentForm1.get('email')
  }

  get zipcode() {
    return this.studentForm1.get('address')['controls']['zipcode']
  }

  // Using Dynamic Form builder
  /*
  studentForm1 = this.formBuilder.group({
    firstName: [],
    lastName : [],
    email :[],
    address : this.formBuilder.group({
      street : [],
      city : [],
      state : [],
      zipcode :[]
    })
  }) */

  // form Subit function
  onSubmit() {

    if (this.studentForm1.invalid) {
      alert('Form is invalid kindly input details required')
    }
    else {
      alert('Reactive form submited!')
      console.log(this.studentForm1);
      console.log(this.studentForm1.value);
    }

  }


}
