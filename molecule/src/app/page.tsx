import Image from "next/image";
import Aurora from '@/jsrepo/Backgrounds/Aurora/Aurora';
// import Navbar from "@/components/navbar/navbar"; //Improve this

export default function Home() {
  return (
    <div>
      <Aurora
      colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
      speed={0.5}
      />
    </div>
  );
}