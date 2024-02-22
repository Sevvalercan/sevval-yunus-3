import Nbar from "../navbar/Nbar";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
var Data = [
  {
    id: 1,
    label: "Anasayfa",
    link: "/",
  },
  {
    id: 2,
    label: "Home",
    link: "/home",
  },
  {
    id: 3,
    label: "Contact",
    link: "/contact",
  },
];

const Layout = ({ children }) => {
const [menuData, setData] = useState( Data );

  return (
    <div>
      <Nbar data={menuData} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
