import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent implements OnInit {

  @Input('content') Content : string | undefined = '' ;

  constructor() { }

  ngOnInit(): void {
  }

}
