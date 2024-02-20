"use client";

import Product from "@/types/product";
import CroissantTogglePdp from "./croissant-toggle-pdp";
import { useState } from "react";

type Props = {
  product: Product;
};

export default function ProductDetails({ product }: Props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="flex flex-col max-w-md justify-center">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <div>
        <label htmlFor="price">Price:</label>
        <span id="price">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </span>
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <select
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: product.stock }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <CroissantTogglePdp
        merchantId={process.env.NEXT_PUBLIC_CROISSANT_MERCHANT_ID!}
        pricingUrl={process.env.NEXT_PUBLIC_CROISSANT_PRICING_URL!}
        productId={product.id}
        quantity={quantity.toString()}
      />
    </section>
  );
}
