export interface ProductSlider {
  name: string;
  image: string;
  price: number;
}
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity: number;
  rating: number;
  numReviews: number;
  countInStock: number;
  isFeatured: boolean;
  brand: string;
  reviews: {
    name: string;
    rating: number;
    comment: string;
  }[];
}
