import Beranda from "./beranda/page";
import Navbar from "../../src/app/components/Navbar";
import { CartProvider } from "../context/Contextcart";

export default function HomePage() {
  return (
    <CartProvider>
      <Navbar />
      <Beranda />
    </CartProvider>
  );
}
