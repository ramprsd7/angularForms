import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts : {};

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getList()
  }
  

  getList()
  {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response;
        console.log(response);
      })
  }

}
