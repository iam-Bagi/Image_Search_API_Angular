import { Component, OnInit } from '@angular/core';
import { ImageService } from './../image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  

  constructor(private _imageservice:ImageService) { }

   images:any[];
   searching:boolean=false;
   isFound:boolean=false;
   searchQuery:string;

  handleData(data){
    this.isFound=true;
    this.images=data.hits;
    console.log(data.hits);

  }

  handleError(error){
    console.log(error);
  }

  ngOnInit(): void {
  }

  searchImage(query:string){
    this.searching=true;
    return this._imageservice.getImage(query).subscribe(
    data => this.handleData(data),
    error => this.handleError(error),
    () => this.searching=false
    );

  }


}
