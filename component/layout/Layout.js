import Nbar from "../navbar/Nbar";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
var Data = [
  {
    id: 1,
    label: "Giriş Bölümü",
    link: "/",
  },
  {
    id: 2,
    label: "Anasayfa",
    link: "/home",
  },
  {
    id: 3,
    label: "İletişim",
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
