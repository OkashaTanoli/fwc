import { Footer, Navbar } from "@/components/common";
import { Achievements, BecomeMentor, FlexibleMentorship, ForYou, Hero, Mentors, MentorsCompany, Vision, WhyMentorWithUs } from "@/components/home";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Vision />
      <Achievements />
      <FlexibleMentorship />
      <MentorsCompany />
      <ForYou />
      <Mentors />
      <WhyMentorWithUs />
      <BecomeMentor />
      <Footer />
    </div>
  );
}
