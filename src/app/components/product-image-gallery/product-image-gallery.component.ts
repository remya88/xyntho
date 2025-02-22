import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-image-gallery',
  templateUrl: './product-image-gallery.component.html',
  styleUrls: ['./product-image-gallery.component.css'],
})
export class ProductImageGalleryComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() closeGallery = new EventEmitter<boolean>;

  selected: number = 0;
  galleryLength: number = 0;

  ngOnInit(): void {
    if (this.product) {
      this.galleryLength = this.product?.images.length;
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

  close(): void {
    this.closeGallery.emit();
  }
}
