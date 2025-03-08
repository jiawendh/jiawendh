import SubPage from "../components/subpage";
import ScrollToTop from "../components/scrollToTop";
import CareerSection from "../components/background/career_section";
import AcademicSection from "../components/background/academic_section";
import HobbySection from "../components/background/hobby_section";

export default function Home() {
  return (
    <SubPage>
      <CareerSection />
      <AcademicSection />
      <HobbySection />
      <ScrollToTop />
    </SubPage>
  );
}
