import ImagesSliderDemo from "@/components/Hero";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import CallToAction from "@/components/CallToAction"
import Features from "@/components/Features"
import Statistics from "@/components/Statistics";
import RecomendedVideo from "@/components/Recomendedvideo";
import LatestBLog from "@/components/ui/Blogs";
export default function Home() {
  return (
    <main className="flex  flex-col justify-center items-center ">

      <ImagesSliderDemo />
      <Service />
      {/* <RecomendedVideo/> */}
      <Features/>

      <Statistics/>
      <CallToAction/>
      <Testimonial/>
      <LatestBLog/>
    </main>
  );
}
