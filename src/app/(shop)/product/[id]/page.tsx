import CroissantTogglePdp from "@/components/croissant-toggle-pdp";
import { Suspense } from "react";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <div>
      Product Id: {params.id}
      <Suspense fallback={<div>Loading...</div>}>
        <CroissantTogglePdp
          merchantId={process.env.NEXT_PUBLIC_CROISSANT_MERCHANT_ID!}
          pricingUrl={process.env.NEXT_PUBLIC_CROISSANT_PRICING_URL!}
          productId={params.id}
          quantity="1"
        />
      </Suspense>
    </div>
  );
}
