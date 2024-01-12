import ProductCardMobile from "@/components/ProductCard/ProductCardMobile";
import ProductCardDesktop from "@/components/ProductCard/ProductCardDesktop";
import MainOne from "@/components/MainOne";
import MainOneMobile from "@/components/MainOneMobile";
export default function Home() {
  return (
    <main>
      <MainOne />
      <MainOneMobile />
      <ProductCardMobile />

      <ProductCardDesktop />
    </main>
  );
}
