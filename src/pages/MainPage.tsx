import { GridBg } from "@components/index";
import {
  AboutSection,
  ContactSection,
  HomeSection,
  ProjectSection,
} from "@sections/index";

const MainPage = (): JSX.Element => {
  return (
    <>
      <GridBg
        rows={60}
        columns={60}
        spacing={32}
        grossor={1}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
        }}
      />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
};

export default MainPage;
