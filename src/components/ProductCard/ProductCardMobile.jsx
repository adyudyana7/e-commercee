import Image from "next/image";
import foto1 from "../../app/assets/cover1.png";
import foto2 from "../../app/assets/cover2.png";
import foto3 from "../../app/assets/cover3.png";
import foto4 from "../../app/assets/cover4.png";
import foto5 from "../../app/assets/cover5.png";
import foto6 from "../../app/assets/cover6.png";
import foto7 from "../../app/assets/cover7.png";
import foto8 from "../../app/assets/cover8.png";

const ProductCardMobile = () => {
  return (
    <div>
      <div className=" tw-flex tw-flex-col tw-text-center tw-pt-[200px] ">
        <p className="tw-text-[20px] tw-font-semibold tw-m-0 tw-p-0 tw-text-[#737373] ">
          Featured Products
        </p>
        <p className="tw-text-2xl tw-font-bold tw-m-0 tw-p-0 tw-pt-4">
          BESTSELLER <br /> PRODUCTS
        </p>
        <p className="tw-text-sm tw-font-semibold tw-text-[#737373] tw-pb-[50px]">
          Problems trying to resolve <br /> the conflict between{" "}
        </p>
      </div>
      <div className="tw-flex tw-flex-col  tw-items-center tw-gap-y-7">
        <div>
          <Image src={foto1} alt={foto1} className=" tw-h-full " />
          <h3 className="tw-text-[18px] tw-font-bold">Graphic Design</h3>
          <h4 className="tw-text-[14px] tw-font-bold tw-text-[#737373]">
            English Department
          </h4>
          <div className=" tw-flex tw-flex-row tw-text-[16px] tw-font-bold">
            <p className="tw-text-[#BDBDBD] tw-pr-2 tw-m-0">$16.48</p>
            <p className="tw-text-[#23856D] tw-m-0">$6.48</p>
          </div>
        </div>
        <Image src={foto2} alt={foto2} className="tw-h-full " />
        <h3 className="tw-text-[18px] tw-font-bold tw-m-0">Graphic Design</h3>
        <h4 className="tw-text-[14px] tw-font-bold tw-text-[#737373] tw-m-0">
          English Department
        </h4>
        <div className=" tw-flex tw-flex-row tw-text-[16px] tw-font-bold">
          <p className="tw-text-[#BDBDBD] tw-pr-2 tw-m-0">$16.48</p>
          <p className="tw-text-[#23856D] tw-m-0">$6.48</p>
        </div>
        <Image src={foto3} alt={foto3} className="tw-h-full" />
        <h3 className="tw-text-[18px] tw-font-bold tw-m-0">Graphic Design</h3>
        <h4 className="tw-text-[14px] tw-font-bold tw-text-[#737373] tw-m-0">
          English Department
        </h4>
        <div className=" tw-flex tw-flex-row tw-text-[16px] tw-font-bold">
          <p className="tw-text-[#BDBDBD] tw-pr-2 tw-m-0">$16.48</p>
          <p className="tw-text-[#23856D] tw-m-0">$6.48</p>
        </div>
        <Image src={foto4} alt={foto4} className="tw-h-full" />
        <h3 className="tw-text-[18px] tw-font-bold tw-m-0">Graphic Design</h3>
        <h4 className="tw-text-[14px] tw-font-bold tw-text-[#737373] tw-m-0">
          English Department
        </h4>
        <div className=" tw-flex tw-flex-row tw-text-[16px] tw-font-bold">
          <p className="tw-text-[#BDBDBD] tw-pr-2 tw-m-0">$16.48</p>
          <p className="tw-text-[#23856D] tw-m-0">$6.48</p>
        </div>
        <Image src={foto5} alt={foto5} className="tw-h-full" />
        <h3 className="tw-text-[18px] tw-font-bold tw-m-0">Graphic Design</h3>
        <h4 className="tw-text-[14px] tw-font-bold tw-text-[#737373] tw-m-0">
          English Department
        </h4>
        <div className=" tw-flex tw-flex-row tw-text-[16px] tw-font-bold">
          <p className="tw-text-[#BDBDBD] tw-pr-2 tw-m-0">$16.48</p>
          <p className="tw-text-[#23856D] tw-m-0">$6.48</p>
        </div>
        <Image src={foto6} alt={foto6} className="tw-h-full" />
        <h3 className="tw-text-[18px] tw-font-bold tw-m-0">Graphic Design</h3>
        <h4 className="tw-text-[14px] tw-font-bold tw-text-[#737373] tw-m-0">
          English Department
        </h4>
        <div className=" tw-flex tw-flex-row tw-text-[16px] tw-font-bold">
          <p className="tw-text-[#BDBDBD] tw-pr-2 tw-m-0 ">$16.48</p>
          <p className="tw-text-[#23856D] tw-m-0">$6.48</p>
        </div>
        <Image src={foto7} alt={foto7} className="tw-h-full" />
        <h3 className="tw-text-[18px] tw-font-bold tw-m-0">Graphic Design</h3>
        <h4 className="tw-text-[14px] tw-font-bold tw-text-[#737373] tw-m-0">
          English Department
        </h4>
        <div className=" tw-flex tw-flex-row tw-text-[16px] tw-font-bold">
          <p className="tw-text-[#BDBDBD] tw-pr-2 tw-m-0">$16.48</p>
          <p className="tw-text-[#23856D] tw-m-0">$6.48</p>
        </div>
        <Image src={foto8} alt={foto8} className="tw-h-full" />
        <h3 className="tw-text-[18px] tw-font-bold tw-m-0">Graphic Design</h3>
        <h4 className="tw-text-[14px] tw-font-bold tw-text-[#737373] tw-m-0">
          English Department
        </h4>
        <div className=" tw-flex tw-flex-row tw-text-[16px] tw-font-bold tw-m-0">
          <p className="tw-text-[#BDBDBD] tw-pr-2 tw-m-0">$16.48</p>
          <p className="tw-text-[#23856D] tw-m-0">$6.48</p>
        </div>
      </div>

      {/* <div className="tw-flex tw-flex-row  tw-justify-center"> 
        <Image src={foto1} alt="qwe" /> 
      </div> 
      <Button 
        variant="contained" 
        disableElevation 
        className="tw-bg-[#FFF] tw-text-black" 
      > 
        MEN 
      </Button> */}
    </div>
  );
};

export default ProductCardMobile;
