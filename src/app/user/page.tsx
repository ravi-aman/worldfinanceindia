import ImagesSliderDemo from "@/components/Hero";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import CallToAction from "@/components/CallToAction"
import Features from "@/components/Features"
import Statistics from "@/components/Statistics";
export default function Home() {
  return (
    <main className="flex  flex-col justify-center items-center ">

      <ImagesSliderDemo />
      <Service />
      <Features/>
      <Statistics/>
      <CallToAction/>
      <Testimonial/>
    </main>
  );
}
