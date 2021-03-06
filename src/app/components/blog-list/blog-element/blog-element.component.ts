import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/model/blog';

@Component({
  selector: 'app-blog-element',
  templateUrl: './blog-element.component.html',
  styleUrls: ['./blog-element.component.css']
})
export class BlogElementComponent implements OnInit {

  @Input('current-item') blog : Blog = {};


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  
}
