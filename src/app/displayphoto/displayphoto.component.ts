import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service'

@Component({
  selector: 'app-displayphoto',
  templateUrl: './displayphoto.component.html',
  styleUrls: ['./displayphoto.component.css']
})
export class DisplayphotoComponent implements OnInit {
  photoUrl : string = '';
  constructor(private photosService:PhotosService) {

  }

  ngOnInit(): void {
    this.getImages();
  }
  getImages()
  {
    this.photosService.getPhotos().subscribe(response => {
    this.photoUrl= response.urls.regular;
    })
  }
  onClick()
  {
    this.getImages();
  }

}
