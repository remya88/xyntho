export type Product = {
    id: number;
    brand?: string;
    productTitle: string;
    description: string;
    images: string[];
    imagesSmall: string[];
    price: number;
    isSaleOff: boolean;
    saleOffPrice?: number;
}
