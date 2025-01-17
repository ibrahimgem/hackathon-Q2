import Image from "next/image";
import Content from "./components/content";
import Hero from "./components/hero";
import { PickAndDrop } from "./components/pickanddrop";

export default function Home() {
  return (
    <div className="bg-[#F6F7F9] max-w-[1440px] m-auto">
      <Hero />
      <PickAndDrop />
      <Content />
      {/* <Content/> */}
    </div>
  );
}
