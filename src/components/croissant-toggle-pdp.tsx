"use client";

type Props = {
  merchantId: string;
  pricingUrl: string;
  productId: string;
  quantity: string;
};

export default function CroissantTogglePdp({
  merchantId,
  pricingUrl,
  productId,
  quantity,
}: Props) {
  return (
    <croissant-toggle-pdp
      merchant-id={merchantId}
      pricing-url={pricingUrl}
      product-id={productId}
      quantity={quantity}
    />
  );
}
