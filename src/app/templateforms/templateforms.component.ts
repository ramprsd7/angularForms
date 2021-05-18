import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
// Dummy String Name fields 
  public movieName : string;
  public movieHero: string;
  public movieDirector: string;
  public movieHrs: number;

  // form submit function for templet forms
  onSubmit(form){
    console.log(form.value);
    console.log(form.valid);

    if(form.valid){
      alert('form Valid')
    }
  }
}
