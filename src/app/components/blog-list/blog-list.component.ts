import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import blogJson from '../../data/blog-data.json';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(private data:DataServiceService) { }

  blogs: any = blogJson;

  ngOnInit(): void {
    this.data.getAll().subscribe((res)=>{
      this.blogs = res.content;
      console.log(this.blogs);
    }, (err) =>{
      console.log(err.message);
    });
  }
  

}
