import { Component, OnInit } from '@angular/core';
import {GalleryService} from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private galleryService: GalleryService) { }

    changeLocation(url: any): void{
    window.location.href = url;
    }

  galleryItems : any[];

    ngOnInit() {
    this.galleryItems = this.galleryService.GetGalleryJSON();
    }

}
