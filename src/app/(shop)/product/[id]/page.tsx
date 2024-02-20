import ProductDetails from "@/components/product-details";
import fakeProducts from "@/data/products";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const product = fakeProducts.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
