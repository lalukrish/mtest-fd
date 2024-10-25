import AdSection from "@/components/adSection";
import ClientSection from "@/components/clientSection";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import ImageSection from "@/components/imageSection";
import SlideSection from "@/components/slideSection";
import VideoSection from "@/components/videosection";
import WhyUsSection from "@/components/whyUsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <ImageSection />
      <ClientSection />
      <WhyUsSection />
      <AdSection />
      <SlideSection />
      <Footer />
    </>
  );
}
