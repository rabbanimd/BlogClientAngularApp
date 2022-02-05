import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BloggerStop';
  constructor(private router:Router){}

  postClicked() {
      this.router.navigate(['add']);
    
  }
}
