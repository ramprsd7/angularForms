import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpleforms',
  template: `
  <h3 style="text-align:center">Simple Angular Forms for two inputs - dummy</h3>

<div class="container">
<form (submit)="onSearch(searchControl.value);$event.preventDefault();">
    <input #searchControl placeholder="Seacrh here .."> <button mat-button>search</button>

    <input type="text" name="Fullname" placeholder="enter name" class="form-control" required>
    <input type="text" name="city" placeholder="enter city" class="form-control" required>
</form>
</div>`
  ,
  styleUrls: ['./simpleforms.component.css']
})
export class SimpleformsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSearch(value) {
    // step for search operation
    console.log(value);
    console.log(value.value);
    alert(value)
  }


}
