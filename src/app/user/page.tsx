import ImagesSliderDemo from "@/components/Hero";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import CallToAction from "@/components/CallToAction"
import Features from "@/components/Features"
import Statistics from "@/components/Statistics";
import RecomendedVideo from "@/components/Recomendedvideo";
import LatestBLog from "@/components/ui/Blogs";
import Benefits from "@/components/Benifits";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/testimonials";
export default function Home() {
  return (
    <main className="flex  flex-col justify-center items-center ">

      <ImagesSliderDemo />
      <Service />
      {/* <RecomendedVideo/> */}
      <Features />
      <Benefits />
      <CallToAction />
      <Statistics />
      <Testimonials />
      <ContactForm />
      <LatestBLog />
    </main>
  );
}
