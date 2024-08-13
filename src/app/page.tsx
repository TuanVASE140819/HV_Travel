  import Image from "next/image";
  import Link from 'next/link';
import MainContent from "@/components/MainContent";
import Banner from "@/components/Banner";
  export default function Home() {
    return (
      <div>
        <Banner />
        <MainContent />
      </div>
    );
  }
