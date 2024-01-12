const { default: HeaderDesktop } = require("./HeaderDesktop");
const { default: HeaderMobile } = require("./HeaderMobile");

export const NAVIGATIONS = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/product",
    title: "Product",
  },
  {
    href: "/pricing",
    title: "Pricing",
  },
  {
    href: "/contact",
    title: "Contact",
  },
  {
    href: "/team",
    title: "Team",
  },
];

const Header = () => {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
};
export default Header;
