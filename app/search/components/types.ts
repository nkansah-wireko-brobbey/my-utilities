// types/product.ts
export interface ProductDimensions {
  depth: number;
  height: number;
  width: number;
}

export interface ProductMeta {
  barcode: string;
  createdAt: string;
  qrCode: string;
  updatedAt: string;
}

export interface ProductReview {
  id: number;
  rating: number;
  comment: string;
  userId: number;
  date: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  availabilityStatus: "In Stock" | "Out of Stock" | "Preorder";
  dimensions: ProductDimensions;
  meta: ProductMeta;
  minimumOrderQuantity: number;
  returnPolicy: string;
  shippingInformation: string;
  sku: string;
  tags: string[];
  warrantyInformation: string;
  reviews: ProductReview[];
}

export interface ProductSearchResult {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductAPIResponse{
    limit: number,
    skip: number,
    total: number,
    products: Product[]
}