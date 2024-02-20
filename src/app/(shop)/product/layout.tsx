import Script from "next/script";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script src="https://cdn.croissant.com/croissant-toggle-web-components/dist.js" />
      <section className="flex justify-center items-center h-screen">
        {children}
      </section>
    </>
  );
}
