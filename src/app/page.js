import MainOne from "@/components/MainOne";
import MainOneMobile from "@/components/MainOneMobile";
import ProductCard from "@/components/ProductCard/ProductCard";
import Photo from "../app/assets/cover1.png";
import Photo2 from "../app/assets/cover2.png";
import Photo3 from "../app/assets/cover3.png";
import Photo4 from "../app/assets/cover4.png";
import Photo5 from "../app/assets/cover5.png";
import Photo6 from "../app/assets/cover6.png";
import Photo7 from "../app/assets/cover7.png";
import Photo8 from "../app/assets/cover8.png";
import Posts from "./(components)/Posts";
import Footer from "@/components/Footer";
import Part from "@/components/Part/Part";
import EditorsPick from "@/components/EditorsPick/EditorsPick";
import VitaClassic from "@/components/VitaClassic/VitaClassic";
// import FooterMobile from "@/components/FooterMobile";
const products = [
  {
    id: 1,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo,
  },
  {
    id: 2,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo2,
  },
  ,
  {
    id: 3,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo3,
  },
  ,
  {
    id: 4,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo4,
  },
  ,
  {
    id: 5,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo5,
  },
  ,
  {
    id: 6,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo6,
  },
  ,
  {
    id: 7,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo7,
  },
  {
    id: 8,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo8,
  },
];
export default function Home() {
  return (
    <main>
      <MainOne />
      <MainOneMobile />
      <EditorsPick />
      <section className="tw-px-9 md:tw-px-36 tw-flex tw-flex-col t md:tw-pt-[100px]  md:tw-gap-y-8 tw-justify-center">
        <div className="tw-text-center">
          <p>Featured Products</p>
          <h2>BESTSELLER PRODUCTS</h2>
          <p>Problems trying to resolve the conflict between </p>
        </div>

        <div className="tw-px-10 tw-flex tw-flex-row tw-flex-wrap md:tw-gap-x-8 md:tw-gap-y-20">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
      <VitaClassic />
      <Part />
      <Posts />

      <Footer />
    </main>
  );
}
