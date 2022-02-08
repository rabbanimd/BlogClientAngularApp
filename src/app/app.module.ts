import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogElementComponent } from './components/blog-list/blog-element/blog-element.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BlogpageComponent } from './components/blogpage/blogpage.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogElementComponent,
    CockpitComponent,
    BlogpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
