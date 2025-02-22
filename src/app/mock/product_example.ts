import { Product } from "../models/Product";

export const productExample: Product = {
    id: 999,
    brand: "sneaker company",
    productTitle: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    isSaleOff: true,
    price: 250,
    saleOffPrice: 125,
    images: [
        "./assets/images/image-product-1.jpg",
        "./assets/images/image-product-2.jpg",
        "./assets/images/image-product-3.jpg",
        "./assets/images/image-product-4.jpg"
    ],
    imagesSmall: [
        "./assets/images/image-product-1-thumbnail.jpg",
        "./assets/images/image-product-2-thumbnail.jpg",
        "./assets/images/image-product-3-thumbnail.jpg",
        "./assets/images/image-product-4-thumbnail.jpg"
    ]
}
