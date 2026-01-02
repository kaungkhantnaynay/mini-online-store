import Image from "next/image";
import CustomCarousel from "./components/CustomCarousel";
import { Category } from "@mui/icons-material";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Quantity from "./components/Quantity";

export default function Home() {
  return (
    <>
      <CustomCarousel/>
      <Categories/>
      <Products/>
      <Quantity/>
    </>
  );
}
