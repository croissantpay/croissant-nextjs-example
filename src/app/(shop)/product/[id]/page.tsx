import ProductDetails from "@/components/product-details";
import { Suspense } from "react";
import products from "@/data/products";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetails product={product} />
    </Suspense>
  );
}
