import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog';
import blogJson from '../../data/blog-data.json';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor() { }

  blogs: Blog[] = blogJson;

  ngOnInit(): void {
  }
  

}
