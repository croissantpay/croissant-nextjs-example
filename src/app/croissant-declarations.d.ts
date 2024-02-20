declare namespace JSX {
  interface IntrinsicElements {
    "croissant-toggle-pdp": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        "merchant-id": string;
        "pricing-url": string;
        quantity: string;
        "product-id": string;
      },
      HTMLElement
    >;
  }
}
