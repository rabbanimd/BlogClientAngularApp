import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpageComponent } from './components/blogpage/blogpage.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';

const routes: Routes = [
  {path:'', component:BlogListComponent},
  {path:'view/:postId', component:BlogpageComponent},
  {path:'add', component:CockpitComponent},
  {path:'**', component:BlogListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
