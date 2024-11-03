import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Outro from "@/components/Outro";
import Porto from "@/components/Porto";

export default function Home() {
  return (
    <main className="relative bg-white-100 p-1 text-gray-900 sm:p-12">
      <Hero/>
      <Intro/>
      <Porto/>
      <Feedback/>
      <Outro/>
    </main>
    
  );
}
