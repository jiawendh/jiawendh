import Apps from "../components/projects/apps_section";
import Arts from "../components/projects/arts_section";
import Games from "../components/projects/games_section";
import Websites from "../components/projects/websites_section";
import ScrollToTop from "../components/scrollToTop";
import SubPage from "../components/subpage";

export default function Projects() {
  return (
    <SubPage>
      <Websites />
      <Games />
      <Apps />
      <Arts />
      <ScrollToTop />
    </SubPage>
  );
}
