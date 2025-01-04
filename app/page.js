import Image from "next/image";
import { images } from "./utils";
import Hero1 from "./hero/Hero1";
import Hero2 from "./hero/Hero2";
import Hero3 from "./hero/Hero3";
import Hero4 from "./hero/Hero4";
export default function Home() {
  return (
    <main className="pb-10 sm:px-0 px-2">
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
    </main>
  );
}
