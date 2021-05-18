import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberFormatDirective } from './number-format.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomComponent } from './custom/custom.component';
import { SimpleformsComponent } from './simpleforms/simpleforms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/app-material.module';
import { HomeComponent } from './home.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { Reactiveforms2Component } from './reactiveforms2/reactiveforms2.component';
import { PostComponent } from './post/post.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NumberFormatDirective,
    CustomComponent,
    SimpleformsComponent,
    HomeComponent,
    TemplateformsComponent,
    ReactiveformsComponent,
    Reactiveforms2Component,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
