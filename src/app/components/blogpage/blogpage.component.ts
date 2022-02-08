import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent implements OnInit {

  postId = 0 ;
  content =  '';
  error_message = '';

  constructor(private route:ActivatedRoute, private dataService:DataServiceService) {
   }

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('postId'));
    this.getContent();
    
    
  }

  getContent():void{
    this.dataService.getContentById(this.postId).subscribe((res)=>{
      this.content = res.content?.toString() || '';
      this.error_message = '';
    }, (err)=>{
      console.log(err.message);
      this.error_message = err.message;
    });
  }

  
  

}
