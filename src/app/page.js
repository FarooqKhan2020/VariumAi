import Hero from "./component/Home/Hero";
import NavigationLinkBar from "./component/Home/NavigationLinkBar";
import AboutVarium from "./component/Home/AboutVarium";
import OurServices from "./component/Home/OurServices";
export default function HomePage() {
  return (
    <>
      <Hero />
      <NavigationLinkBar />
      <AboutVarium />
      <OurServices />
    </>
  );
}
