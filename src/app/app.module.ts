import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductImageGalleryComponent } from './components/product-image-gallery/product-image-gallery.component';
import { ButtonComponent } from './components/ui/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductImagesComponent,
    ProductInfoComponent,
    ProductPageComponent,
    ProductImageGalleryComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
