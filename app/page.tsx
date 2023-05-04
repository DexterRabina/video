import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen text-5xl text-rose-500 bg-neutral-200">
        hellow
      </div>
    </main>
  );
}
