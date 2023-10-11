import React from "react";

export interface Product {
  id: number;
  productName: string;
  price: number;
  reviewno: number;
  bookingno: number;
  country: string;
  type: string;
}
export interface ProductList {
  products: Product[];
}
export const ProductList = [
  {
    id: 1,
    productName: "Product A",
    price: 300,
    reviewno: 35,
    bookingno: 4,
    type: "Arabian",
    country: "Edmonton",
  },
  {
    id: 2,
    productName: "Product B",
    price: 500,
    reviewno: 13,
    bookingno: 7,
    type: "French",
    country: "British Columbia",
  },
];
