import Image from "next/image";
import { Inter } from "next/font/google";
import RecentListings from "@/components/Recent_listings";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return <RecentListings />;
}
