import Image from "next/image";
import { images } from "./utils";
import Hero1 from "./hero/Hero1";
import Hero2 from "./hero/Hero2";
export default function Home() {
  return (
    <main className="pb-10">
      <Hero1 />
      <Hero2 />
    </main>
  );
}
