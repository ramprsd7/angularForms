import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';
import { HomeComponent } from './home.component';
import { PostComponent } from './post/post.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { Reactiveforms2Component } from './reactiveforms2/reactiveforms2.component';
import { SimpleformsComponent } from './simpleforms/simpleforms.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';



const routes: Routes = [
  {
    path : '' , component : HomeComponent
  },
  {
    path : 'simple' , component : SimpleformsComponent
  },
  {
    path : 'template' , component : TemplateformsComponent
  },
  {
    path : 'reactiveform1' , component : ReactiveformsComponent
  },
  {
    path : 'reactiveform2' , component : Reactiveforms2Component
  },
  {
    path : 'custom' , component : CustomComponent
  },
  {
    path : 'post' , component : PostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
