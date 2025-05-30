'use client';
import FeatureSection from "./Components/future_section";
import HeroSection from "./Components/hero_section";
import NewsletterSection from "./Components/newsletter_section";
import ProductShowcase from "./Components/product_showcase";
import VideoSnap from "./Components/VideoSnap";
import styles from "./page.module.css";
import { Cpu, Battery, Zap, ShieldCheck } from "lucide-react";

// Mock data for products
const featuredProducts = [
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    tagline: "Titanium. So strong. So light. So Pro.",
    price: "From $999",
    imageSrc: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "iphone",
    colors: ["#555555", "#E5D3B3", "#161616"],
    isNew: true,
  },
  {
    id: "macbook-pro-m3",
    name: "MacBook Pro",
    tagline: "Supercharged by M3 Pro and M3 Max.",
    price: "From $1999",
    imageSrc: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mac",
    colors: ["#747474", "#E0E0E0"],
    isNew: true,
  },
  {
    id: "ipad-pro",
    name: "iPad Pro",
    tagline: "Supercharged by M2",
    price: "From $799",
    imageSrc: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "ipad",
    colors: ["#747474", "#E0E0E0"],
  },
  {
    id: "apple-watch-series-9",
    name: "Apple Watch Series 9",
    tagline: "Smarter. Brighter. Mightier.",
    price: "From $399",
    imageSrc: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "watch",
    colors: ["#FF6D6D", "#747474", "#E0E0E0"],
  },
  {
    id: "airpods-pro",
    name: "AirPods Pro",
    tagline: "Adaptive Audio. Now playing.",
    price: "From $249",
    imageSrc: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "airpods",
  },
];

// Features for iPhone
const iphoneFeatures = [
  {
    title: "A17 Pro Chip",
    description: "The fastest chip ever in a smartphone, with a breakthrough GPU and a powerful Neural Engine for AI tasks.",
    icon: <Cpu className="h-6 w-6 text-primary" />,
  },
  {
    title: "Pro Camera System",
    description: "A 48MP main camera with an advanced telephoto camera for incredible optical quality and macro photography.",
    icon: <Zap className="h-6 w-6 text-primary" />,
  },
  {
    title: "All-day Battery Life",
    description: "Get up to 29 hours of video playback and fast charging with USB-C.",
    icon: <Battery className="h-6 w-6 text-primary" />,
  },
  {
    title: "Titanium Design",
    description: "Aerospace-grade titanium and Ceramic Shield provide incredible durability and water resistance.",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection
        title="iPhone 15 Pro"
        subtitle="Titanium. So strong. So light. So Pro."
        imageSrc="https://digitalassets-taa.cdn-apple.com/en/us/spotlight-apple-intelligence-wwspotlight-apple-intelligence-wwspotlight-apple-intelligence_16x9.jpg?output-format=jpg&output-quality=70&resize=2880:*"
        theme="dark"
      />

      <ProductShowcase
        title="Featured Products"
        subtitle="Explore our latest innovations"
        products={featuredProducts}
      />
      <VideoSnap video={'https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large_2x.mp4'} />
      <FeatureSection
        heading="A camera that captures your wildest imagination"
        subheading="From everyday moments to once-in-a-lifetime events, iPhone 15 Pro transforms every photo into a masterpiece."
        features={iphoneFeatures}
        imageSrc="https://images.pexels.com/photos/5749802/pexels-photo-5749802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="iPhone 15 Pro camera system"
        imagePosition="left"
        theme="dark"
      />

      <NewsletterSection theme="light" />
    </div>
  );
}