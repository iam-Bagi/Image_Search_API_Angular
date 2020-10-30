import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ImageService } from './image.service';
import {FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxMasonryModule } from 'ngx-masonry';


@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  BrowserAnimationsModule,
  NgbModule,
  NgxMasonryModule,
  MatCardModule  
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
