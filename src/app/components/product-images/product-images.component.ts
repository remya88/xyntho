import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent implements OnInit {
  @Input() product: Product | null = null;

  selected: number = 0;
  galleryLength: number = 0;
  isGalleryOn: boolean = false;

  ngOnInit(): void {
    if (this.product){
      this.galleryLength = this.product.images.length;
    }
  }

  selectImage(index: number): void {
    this.selected = index;
  }
  prevImg():void {
    if (this.selected <= 0){
      this.selected = this.galleryLength - 1;
    }
    else{
      this.selected--;
    }
  }
  nextImg():void {
    if (this.selected >= this.galleryLength - 1){
      this.selected = 0;
    }
    else{
      this.selected++;
    }
  }

  closeGallery(){
    this.isGalleryOn = false;
  }
}
