import Hero from "./components/hero";
import { PickAndDrop } from "./components/pickanddrop";
import Catalogue from "./components/catalogue";

export default function Home() {
  return (
    <div className="bg-[#F6F7F9] max-w-[1440px] m-auto">
      
      <Hero />
      <PickAndDrop />
      <Catalogue />
    </div>
  );
}